# Example: Postmortem

This shows a real input and Claude output for blameless postmortems.

---

## Input

```
Using the postmortem prompt with:

{{INCIDENT_TITLE}}: Payment processing outage
{{SEVERITY}}: Sev1
{{INCIDENT_DATE}}: January 10, 2026
{{DURATION}}: 47 minutes (14:23 - 15:10 UTC)

{{IMPACT}}:
- All payment processing failed for 47 minutes
- ~2,400 failed transactions
- Estimated $180K in lost revenue
- ~15% of affected users retried successfully after resolution
- Customer support received 340 tickets

{{INCIDENT_DESCRIPTION}}:
Payment processing started failing at 14:23 UTC. All Stripe API calls returned 500 errors. Initial investigation focused on our payment service, but root cause was an expired TLS certificate on our payment gateway proxy. Certificate had expired at 14:22 UTC. 

{{TIMELINE}}:
- 14:22: Certificate expires on payment-proxy-01
- 14:23: First payment failures begin
- 14:25: PagerDuty alert fires for payment error rate
- 14:28: On-call engineer acknowledges, starts investigation
- 14:35: Payment service restarted (no effect)
- 14:42: Logs show TLS handshake failures
- 14:48: Identified expired certificate on proxy
- 14:55: New certificate generated and deployed
- 15:02: Payments processing again
- 15:10: Error rate back to baseline, incident closed

{{ROOT_CAUSE}}:
TLS certificate on payment-proxy-01 expired. Certificate was manually provisioned 2 years ago and was not in our cert-manager system. No alerting existed for certificate expiration on this host.

{{RESOLUTION}}:
Generated new certificate via cert-manager, deployed to payment-proxy-01, restarted nginx.

{{TEAMS_INVOLVED}}:
- Payments team (on-call: Marcus)
- Infrastructure team (escalated: Sarah)
- Customer Support (ticket triage)
```

---

## Claude Output

# Postmortem: Payment Processing Outage

**Date:** January 10, 2026
**Severity:** Sev1
**Duration:** 47 minutes (14:23 - 15:10 UTC)
**Authors:** Marcus Chen, Sarah Kim
**Status:** Final

---

## Summary

Payment processing was down for 47 minutes due to an expired TLS certificate on our payment gateway proxy. The certificate had been manually provisioned 2 years ago and wasn't tracked by our cert-manager system. ~2,400 transactions failed, resulting in approximately $180K in lost revenue.

---

## Impact

**User Impact:**
- 100% of payment attempts failed for 47 minutes
- ~2,400 transactions affected
- ~15% of users successfully retried after resolution
- 340 support tickets submitted

**Business Impact:**
- Estimated $180K lost revenue
- SLA breach (target: 99.95%, actual for day: 96.7%)
- Brand reputation impact (social media complaints)

**Technical Impact:**
- Payment service healthy but unable to reach Stripe
- No data loss or corruption

---

## Timeline (All times UTC)

| Time | Event |
|------|-------|
| 14:22 | TLS certificate expires on payment-proxy-01 |
| 14:23 | First payment failure |
| 14:25 | PagerDuty alert: payment_error_rate > 5% |
| 14:28 | On-call (Marcus) acknowledges alert |
| 14:30 | Initial hypothesis: Stripe outage. Checked status.stripe.com — green |
| 14:35 | Restarted payment service — no improvement |
| 14:38 | Escalated to Infrastructure (Sarah) |
| 14:42 | Found TLS handshake errors in nginx logs |
| 14:48 | Identified expired certificate (expired 14:22) |
| 14:52 | Decision: generate new cert via cert-manager |
| 14:55 | New certificate deployed |
| 14:58 | Nginx restarted |
| 15:02 | Payments processing successfully |
| 15:10 | Error rate at baseline, incident closed |

**Time to Detect:** 3 minutes
**Time to Mitigate:** 34 minutes (from acknowledgment to fix)
**Time to Resolve:** 47 minutes total

---

## Root Cause Analysis

### What Happened

The TLS certificate on payment-proxy-01 expired at 14:22 UTC on January 10, 2026. This proxy sits between our payment service and Stripe's API. When the certificate expired, TLS handshakes failed, causing all payment requests to return 500 errors.

### Contributing Factors

1. **Manual certificate provisioning** — This certificate was created manually 2 years ago during initial setup and was never migrated to cert-manager.

2. **No certificate expiration monitoring** — Our Prometheus alerting covers cert-manager-managed certificates but not manually provisioned ones.

3. **Undocumented infrastructure** — payment-proxy-01 was set up by a former employee and wasn't documented in our infrastructure runbooks.

4. **Initial misdirection** — First 10 minutes spent investigating the wrong layer (payment service vs. proxy).

### Why It Wasn't Caught Earlier

- No alert for certificate expiration on this host
- Certificate wasn't in cert-manager's inventory
- No scheduled audit of manually provisioned certificates
- Infrastructure diagram didn't show this proxy layer

---

## What Went Well

- **Alert fired quickly** — Payment error rate alert triggered within 3 minutes
- **Fast escalation** — Infrastructure was pulled in within 10 minutes
- **Clear logs** — Once we looked at the right logs, the issue was obvious
- **Quick fix once identified** — 7 minutes from identification to resolution
- **Customer support mobilized** — CS started proactive outreach within 20 minutes

---

## What Went Poorly

- **47 minutes to resolution** — Too long for payment processing
- **10 minutes investigating wrong layer** — We didn't have a clear picture of the payment flow architecture
- **No cert expiration alert** — Completely preventable
- **Undocumented infrastructure** — Had to discover the proxy existed
- **No runbook** — Payment outage runbook didn't mention the proxy layer

---

## Where We Got Lucky

- **Cert-manager was available** — If we'd had to manually generate a certificate, add another 15-20 minutes
- **Happened during business hours** — On-call was awake and at computer
- **Not during peak traffic** — Occurred at 9:23 AM ET, not during evening peak

---

## Action Items

| Priority | Action | Owner | Due | Tracking |
|----------|--------|-------|-----|----------|
| P0 | Audit all infrastructure for manually provisioned certificates | Sarah | Jan 15 | INFRA-892 |
| P0 | Add certificate expiration alerting for all hosts | Marcus | Jan 17 | INFRA-893 |
| P1 | Migrate all manual certs to cert-manager | Sarah | Jan 24 | INFRA-894 |
| P1 | Document payment flow architecture including all proxies | Marcus | Jan 20 | PAY-445 |
| P1 | Update payment outage runbook with proxy layer | Marcus | Jan 17 | PAY-446 |
| P2 | Add architecture review to quarterly checklist | Sarah | Feb 1 | INFRA-895 |

---

## Lessons Learned

1. **Manual provisioning creates hidden debt** — Anything set up manually and not migrated to managed systems will eventually cause an outage.

2. **Infrastructure documentation rots** — Our diagrams were 18 months out of date. Need regular review cadence.

3. **Alert on certificate expiration everywhere** — Not just cert-manager managed certs. Defense in depth.

---

## Appendix

### A. Certificate Audit Results

After this incident, we audited all hosts and found:
- 3 additional manually provisioned certificates
- 1 expiring within 30 days (addressed in INFRA-892)

### B. Error Logs

```
[14:23:01] payment-proxy-01 nginx: SSL_do_handshake() failed
[14:23:01] payment-proxy-01 nginx: SSL: error:14094412:SSL routines:ssl3_read_bytes:sslv3 alert bad certificate
```

---

*This postmortem follows blameless principles: we focus on systemic improvements, not individual blame.*

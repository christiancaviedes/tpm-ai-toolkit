# Example: Sprint Planning

This shows a real input and Claude output for sprint planning.

---

## Input

```
Using the sprint planning prompt with:

{{TEAM_SIZE}}: 5 engineers
{{SPRINT_LENGTH}}: 2 weeks
{{VELOCITY}}: 42 points
{{SPRINT_NUMBER}}: Sprint 23
{{START_DATE}}: January 13, 2026
{{END_DATE}}: January 24, 2026
{{PTO_DAYS}}: Maria: 3 days (MLK day + personal), James: 1 day (dentist)

{{CARRYOVER}}:
- AUTH-234: OAuth token refresh bug (3 pts, 80% complete, blocked on security review)
- AUTH-241: Add rate limiting to login endpoint (5 pts, not started, deprioritized last sprint)

{{BACKLOG}}:
1. AUTH-250: Implement SSO for enterprise customers (13 pts) - PM priority #1
2. AUTH-252: Password reset flow redesign (8 pts) - customer complaints
3. AUTH-255: Add MFA enrollment nudge (5 pts) - growth experiment
4. AUTH-258: Session timeout configuration (3 pts) - enterprise request
5. AUTH-260: Audit log export API (8 pts) - compliance requirement, due Jan 31
6. AUTH-262: Login page A/B test framework (5 pts) - growth team request
7. AUTH-265: Fix intermittent 2FA SMS delivery (3 pts) - 12 customer tickets
8. AUTH-268: Update auth SDK to v2 (8 pts) - tech debt
9. AUTH-270: Add biometric auth option research (2 pts) - discovery only
```

---

## Claude Output

## Sprint 23 Plan — January 13-24, 2026

### Capacity Calculation

| Engineer | Base Points | PTO Adjustment | Available |
|----------|-------------|----------------|-----------|
| Maria | 8.4 | -2.5 (3 days) | 5.9 |
| James | 8.4 | -0.8 (1 day) | 7.6 |
| Chen | 8.4 | 0 | 8.4 |
| Priya | 8.4 | 0 | 8.4 |
| Alex | 8.4 | 0 | 8.4 |
| **Total** | 42 | -3.3 | **38.7** |

**Adjusted Velocity:** 38.7 points (rounded to 38)
**Carryover:** 8 points (AUTH-234: 3 pts remaining, AUTH-241: 5 pts)
**Available for new work:** 30 points
**Buffer (15%):** ~5 points
**Target commitment:** 33-35 points total

---

### Sprint Goals

1. **Unblock enterprise SSO** — Complete SSO implementation to enable Q1 enterprise deals
2. **Reduce auth-related support tickets** — Fix SMS delivery and password reset issues
3. **Meet compliance deadline** — Ship audit log export before Jan 31 deadline

---

### Committed Work

| Ticket | Title | Points | Owner | Dependencies | Risk |
|--------|-------|--------|-------|--------------|------|
| AUTH-234 | OAuth token refresh bug | 3 | James | ⚠️ Security review | Medium - blocked |
| AUTH-250 | SSO for enterprise | 13 | Chen + Priya | Design complete | High - large scope |
| AUTH-252 | Password reset redesign | 8 | Maria | Design in Figma | Low |
| AUTH-260 | Audit log export API | 8 | Alex | Schema approved | Medium - compliance |
| AUTH-265 | Fix 2FA SMS delivery | 3 | James | Twilio access | Low |
| **Total** | | **35** | | | |

---

### Stretch Goals

| Ticket | Points | Notes |
|--------|--------|-------|
| AUTH-241 | 5 | Rate limiting - pull in if SSO finishes early |
| AUTH-258 | 3 | Session timeout - quick win if capacity |

---

### Not This Sprint

| Ticket | Points | Reason |
|--------|--------|--------|
| AUTH-255 | 5 | MFA nudge — growth lower priority than enterprise |
| AUTH-262 | 5 | A/B framework — nice to have, not urgent |
| AUTH-268 | 8 | SDK update — tech debt can wait |
| AUTH-270 | 2 | Biometric research — deprioritized |

---

### Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| SSO scope creep (13 pts is large) | Medium | High | Daily standups, slice to MVP if needed |
| Security review delays AUTH-234 | High | Medium | Escalate Monday if not unblocked |
| Audit export misses Jan 31 | Low | High | Alex starts Day 1, early review |
| Maria PTO creates knowledge gap | Low | Medium | Chen covers password reset questions |

---

### Recommendations

1. **Escalate AUTH-234 Monday** — It's been blocked for a full sprint. If security can't review by Tuesday, pull it from sprint.

2. **Split SSO if needed** — 13 points is risky. Identify MVP vs nice-to-have by Wednesday standup.

3. **Audit export needs early review** — Schedule code review for Jan 20 to have buffer before deadline.

4. **Discussion for planning meeting:**
   - Is SSO truly shippable in one sprint, or should we phase it?
   - Does audit export need to be feature-complete or just API-ready?
   - Who covers for Maria on password reset questions?

---

### Key Dates This Sprint

| Date | Event |
|------|-------|
| Jan 13 | Sprint start |
| Jan 15 | Maria PTO starts |
| Jan 17 | Maria returns |
| Jan 20 | Midpoint — SSO should be 60%+ |
| Jan 20 | Code review target for AUTH-260 |
| Jan 23 | Sprint demo |
| Jan 24 | Sprint end |
| Jan 31 | Audit export compliance deadline |

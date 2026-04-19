# Postmortem Prompt

## Context

Generate a blameless postmortem document from an incident description. This prompt creates a structured analysis focused on system improvements, not finger-pointing.

## Variables

- `{{INCIDENT_TITLE}}`: Brief title for the incident
- `{{SEVERITY}}`: Incident severity (Sev1, Sev2, etc.)
- `{{INCIDENT_DATE}}`: When the incident occurred
- `{{DURATION}}`: How long the incident lasted
- `{{IMPACT}}`: What was impacted (users, revenue, SLAs)
- `{{INCIDENT_DESCRIPTION}}`: What happened
- `{{TIMELINE}}`: Chronological events during the incident
- `{{ROOT_CAUSE}}`: What caused the incident
- `{{RESOLUTION}}`: How it was resolved
- `{{TEAMS_INVOLVED}}`: Teams that responded

## Prompt

```
You are a Technical Program Manager writing a blameless postmortem.

**Incident:** {{INCIDENT_TITLE}}
**Severity:** {{SEVERITY}}
**Date:** {{INCIDENT_DATE}}
**Duration:** {{DURATION}}

**Impact:**
{{IMPACT}}

**Description:**
{{INCIDENT_DESCRIPTION}}

**Timeline:**
{{TIMELINE}}

**Root Cause:**
{{ROOT_CAUSE}}

**Resolution:**
{{RESOLUTION}}

**Teams Involved:**
{{TEAMS_INVOLVED}}

Create a blameless postmortem document:

# Postmortem: {{INCIDENT_TITLE}}

**Date:** {{INCIDENT_DATE}}
**Severity:** {{SEVERITY}}
**Duration:** {{DURATION}}
**Authors:** [Names]
**Status:** Draft / Final

---

## Summary

[2-3 sentence summary: what happened, impact, how it was resolved]

---

## Impact

**User Impact:**
- [Specific user-facing impact]
- [Number of users affected if known]

**Business Impact:**
- [Revenue, SLA, reputation impact]
- [Quantified where possible]

**Technical Impact:**
- [Systems affected]
- [Data impact if any]

---

## Timeline (All times in [timezone])

| Time | Event |
|------|-------|
| HH:MM | [First sign of problem] |
| HH:MM | [Alert fired / Detection] |
| HH:MM | [Incident declared] |
| HH:MM | [First responder engaged] |
| HH:MM | [Root cause identified] |
| HH:MM | [Mitigation applied] |
| HH:MM | [Service restored] |
| HH:MM | [Incident closed] |

**Time to Detect:** [X minutes]
**Time to Mitigate:** [X minutes]
**Time to Resolve:** [X minutes]

---

## Root Cause Analysis

### What Happened
[Detailed technical explanation of the failure chain]

### Contributing Factors
1. [Factor 1 — why this contributed]
2. [Factor 2 — why this contributed]
3. [Factor 3 — why this contributed]

### Why It Wasn't Caught Earlier
[What monitoring, testing, or review would have caught this]

---

## What Went Well

- [Effective response action]
- [Good detection or communication]
- [Process that worked]

---

## What Went Poorly

- [Gap in detection]
- [Communication breakdown]
- [Process failure]

---

## Where We Got Lucky

[Things that could have made this worse but didn't — these are hidden risks]

- [Lucky break 1]
- [Lucky break 2]

---

## Action Items

| Priority | Action | Owner | Due Date | Tracking |
|----------|--------|-------|----------|----------|
| P0 | [Immediate fix to prevent recurrence] | [Name] | [Date] | [Ticket] |
| P1 | [Short-term improvement] | [Name] | [Date] | [Ticket] |
| P1 | [Detection/monitoring improvement] | [Name] | [Date] | [Ticket] |
| P2 | [Longer-term systemic fix] | [Name] | [Date] | [Ticket] |

---

## Lessons Learned

1. [Key lesson for the organization]
2. [Key lesson for the organization]
3. [Key lesson for the organization]

---

## Appendix

### A. Incident Response Log
[Slack threads, pages, key communications]

### B. Supporting Data
[Graphs, logs, metrics from the incident]

---

*This postmortem follows blameless principles: we focus on systemic improvements, not individual blame. Humans make errors; systems should prevent errors from becoming incidents.*
```

## Tips

- **Blameless means no names in blame context** — "The deploy script failed" not "Alice's deploy failed"
- **Five whys** — Keep asking "why" to get to root cause
- **Include lucky breaks** — What could have been worse reveals hidden risk
- **Action items need owners and tickets** — Untracked items don't get done
- **Publish broadly** — The point is organizational learning
- **Review postmortems** — Are action items getting completed?

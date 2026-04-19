# Blocker Escalation Prompt

## Context

Generate a clear, actionable blocker escalation message. This prompt creates escalations that get results by being specific about impact, ask, and timeline.

## Variables

- `{{BLOCKER_DESCRIPTION}}`: What is blocked and why
- `{{BLOCKED_WORK}}`: What work is impacted
- `{{IMPACT}}`: Business or timeline impact if not resolved
- `{{BLOCKED_SINCE}}`: When the blocker started
- `{{ATTEMPTS_MADE}}`: What's already been tried
- `{{OWNER}}`: Who can unblock this
- `{{DEADLINE}}`: When resolution is needed by
- `{{ESCALATION_PATH}}`: Who this is being escalated to

## Prompt

```
You are a Technical Program Manager escalating a blocker.

**Blocker Details:**
- Description: {{BLOCKER_DESCRIPTION}}
- Blocked since: {{BLOCKED_SINCE}}
- Blocking owner: {{OWNER}}

**Impact:**
- Blocked work: {{BLOCKED_WORK}}
- Business impact: {{IMPACT}}
- Resolution needed by: {{DEADLINE}}

**Resolution Attempts:**
{{ATTEMPTS_MADE}}

**Escalation Path:**
{{ESCALATION_PATH}}

Write a blocker escalation message that is:

1. **Subject line** — Clear and urgent
   Format: [BLOCKER] [Project] — [One-line issue] — Need by [Date]

2. **Opening** — BLUF (Bottom Line Up Front)
   - What's blocked
   - What we need
   - By when

3. **Context** (keep brief)
   - Timeline of the blocker
   - What's been tried
   - Why it hasn't worked

4. **Impact**
   - Specific deliverables at risk
   - Downstream effects
   - Cost of delay (if quantifiable)

5. **Ask** (be extremely specific)
   - Exactly what action is needed
   - From whom
   - By when
   - What happens if we don't get it

6. **Offer**
   - What you'll do to help
   - Alternative paths if they exist
   - Escalation next steps if this doesn't resolve

Tone: Professional, factual, urgent but not panicked. Focus on solving the problem, not assigning blame.
```

## Tips

- **Escalate early** — 24 hours with no progress is enough
- **One ask, one owner** — Multiple asks get ignored
- **Quantify impact** — "2 days delayed" is clearer than "significant impact"
- **Show your work** — What you've already tried proves this is real
- **Propose solutions** — Come with options, not just problems
- **Copy the right people** — Escalation only works if decision-makers see it

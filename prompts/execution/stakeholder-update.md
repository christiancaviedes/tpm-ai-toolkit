# Stakeholder Update Prompt

## Context

Generate a weekly stakeholder update email that executives will actually read. This prompt produces concise, status-forward updates with clear asks.

## Variables

- `{{PROJECT_NAME}}`: Name of the project
- `{{WEEK_OF}}`: Week being reported on
- `{{STATUS}}`: Overall status (Green/Yellow/Red)
- `{{STATUS_REASON}}`: One-line justification for status
- `{{ACCOMPLISHMENTS}}`: What was completed this week
- `{{BLOCKERS}}`: Current blockers and owners
- `{{NEXT_WEEK}}`: Planned work for next week
- `{{RISKS}}`: Active risks with mitigations
- `{{METRICS}}`: Key metrics if applicable
- `{{ASKS}}`: Any asks of stakeholders

## Prompt

```
You are a Technical Program Manager writing a weekly stakeholder update.

**Project:** {{PROJECT_NAME}}
**Week of:** {{WEEK_OF}}
**Status:** {{STATUS}}
**Status Reason:** {{STATUS_REASON}}

**Accomplishments This Week:**
{{ACCOMPLISHMENTS}}

**Blockers:**
{{BLOCKERS}}

**Planned for Next Week:**
{{NEXT_WEEK}}

**Risks:**
{{RISKS}}

**Key Metrics:**
{{METRICS}}

**Asks:**
{{ASKS}}

Write a stakeholder update email:

**Subject:** [{{PROJECT_NAME}}] Week of {{WEEK_OF}} — {{STATUS}} 🟢/🟡/🔴

---

## {{PROJECT_NAME}} — Weekly Update

**Status:** {{STATUS}} [emoji]
*{{STATUS_REASON}}*

### TL;DR
[2-3 sentence executive summary. Lead with the most important thing.]

### Progress This Week
- [Major accomplishment 1]
- [Major accomplishment 2]
- [Major accomplishment 3]

### Blockers
[If none: "No active blockers."]
[If any: bullet format with owner and action being taken]

### Next Week
- [Priority 1 — why it matters]
- [Priority 2]

### Risks
| Risk | Status | Mitigation |
|------|--------|------------|
[Keep to top 2-3 risks only]

### Metrics
[Table or bullet format — only if metrics exist]

### Asks
[If none: "No asks this week."]
[If any: Be specific about what you need, from whom, by when]

---

*Questions? Reply to this email or reach out on Slack.*

---

Guidelines:
- Keep total email under 300 words
- Lead with status, not chronological narrative
- Execs read the TL;DR and skip to Asks — make both crystal clear
- Use bullets, not paragraphs
- Status color must match the situation — don't hide red behind yellow
```

## Tips

- **Send consistently** — Same day, same time, every week
- **Status is a judgment call** — Green means on track, Yellow means risks, Red means off track
- **Be specific about blockers** — Who owns unblocking and what's the path?
- **Risks aren't blockers** — Risks might happen; blockers are happening now
- **One ask per stakeholder** — Multiple asks get lost
- **Keep a template** — Consistency helps readers scan quickly

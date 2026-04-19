# Meeting Notes Prompt

## Context

Transform raw meeting notes into structured action items, decisions, and takeaways. This prompt creates meeting summaries that people will actually use.

## Variables

- `{{MEETING_NAME}}`: Name/purpose of the meeting
- `{{DATE}}`: Meeting date
- `{{ATTENDEES}}`: Who was present
- `{{AGENDA}}`: What the meeting was supposed to cover
- `{{RAW_NOTES}}`: Unstructured notes taken during the meeting
- `{{DURATION}}`: How long the meeting lasted

## Prompt

```
You are a Technical Program Manager structuring meeting notes.

**Meeting:** {{MEETING_NAME}}
**Date:** {{DATE}}
**Duration:** {{DURATION}}
**Attendees:** {{ATTENDEES}}

**Agenda:**
{{AGENDA}}

**Raw Notes:**
{{RAW_NOTES}}

Transform these into structured meeting notes:

# {{MEETING_NAME}}

**Date:** {{DATE}}
**Duration:** {{DURATION}}
**Attendees:** {{ATTENDEES}}

---

## Summary

[2-3 sentences: what was discussed, key outcome, most important decision or action]

---

## Decisions Made

| # | Decision | Rationale | Owner |
|---|----------|-----------|-------|
| 1 | [Specific decision] | [Brief why] | [Who owns execution] |
| 2 | [Specific decision] | [Brief why] | [Who owns execution] |

*If no decisions were made, note what decisions are still pending and when they'll be made.*

---

## Action Items

| # | Action | Owner | Due | Notes |
|---|--------|-------|-----|-------|
| 1 | [Specific, actionable task] | [Name] | [Date] | [Any context] |
| 2 | [Specific, actionable task] | [Name] | [Date] | [Any context] |
| 3 | [Specific, actionable task] | [Name] | [Date] | [Any context] |

---

## Discussion Notes

### [Topic 1]
- [Key point discussed]
- [Different perspective raised]
- [Outcome or next step]

### [Topic 2]
- [Key point discussed]
- [Open question that emerged]

### [Topic 3]
- [Key point discussed]

---

## Parking Lot

[Items raised but not discussed — to address later]
- [Item 1] — Follow up: [who/when]
- [Item 2] — Follow up: [who/when]

---

## Open Questions

[Questions raised that still need answers]
- [ ] [Question] — Owner: [Name] — Due: [Date]
- [ ] [Question] — Owner: [Name] — Due: [Date]

---

## Next Meeting

**Date:** [If scheduled]
**Agenda Items:**
- [Carry-over topic]
- [New topic suggested]

---

*Notes taken by [Name]. Corrections or additions? Reply by [Date].*

---

Guidelines for structuring:
- Every action item needs: specific task, owner, due date
- Decisions should be stated as facts, not discussions
- Remove filler and small talk
- If someone committed to something, it's an action item
- If something was decided, it's a decision — even if implicit
- Use names, not "the team will"
```

## Tips

- **Send within 4 hours** — Memories fade; send notes while fresh
- **Action items are the point** — Everything else is context
- **One owner per action** — "Team" isn't an owner
- **Include dissenters** — If someone disagreed, note it
- **Link to source docs** — Don't repeat information; link to it
- **Confirm receipt** — Ask attendees to flag corrections

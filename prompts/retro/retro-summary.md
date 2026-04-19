# Retro Summary Prompt

## Context

Transform raw retrospective notes into a clean summary with categorized insights and actionable items. This prompt creates a shareable document from messy retro output.

## Variables

- `{{TEAM_NAME}}`: Team name
- `{{SPRINT_NUMBER}}`: Sprint being retro'd
- `{{DATE}}`: Retro date
- `{{ATTENDEES}}`: Who participated
- `{{RAW_NOTES}}`: All the raw input from the retro (sticky notes, comments, etc.)
- `{{VOTING_RESULTS}}`: What items got the most votes
- `{{PREVIOUS_ACTIONS_STATUS}}`: Status of previous retro action items

## Prompt

```
You are a Technical Program Manager summarizing a sprint retrospective.

**Team:** {{TEAM_NAME}}
**Sprint:** {{SPRINT_NUMBER}}
**Date:** {{DATE}}
**Attendees:** {{ATTENDEES}}

**Previous Action Items Status:**
{{PREVIOUS_ACTIONS_STATUS}}

**Raw Retro Notes:**
{{RAW_NOTES}}

**Top Voted Items:**
{{VOTING_RESULTS}}

Create a clean retro summary:

## Sprint {{SPRINT_NUMBER}} Retrospective Summary

**Date:** {{DATE}}
**Attendees:** {{ATTENDEES}} ({{count}} participants)

---

### Previous Action Items Review

| Action | Owner | Status | Notes |
|--------|-------|--------|-------|
[Status: ✅ Done, 🔄 In Progress, ❌ Not Started, ➡️ Carried Over]

**Completion Rate:** X/Y items completed

---

### What Went Well 🎉

**Theme 1: [Theme Name]**
- [Consolidated point]
- [Consolidated point]

**Theme 2: [Theme Name]**
- [Consolidated point]

**Key Win:** [Single most celebrated success]

---

### What Could Be Improved 🔧

**Theme 1: [Theme Name]** ⭐ Top Voted
- [Consolidated point]
- [Root cause if discussed]

**Theme 2: [Theme Name]**
- [Consolidated point]

**Theme 3: [Theme Name]**
- [Consolidated point]

---

### Key Insights 💡

[2-3 sentences synthesizing the most important learnings from this retro]

---

### Action Items

| # | Action | Owner | Due | Success Metric |
|---|--------|-------|-----|----------------|
| 1 | [Specific action] | [Name] | [Date] | [How we know it's done] |
| 2 | [Specific action] | [Name] | [Date] | [How we know it's done] |
| 3 | [Specific action] | [Name] | [Date] | [How we know it's done] |

**Tracking:** Action items will be reviewed in [next retro date / weekly sync].

---

### Parking Lot

[Items raised but not addressed — to revisit later]
- [Item]

---

### Retro Health

**Participation:** [All voices heard / Some quiet / Dominated by few]
**Energy:** [High / Medium / Low]
**Actionability:** [Clear actions / Vague / No actions]

---

*Summary prepared by [Name]. Questions or additions? Reply in thread.*
```

## Tips

- **Share within 24 hours** — Momentum fades fast
- **Consolidate duplicates** — Same feedback said 5 ways should be one bullet
- **Highlight top-voted items** — What the team prioritized matters most
- **Keep actions to 2-3** — More than 3 won't get done
- **Track completion rate** — Pattern of incomplete actions is itself a retro topic
- **Include parking lot** — Show that unaddressed items weren't ignored

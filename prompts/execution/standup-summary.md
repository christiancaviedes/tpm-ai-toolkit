# Standup Summary Prompt

## Context

Transform raw standup bullet points into a clear, formatted standup update. This prompt structures yesterday/today/blockers into consistent, actionable format.

## Variables

- `{{RAW_NOTES}}`: Unstructured bullet points or notes from standup
- `{{TEAM_NAME}}`: Team or project name
- `{{DATE}}`: Date of standup
- `{{SPRINT_CONTEXT}}`: Current sprint number and days remaining

## Prompt

```
You are a Technical Program Manager formatting standup notes.

**Team:** {{TEAM_NAME}}
**Date:** {{DATE}}
**Sprint Context:** {{SPRINT_CONTEXT}}

**Raw Notes:**
{{RAW_NOTES}}

Format these notes into a clean standup summary:

## {{TEAM_NAME}} Standup — {{DATE}}

### ✅ Completed Yesterday
- [Completed item with ticket number if mentioned]
- [Another completed item]

### 🔄 In Progress Today
- [Work item] — [Owner if mentioned]
- [Work item with expected completion if mentioned]

### 🚧 Blockers
- **[Blocker]** — Waiting on [person/team]. [Action being taken if any]

### 📋 Notes
- [Any other relevant updates, PTO, meetings, etc.]

---

**Sprint Progress:** [Brief assessment if enough context provided]

---

Guidelines:
- Remove filler words and conversational language
- Add ticket/issue numbers if mentioned
- Highlight blockers prominently
- If someone is out or has a conflict, note it
- Keep each bullet to one clear sentence
- If something is vague, flag it with [?]
```

## Tips

- **Ticket numbers matter** — They make standups searchable and traceable
- **Blockers need owners** — Who's responsible for unblocking?
- **Flag scope creep** — If "today" list keeps growing, that's a signal
- **Time-bound items** — "Working on X" is less useful than "Finishing X by EOD"
- **Track carryover** — Same item in "today" for 3+ days needs attention

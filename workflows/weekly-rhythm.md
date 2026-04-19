# Weekly TPM Rhythm Workflow

A complete weekly workflow for Technical Program Managers using Claude to stay on top of your programs.

## Overview

This workflow covers the repeating weekly activities that keep programs healthy. Follow this rhythm to maintain visibility, catch risks early, and keep stakeholders informed.

---

## Monday: Set the Week

### 1. Review Last Week's Actions

**Prompt:**
```
Review these action items from last week and categorize by status:

{{PASTE_LAST_WEEK_ACTION_ITEMS}}

For each item, indicate:
- ✅ Completed
- 🔄 In progress (expected completion)
- ❌ Not started (reason)
- ➡️ Carry forward (new due date)

Flag any items blocked >5 days for escalation.
```

### 2. Week Ahead Scan

**Prompt:**
```
Given this week's calendar and commitments, identify:

Calendar:
{{PASTE_CALENDAR_SUMMARY}}

Key Deliverables Due:
{{LIST_DELIVERABLES}}

1. Conflicts or overloads that need rescheduling
2. Meetings missing agendas that I should prepare
3. Dependencies coming due this week
4. Decisions needed before Friday
5. Time blocks I should protect for deep work
```

### 3. Risk Pulse Check

**Prompt:**
```
Based on current project status, score these risk categories 1-5 (5 = high risk):

Project: {{PROJECT_NAME}}

- Timeline risk: [score] because [reason]
- Scope risk: [score] because [reason]
- Resource risk: [score] because [reason]
- Technical risk: [score] because [reason]
- External dependency risk: [score] because [reason]

For any score 4+, suggest one action I can take this week.
```

---

## Tuesday-Wednesday: Execute & Unblock

### 4. Standup Synthesis

**Prompt (run daily):**
```
Here are today's standup updates from the team:

{{PASTE_STANDUP_NOTES}}

Create a summary with:
- Top 3 things moving forward
- Any new blockers (with suggested owner)
- Items at risk of slipping
- Questions that need my follow-up
```

### 5. Blocker Triage

**Prompt:**
```
These blockers were raised this week:

{{LIST_BLOCKERS}}

For each blocker:
1. Classify: External dependency / Resource / Decision needed / Technical
2. Rate urgency: Block-shipping / Delays-work / Nice-to-fix
3. Suggest owner and first action
4. Draft escalation message if >2 days old
```

### 6. Dependency Check-in Prep

**Prompt:**
```
I'm meeting with {{TEAM_NAME}} to check on our dependencies.

Our dependencies on them:
{{LIST_DEPENDENCIES}}

Their dependencies on us:
{{LIST_OUR_DELIVERABLES_TO_THEM}}

Draft:
1. Status questions for each dependency
2. Flags I should raise proactively
3. Asks I need to make explicit
```

---

## Thursday: Stakeholder Communications

### 7. Weekly Status Draft

**Prompt:**
```
Generate my weekly stakeholder update.

Project: {{PROJECT_NAME}}
Week of: {{DATE}}

Accomplishments:
{{LIST_ACCOMPLISHMENTS}}

Blockers:
{{LIST_BLOCKERS}}

Next week focus:
{{LIST_NEXT_WEEK}}

Risks:
{{LIST_RISKS}}

Metrics:
{{METRICS_IF_ANY}}

Format as a concise email with status (Green/Yellow/Red) justified, TL;DR section, and clear asks if any.
```

### 8. Exec Prep (if applicable)

**Prompt:**
```
I'm presenting to {{EXECUTIVE}} on {{TOPIC}}.

Key points to cover:
{{LIST_POINTS}}

Likely questions:
{{ANTICIPATED_QUESTIONS}}

Draft:
1. 3-slide structure (BLUF, detail, ask)
2. Answers to likely questions
3. Data I should have ready
4. Red flags to address proactively
```

---

## Friday: Close the Week

### 9. Week Retrospective

**Prompt:**
```
Review my week:

Planned to do:
{{MONDAY_PLAN}}

Actually did:
{{WHAT_GOT_DONE}}

Surprises/interrupts:
{{UNPLANNED_WORK}}

Reflect:
1. What worked well this week?
2. What should I do differently next week?
3. What should I delegate or drop?
4. What's my single most important thing for next week?
```

### 10. Action Item Rollup

**Prompt:**
```
Compile all action items from this week's meetings and communications:

Meeting notes:
{{PASTE_ALL_MEETING_NOTES}}

Email threads:
{{PASTE_KEY_EMAIL_THREADS}}

Create a single action item list with:
- Item
- Owner
- Due date
- Source (which meeting/thread)
- Status (Not started / In progress)

Flag any items without clear owners.
```

### 11. Next Week Prep

**Prompt:**
```
Based on this week's outcomes and open items:

Open work:
{{OPEN_ITEMS}}

Upcoming milestones:
{{NEXT_2_WEEKS_MILESTONES}}

Draft my top 5 priorities for next week with:
- Why it matters
- Definition of done
- Dependencies
- Time estimate
```

---

## Tips for Sustainable Rhythm

1. **Block time** — Schedule these activities; don't do them in gaps
2. **Template once** — Save these prompts with your standard variables
3. **Batch similar work** — All status updates in one session
4. **Protect Friday PM** — Week close is important; don't let it slip
5. **Review monthly** — Is this rhythm working? Adjust as needed

---

## Quick Reference: Daily Minimums

| Day | Must Do | Takes |
|-----|---------|-------|
| Monday | Week plan, risk pulse | 30 min |
| Tuesday | Standup synthesis | 15 min |
| Wednesday | Blocker triage | 20 min |
| Thursday | Status update | 30 min |
| Friday | Week close, next week prep | 45 min |

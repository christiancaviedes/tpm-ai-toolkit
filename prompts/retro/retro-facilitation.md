# Retro Facilitation Prompt

## Context

Generate retrospective discussion questions and structure tailored to your team's current situation. This prompt creates a facilitation guide, not just generic questions.

## Variables

- `{{TEAM_NAME}}`: Team name
- `{{SPRINT_NUMBER}}`: Sprint being retro'd
- `{{SPRINT_HIGHLIGHTS}}`: Key things that happened this sprint
- `{{SPRINT_CHALLENGES}}`: Known challenges or issues
- `{{TEAM_SIZE}}`: Number of participants
- `{{RETRO_DURATION}}`: Available time for retro
- `{{RETRO_FORMAT}}`: Preferred format (Start/Stop/Continue, 4Ls, Mad/Sad/Glad, etc.)
- `{{PREVIOUS_ACTION_ITEMS}}`: Action items from last retro
- `{{TEAM_DYNAMICS}}`: Any known dynamics to consider (new members, conflict, etc.)

## Prompt

```
You are a Technical Program Manager facilitating a sprint retrospective.

**Team:** {{TEAM_NAME}}
**Sprint:** {{SPRINT_NUMBER}}
**Team Size:** {{TEAM_SIZE}} participants
**Duration:** {{RETRO_DURATION}}

**Sprint Context:**
- Highlights: {{SPRINT_HIGHLIGHTS}}
- Challenges: {{SPRINT_CHALLENGES}}

**Previous Action Items:**
{{PREVIOUS_ACTION_ITEMS}}

**Format:** {{RETRO_FORMAT}}
**Team Dynamics:** {{TEAM_DYNAMICS}}

Create a complete retro facilitation guide:

## Retro Facilitation Guide — Sprint {{SPRINT_NUMBER}}

### Pre-Retro Setup (5 min before)
- [ ] Board/doc ready with sections
- [ ] Timer ready
- [ ] Previous action items visible
- [ ] Voting mechanism ready (dots, emoji, etc.)

### Opening (5 min)
**Set the stage:**
"[Opening statement that acknowledges the sprint context and sets psychological safety]"

**Ground rules reminder:**
- Vegas rule — what happens in retro stays in retro
- No blame — focus on systems, not individuals
- Equal voice — everyone participates

### Previous Action Items Review (5 min)
For each previous action item:
| Action | Owner | Status | Outcome |
|--------|-------|--------|---------|

**Discussion questions:**
- What helped us complete the items we finished?
- What got in the way of items we didn't complete?

### Gather Data (15-20 min)

**[Based on chosen format, provide specific questions]**

**Warm-up question:**
[A context-specific icebreaker based on the sprint]

**Category 1: [Format-specific]**
- [Question tailored to sprint highlights]
- [Question tailored to sprint challenges]

**Category 2: [Format-specific]**
- [Question about team dynamics]
- [Question about process]

**Category 3: [Format-specific]**
- [Forward-looking question]
- [Improvement question]

### Generate Insights (10-15 min)
**Affinity grouping:**
1. Silent grouping of similar items (3 min)
2. Name the themes (2 min)
3. Dot voting — each person gets 3 votes (2 min)

**Discussion prompts for top themes:**
- "What's the root cause here?"
- "What would need to change for this to be different?"
- "Is this in our control to fix?"

### Decide Actions (10 min)
**For each top theme, create:**
| Theme | Action | Owner | Due | Success Metric |
|-------|--------|-------|-----|----------------|

**Rules for actions:**
- Maximum 3 action items
- Each must have a single owner
- Each must be completable by next retro
- Each must have a definition of done

### Closing (5 min)
**Appreciation round:**
[Quick wins or shoutouts]

**Retro on the retro:**
"Rate this retro 1-5 fingers — what would make it more valuable?"

**Next steps:**
- Action items will be posted to [channel]
- Owners to update status by [date]
- Next retro: [date]

---

### Facilitator Notes
- [Specific notes based on team dynamics]
- [Timing adjustments if needed]
- [Watch-out areas based on context]
```

## Tips

- **Vary the format** — Same format every time becomes stale
- **Time-box ruthlessly** — Retros that run long lose energy
- **Focus on actions** — Insights without actions are just venting
- **Follow up** — Track action items like any other work
- **Psychological safety first** — People won't share if they don't feel safe
- **Small groups for big teams** — 8+ people? Break into smaller discussions first

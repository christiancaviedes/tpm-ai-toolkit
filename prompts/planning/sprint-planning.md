# Sprint Planning Prompt

## Context

Generate a complete sprint plan from a prioritized backlog. This prompt produces capacity-aware sprint commitments with risk flags and dependency callouts.

## Variables

- `{{TEAM_SIZE}}`: Number of engineers on the team
- `{{SPRINT_LENGTH}}`: Sprint duration in weeks (typically 1 or 2)
- `{{VELOCITY}}`: Team's average velocity in story points
- `{{SPRINT_NUMBER}}`: The sprint number (e.g., Sprint 47)
- `{{START_DATE}}`: Sprint start date
- `{{END_DATE}}`: Sprint end date
- `{{PTO_DAYS}}`: Planned time off during sprint (e.g., "Alice: 2 days, Bob: 1 day")
- `{{CARRYOVER}}`: Work carrying over from last sprint
- `{{BACKLOG}}`: Prioritized backlog items with estimates

## Prompt

```
You are a Technical Program Manager creating a sprint plan.

**Team Context:**
- Team size: {{TEAM_SIZE}} engineers
- Sprint length: {{SPRINT_LENGTH}} weeks
- Historical velocity: {{VELOCITY}} points
- Sprint: {{SPRINT_NUMBER}} ({{START_DATE}} to {{END_DATE}})
- PTO this sprint: {{PTO_DAYS}}

**Carryover from last sprint:**
{{CARRYOVER}}

**Prioritized Backlog:**
{{BACKLOG}}

Create a sprint plan with:

1. **Capacity Calculation**
   - Adjust velocity for PTO
   - Account for carryover work
   - Leave 10-15% buffer for unplanned work

2. **Sprint Goals** (2-3 measurable goals)

3. **Committed Work Table**
   | Ticket | Title | Points | Owner | Dependencies | Risk |
   - Flag any items with external dependencies
   - Flag items with unclear requirements

4. **Stretch Goals** (if capacity allows)

5. **Risks & Mitigations**
   - Dependency risks
   - Capacity risks
   - Technical risks

6. **Recommendations**
   - Should any items be descoped or split?
   - Are there sequencing concerns?
   - What should be discussed in planning meeting?

Format the output as a sprint planning document ready to share with the team.
```

## Tips

- **Be honest about velocity** — Use trailing 3-sprint average, not best-case
- **Account for interrupt load** — Support, on-call, and meetings eat capacity
- **Flag unknowns early** — Items without estimates or unclear scope should be discussed
- **Split large items** — Nothing over 8 points should be committed without splitting
- **Balance the load** — Check that no single engineer is overloaded

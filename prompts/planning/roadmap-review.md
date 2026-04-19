# Roadmap Review Prompt

## Context

Review a product or engineering roadmap for risks, dependencies, sequencing issues, and feasibility. This prompt provides structured feedback a TPM would give in a roadmap review meeting.

## Variables

- `{{ROADMAP}}`: The roadmap to review (milestones, timelines, owners)
- `{{TEAM_CAPACITY}}`: Available team capacity by quarter
- `{{KNOWN_DEPENDENCIES}}`: Known external dependencies
- `{{COMPANY_MILESTONES}}`: Fixed company dates (launches, events, fiscal deadlines)
- `{{HISTORICAL_CONTEXT}}`: Past execution data (velocity, slip history)

## Prompt

```
You are a Technical Program Manager reviewing a roadmap for feasibility and risks.

**Roadmap Under Review:**
{{ROADMAP}}

**Team Capacity:**
{{TEAM_CAPACITY}}

**Known External Dependencies:**
{{KNOWN_DEPENDENCIES}}

**Fixed Company Milestones:**
{{COMPANY_MILESTONES}}

**Historical Context:**
{{HISTORICAL_CONTEXT}}

Conduct a thorough roadmap review covering:

## 1. Dependency Analysis
- Map all cross-team dependencies
- Identify critical path items
- Flag any dependency on teams not yet committed
- Highlight circular or unclear dependencies

## 2. Sequencing Review
- Are items in the right order?
- Are there parallelization opportunities?
- What's blocked on what?
- Are long-lead items started early enough?

## 3. Capacity Check
- Does committed work fit within capacity?
- Is there buffer for unplanned work?
- Are any quarters overloaded?
- Is work evenly distributed or front/back-loaded?

## 4. Risk Assessment
| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|

Categories to check:
- Technical risks (new tech, unknown complexity)
- People risks (key person dependencies, hiring)
- External risks (vendor, partner, regulatory)
- Timeline risks (aggressive dates, holiday periods)

## 5. Feasibility Gaps
- Items with no owner
- Items with no estimate
- Items with unclear scope
- Items dependent on decisions not yet made

## 6. Recommendations
- What should be re-sequenced?
- What needs descoping?
- What decisions are blocking the roadmap?
- What should be escalated?

## 7. Questions for Roadmap Owner
List 5-7 clarifying questions that would improve confidence in this roadmap.
```

## Tips

- **Check the critical path** — What's the longest chain of dependent items?
- **Look for hidden dependencies** — Design, legal, security, infra often get missed
- **Question "Q4 TBD"** — Vague back-half items suggest lack of planning
- **Compare to last year** — Did similar work take longer than expected?
- **Ask about cut line** — What gets dropped if something slips?

# Risk Register Prompt

## Context

Generate a comprehensive risk register from a project description. This prompt produces a structured risk assessment with likelihood/impact matrix, mitigations, and owners.

## Variables

- `{{PROJECT_NAME}}`: Name of the project
- `{{PROJECT_DESCRIPTION}}`: What the project aims to deliver
- `{{TIMELINE}}`: Project timeline and key milestones
- `{{TEAM_COMPOSITION}}`: Team structure and dependencies
- `{{TECH_STACK}}`: Technologies being used, especially new ones
- `{{EXTERNAL_DEPENDENCIES}}`: External teams, vendors, or systems
- `{{CONSTRAINTS}}`: Budget, timeline, or resource constraints
- `{{HISTORICAL_CONTEXT}}`: Past issues with similar projects

## Prompt

```
You are a Technical Program Manager creating a risk register.

**Project:** {{PROJECT_NAME}}
**Description:** {{PROJECT_DESCRIPTION}}

**Timeline:**
{{TIMELINE}}

**Team:**
{{TEAM_COMPOSITION}}

**Tech Stack:**
{{TECH_STACK}}

**External Dependencies:**
{{EXTERNAL_DEPENDENCIES}}

**Constraints:**
{{CONSTRAINTS}}

**Historical Context:**
{{HISTORICAL_CONTEXT}}

Create a comprehensive risk register:

## Risk Register — {{PROJECT_NAME}}

### Risk Matrix

|              | Low Impact | Medium Impact | High Impact |
|--------------|------------|---------------|-------------|
| **High Likelihood**   | [risks] | [risks] | [risks] |
| **Medium Likelihood** | [risks] | [risks] | [risks] |
| **Low Likelihood**    | [risks] | [risks] | [risks] |

### Risk Categories to Assess

1. **Technical Risks**
   - New or unfamiliar technology
   - Integration complexity
   - Performance requirements
   - Security considerations

2. **People Risks**
   - Key person dependencies
   - Skill gaps
   - Availability/PTO
   - Team changes

3. **External Risks**
   - Vendor dependencies
   - Third-party APIs
   - Regulatory requirements
   - Partner timelines

4. **Timeline Risks**
   - Aggressive deadlines
   - Parallel dependencies
   - Holiday/vacation periods
   - Decision bottlenecks

5. **Scope Risks**
   - Unclear requirements
   - Stakeholder alignment
   - Scope creep pressure
   - Competing priorities

### Detailed Risk Register

| ID | Risk | Category | Likelihood | Impact | Score | Mitigation | Owner | Status |
|----|------|----------|------------|--------|-------|------------|-------|--------|

**Scoring:**
- Likelihood: High (3), Medium (2), Low (1)
- Impact: High (3), Medium (2), Low (1)
- Score: Likelihood × Impact

### Top Risks Summary

**🔴 Critical (Score 6-9):**
[Risks requiring immediate attention and escalation]

**🟡 Moderate (Score 3-5):**
[Risks requiring active monitoring and mitigation]

**🟢 Low (Score 1-2):**
[Risks to track but not actively mitigate]

### Risk Review Cadence

- Critical risks: Reviewed daily
- Moderate risks: Reviewed weekly
- Low risks: Reviewed bi-weekly

### Escalation Criteria

When to escalate a risk:
- Likelihood increases to High
- Impact increases to High
- Mitigation isn't working
- New information changes assessment
```

## Tips

- **Identify risks early** — Risk registers are most useful at project start
- **Be specific** — "Technical issues" isn't a risk; "Redis cluster scaling under load" is
- **Every risk needs an owner** — Unowned risks don't get mitigated
- **Review regularly** — Risks change; static registers become useless
- **Don't confuse risks and issues** — Risks might happen; issues are happening
- **Include positive risks** — Opportunities can be captured too

# OKR Drafting Prompt

## Context

Draft quarterly Objectives and Key Results from strategic themes or high-level goals. This prompt produces measurable OKRs aligned with company strategy.

## Variables

- `{{QUARTER}}`: The quarter (e.g., Q2 2026)
- `{{TEAM_NAME}}`: Team or group name
- `{{COMPANY_PRIORITIES}}`: Top-level company priorities this quarter
- `{{TEAM_SCOPE}}`: What the team owns and is responsible for
- `{{LAST_QUARTER_RESULTS}}`: Key wins and misses from last quarter
- `{{CONSTRAINTS}}`: Known constraints (headcount, budget, dependencies)
- `{{STRATEGIC_THEMES}}`: High-level themes to translate into OKRs

## Prompt

```
You are a Technical Program Manager drafting quarterly OKRs.

**Context:**
- Quarter: {{QUARTER}}
- Team: {{TEAM_NAME}}
- Team Scope: {{TEAM_SCOPE}}

**Company Priorities This Quarter:**
{{COMPANY_PRIORITIES}}

**Last Quarter Results:**
{{LAST_QUARTER_RESULTS}}

**Known Constraints:**
{{CONSTRAINTS}}

**Strategic Themes to Address:**
{{STRATEGIC_THEMES}}

Draft OKRs following these guidelines:

1. **Objectives** (3-5 per quarter)
   - Qualitative, inspirational, and ambitious
   - Start with a verb (Improve, Launch, Establish, Accelerate)
   - Achievable within the quarter
   - Clearly tied to company priorities

2. **Key Results** (3-4 per objective)
   - Quantitative and measurable
   - Include baseline → target where possible
   - Stretch but achievable (70% confidence)
   - No activities — outcomes only

3. **For each OKR, include:**
   - Alignment: Which company priority it supports
   - Owner: Who is accountable
   - Confidence: Current confidence level (1-10)
   - Dependencies: External teams or systems needed

Output Format:

## Objective 1: [Objective Statement]
**Alignment:** [Company priority]
**Owner:** [Name/Role]

| Key Result | Baseline | Target | Confidence |
|------------|----------|--------|------------|

**Dependencies:**
- [Dependency + team]

**Risks:**
- [Risk to achieving this objective]

---

Repeat for each objective.

End with:
- **OKR Health Check:** Are these balanced across company priorities?
- **Red Flags:** Any objectives without clear measurement?
- **Discussion Points:** What needs alignment with leadership?
```

## Tips

- **Limit to 3-5 objectives** — More than 5 means nothing is a priority
- **Key Results are outcomes, not activities** — "Ship feature X" is an activity; "Increase conversion by 15%" is an outcome
- **Include leading indicators** — Don't wait until quarter-end to know if you're on track
- **Score honestly** — 70% achievement is success for stretch OKRs
- **Cascade, don't copy** — Team OKRs should support company OKRs, not duplicate them

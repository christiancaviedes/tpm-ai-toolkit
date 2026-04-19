# Decision Document Prompt

## Context

Generate a structured decision document that presents options, analysis, and recommendation. This prompt creates documents that help teams make and record decisions.

## Variables

- `{{DECISION_TITLE}}`: What decision needs to be made
- `{{CONTEXT}}`: Background and why this decision is needed now
- `{{CONSTRAINTS}}`: Non-negotiable constraints
- `{{SUCCESS_CRITERIA}}`: How we'll know we made the right choice
- `{{OPTIONS}}`: Available options to consider
- `{{ANALYSIS}}`: Data, research, or analysis performed
- `{{STAKEHOLDERS}}`: Who needs to be involved in the decision
- `{{DEADLINE}}`: When the decision needs to be made

## Prompt

```
You are a Technical Program Manager creating a decision document.

**Decision:** {{DECISION_TITLE}}

**Context:**
{{CONTEXT}}

**Constraints:**
{{CONSTRAINTS}}

**Success Criteria:**
{{SUCCESS_CRITERIA}}

**Options:**
{{OPTIONS}}

**Analysis:**
{{ANALYSIS}}

**Stakeholders:**
{{STAKEHOLDERS}}

**Decision Deadline:** {{DEADLINE}}

Create a structured decision document:

# Decision: {{DECISION_TITLE}}

**Status:** Draft / Under Review / Decided / Superseded
**Author:** [Name]
**Created:** [Date]
**Decision Due:** {{DEADLINE}}
**Decider:** [Name/Role]

---

## Summary

[2-3 sentences: what decision we're making, why it matters, and the recommended option]

---

## Context

### Background
[Why this decision is needed now]

### Constraints
[Non-negotiable requirements that bound the decision space]
- [Constraint 1]
- [Constraint 2]
- [Constraint 3]

### Success Criteria
[How we'll evaluate if we made the right choice]
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

---

## Options Considered

### Option A: [Name]

**Description:** [What this option entails]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Estimated Effort:** [Low/Medium/High or specific estimate]
**Risk Level:** [Low/Medium/High]

---

### Option B: [Name]

**Description:** [What this option entails]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Estimated Effort:** [Low/Medium/High]
**Risk Level:** [Low/Medium/High]

---

### Option C: [Name]

**Description:** [What this option entails]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]

**Estimated Effort:** [Low/Medium/High]
**Risk Level:** [Low/Medium/High]

---

## Analysis

### Comparison Matrix

| Criteria | Weight | Option A | Option B | Option C |
|----------|--------|----------|----------|----------|
| [Criterion 1] | [1-5] | [1-5] | [1-5] | [1-5] |
| [Criterion 2] | [1-5] | [1-5] | [1-5] | [1-5] |
| [Criterion 3] | [1-5] | [1-5] | [1-5] | [1-5] |
| **Weighted Total** | — | [Score] | [Score] | [Score] |

### Key Tradeoffs

[What we're trading off between the top options]

---

## Recommendation

**Recommended Option: [Option X]**

**Rationale:**
[Why this option best meets our criteria and constraints]

**Risks & Mitigations:**
| Risk | Mitigation |
|------|------------|
| [Risk 1] | [How we'll handle it] |
| [Risk 2] | [How we'll handle it] |

---

## Implementation Impact

If we choose the recommended option:
- **Timeline:** [Impact on schedule]
- **Resources:** [Team, budget impact]
- **Dependencies:** [What else changes]
- **Rollback:** [Can we reverse this decision? How?]

---

## Open Questions

[Questions that need to be answered before or after deciding]
- [ ] [Question 1]
- [ ] [Question 2]

---

## Stakeholder Input

| Stakeholder | Role | Input | Concerns |
|-------------|------|-------|----------|
| [Name] | [Role] | [Their view] | [Key concern] |

---

## Decision

**Status:** ☐ Pending / ☐ Approved / ☐ Rejected

**Decision:** [Option chosen]
**Decided by:** [Name]
**Date:** [Date]
**Rationale:** [Brief note on why, especially if different from recommendation]

---

## Next Steps

| Action | Owner | Due |
|--------|-------|-----|
| [Immediate action] | [Name] | [Date] |
| [Follow-up action] | [Name] | [Date] |
```

## Tips

- **One decision per doc** — Don't bundle unrelated decisions
- **Name the decider** — Every decision needs a single accountable person
- **Include "do nothing"** — It's always an option and has tradeoffs
- **Quantify where possible** — Avoid "faster" vs "slower"; say "2 weeks vs 6 weeks"
- **Record the actual decision** — Update the doc when decided, not just when written
- **Time-box decisions** — Open-ended decisions rarely get made

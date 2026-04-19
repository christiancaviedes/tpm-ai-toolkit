# Executive Brief Prompt

## Context

Generate a 1-page executive brief from detailed project information. This prompt distills complex situations into what executives need to know to make decisions.

## Variables

- `{{TOPIC}}`: What this brief is about
- `{{CONTEXT}}`: Background an executive needs
- `{{CURRENT_STATE}}`: Where things stand now
- `{{PROBLEM_OR_OPPORTUNITY}}`: The issue or opportunity being presented
- `{{OPTIONS}}`: Available options with tradeoffs
- `{{RECOMMENDATION}}`: Your recommended path
- `{{ASK}}`: What you need from the executive
- `{{TIMELINE}}`: Key dates and deadlines
- `{{RISKS}}`: Top risks to flag

## Prompt

```
You are a Technical Program Manager writing an executive brief.

**Topic:** {{TOPIC}}

**Context:**
{{CONTEXT}}

**Current State:**
{{CURRENT_STATE}}

**Problem/Opportunity:**
{{PROBLEM_OR_OPPORTUNITY}}

**Options:**
{{OPTIONS}}

**Recommendation:**
{{RECOMMENDATION}}

**Ask:**
{{ASK}}

**Timeline:**
{{TIMELINE}}

**Risks:**
{{RISKS}}

Create a 1-page executive brief:

# Executive Brief: {{TOPIC}}

**Date:** [Date]
**Author:** [Name]
**For:** [Executive name/group]
**Decision Needed By:** [Date]

---

## Bottom Line

[2-3 sentences maximum. State the situation, recommendation, and ask. An exec should be able to read only this section and understand what you need.]

---

## Situation

[3-4 sentences maximum. Only the context necessary to understand the decision. Assume the reader is smart but not close to the details.]

---

## Options

| Option | Pros | Cons | Cost/Effort | Risk |
|--------|------|------|-------------|------|
| **A. [Name]** | • [Pro] | • [Con] | [Estimate] | [Risk level] |
| **B. [Name]** | • [Pro] | • [Con] | [Estimate] | [Risk level] |
| **C. [Name]** | • [Pro] | • [Con] | [Estimate] | [Risk level] |

---

## Recommendation

**Option [X]: [Name]**

[2-3 sentences on why this is the right choice. Focus on strategic alignment and risk/reward tradeoff.]

---

## Key Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| [Top risk] | High/Med/Low | [How we'll manage it] |
| [Second risk] | High/Med/Low | [How we'll manage it] |

---

## Timeline

| Milestone | Date |
|-----------|------|
| Decision needed | [Date] |
| [Key milestone] | [Date] |
| [Key milestone] | [Date] |

---

## Ask

[Exactly what you need from the executive. Be specific.]

☐ [Specific ask 1]
☐ [Specific ask 2]

---

## Appendix (if needed)

[Link to detailed docs, data, or analysis for those who want to dig deeper]

---

*Questions? Contact [Name] at [contact info]*
```

## Tips

- **One page maximum** — If you can't fit it on one page, you haven't distilled it enough
- **BLUF first** — Bottom Line Up Front; execs read the first paragraph
- **Quantify** — Numbers beat adjectives (say "$2M impact" not "significant impact")
- **Clear ask** — Don't make them guess what you need
- **Options with tradeoffs** — Don't bring problems without solutions
- **Know your audience** — Tailor language and focus to this specific executive

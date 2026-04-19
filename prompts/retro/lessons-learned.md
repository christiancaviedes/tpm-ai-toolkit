# Lessons Learned Prompt

## Context

Generate an end-of-project lessons learned document that captures what worked, what didn't, and recommendations for future projects. This prompt creates institutional knowledge.

## Variables

- `{{PROJECT_NAME}}`: Name of the project
- `{{PROJECT_DURATION}}`: How long the project took
- `{{ORIGINAL_SCOPE}}`: What was originally planned
- `{{FINAL_DELIVERABLES}}`: What was actually delivered
- `{{TEAM_MEMBERS}}`: Who worked on the project and their roles
- `{{KEY_MILESTONES}}`: Major milestones and whether they were hit
- `{{CHALLENGES_FACED}}`: Problems encountered during the project
- `{{SUCCESSES}}`: What went well
- `{{METRICS}}`: Final metrics vs targets
- `{{STAKEHOLDER_FEEDBACK}}`: Feedback received from stakeholders

## Prompt

```
You are a Technical Program Manager documenting lessons learned at project close.

**Project:** {{PROJECT_NAME}}
**Duration:** {{PROJECT_DURATION}}

**Original Scope:**
{{ORIGINAL_SCOPE}}

**Final Deliverables:**
{{FINAL_DELIVERABLES}}

**Team:**
{{TEAM_MEMBERS}}

**Key Milestones:**
{{KEY_MILESTONES}}

**Challenges Faced:**
{{CHALLENGES_FACED}}

**Successes:**
{{SUCCESSES}}

**Metrics:**
{{METRICS}}

**Stakeholder Feedback:**
{{STAKEHOLDER_FEEDBACK}}

Create a comprehensive lessons learned document:

# Lessons Learned: {{PROJECT_NAME}}

**Project Duration:** {{PROJECT_DURATION}}
**Document Date:** [Date]
**Author:** [TPM Name]

---

## Executive Summary

[3-4 sentences summarizing: what the project was, key outcome, biggest lesson, top recommendation]

---

## Project Outcomes

### Scope Comparison
| Planned | Delivered | Delta |
|---------|-----------|-------|

### Metrics
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|

### Timeline
| Milestone | Planned Date | Actual Date | Variance |
|-----------|--------------|-------------|----------|

---

## What Went Well ✅

### 1. [Category: e.g., Team Collaboration]
**What happened:** [Specific description]
**Why it worked:** [Root cause of success]
**Recommendation:** [How to replicate this]

### 2. [Category: e.g., Technical Approach]
**What happened:** [Specific description]
**Why it worked:** [Root cause of success]
**Recommendation:** [How to replicate this]

### 3. [Category: e.g., Stakeholder Management]
**What happened:** [Specific description]
**Why it worked:** [Root cause of success]
**Recommendation:** [How to replicate this]

---

## What Could Have Gone Better 🔧

### 1. [Category: e.g., Planning]
**What happened:** [Specific description]
**Root cause:** [Why this happened]
**Impact:** [What it cost in time/resources/quality]
**Recommendation:** [How to avoid next time]

### 2. [Category: e.g., Communication]
**What happened:** [Specific description]
**Root cause:** [Why this happened]
**Impact:** [What it cost]
**Recommendation:** [How to avoid next time]

### 3. [Category: e.g., Technical Debt]
**What happened:** [Specific description]
**Root cause:** [Why this happened]
**Impact:** [What it cost]
**Recommendation:** [How to avoid next time]

---

## Surprises 🎲

[Things that happened that weren't anticipated — good or bad]

- [Surprise 1 and what we learned]
- [Surprise 2 and what we learned]

---

## Top Recommendations

For future projects of this type:

1. **[Recommendation Title]**
   [Specific, actionable recommendation with context]

2. **[Recommendation Title]**
   [Specific, actionable recommendation with context]

3. **[Recommendation Title]**
   [Specific, actionable recommendation with context]

---

## Artifacts Worth Preserving

| Artifact | Location | Why It's Useful |
|----------|----------|-----------------|
[Templates, docs, scripts that should be reused]

---

## Acknowledgments

[Shoutouts to individuals or teams who went above and beyond]

---

## Appendix

### A. Key Decision Log
[Major decisions made during the project]

### B. Risk Register Final State
[How identified risks played out]

### C. Stakeholder Feedback Summary
[Consolidated feedback received]

---

*This document should be reviewed by the project team and stored in [location] for future reference.*
```

## Tips

- **Write it while memory is fresh** — Within 2 weeks of project close
- **Be honest, not blame-y** — "We underestimated X" not "Person Y failed"
- **Focus on actionable lessons** — "Plan better" isn't actionable
- **Include the positives** — What to repeat is as important as what to avoid
- **Make it findable** — Store where future project teams will look
- **Keep it concise** — Nobody reads 20-page lessons learned docs

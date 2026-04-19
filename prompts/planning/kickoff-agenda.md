# Project Kickoff Agenda Prompt

## Context

Generate a structured project kickoff meeting agenda from a brief project description. This prompt creates an agenda that aligns stakeholders, clarifies scope, and sets the project up for success.

## Variables

- `{{PROJECT_NAME}}`: Name of the project
- `{{PROJECT_DESCRIPTION}}`: Brief description of what the project will deliver
- `{{PROJECT_DURATION}}`: Expected duration (e.g., "6 weeks", "Q2")
- `{{TEAM_MEMBERS}}`: List of core team members and roles
- `{{STAKEHOLDERS}}`: Key stakeholders who need to be aligned
- `{{MEETING_DURATION}}`: Available meeting time (typically 60-90 min)
- `{{KNOWN_CONSTRAINTS}}`: Any known constraints or fixed dates

## Prompt

```
You are a Technical Program Manager preparing a project kickoff meeting.

**Project:**
- Name: {{PROJECT_NAME}}
- Description: {{PROJECT_DESCRIPTION}}
- Expected Duration: {{PROJECT_DURATION}}

**Team:**
{{TEAM_MEMBERS}}

**Key Stakeholders:**
{{STAKEHOLDERS}}

**Meeting Duration:** {{MEETING_DURATION}}

**Known Constraints:**
{{KNOWN_CONSTRAINTS}}

Create a kickoff agenda that accomplishes:

## Agenda Structure

### 1. Welcome & Context (5-10 min)
- Why this project, why now
- How it connects to company priorities
- What success looks like

### 2. Scope & Goals (15-20 min)
- What's in scope (be specific)
- What's explicitly out of scope
- Key deliverables with target dates
- Success metrics

### 3. Team & Roles (10 min)
- Core team introductions
- RACI overview (Responsible, Accountable, Consulted, Informed)
- Escalation path

### 4. Approach & Timeline (15-20 min)
- High-level phases or milestones
- Key dependencies
- Known risks and initial mitigations
- Decision points that need stakeholder input

### 5. Ways of Working (10 min)
- Meeting cadence (standups, syncs, reviews)
- Communication channels
- How decisions get made
- How status gets reported

### 6. Open Questions & Parking Lot (10 min)
- Pre-populated with questions that need answering
- Space for new questions
- Assign owners to unresolved items

### 7. Immediate Next Steps (5 min)
- What happens in the first week
- First milestone target
- Action items with owners

---

Also provide:

**Pre-Read Materials:** What should attendees review before the meeting?

**Facilitator Notes:** Tips for running this specific kickoff smoothly.

**Post-Kickoff Checklist:** What should be sent/done within 24 hours of kickoff?
```

## Tips

- **Send pre-reads 48 hours ahead** — Don't waste kickoff time on context that can be read
- **Start with the "why"** — Teams execute better when they understand the purpose
- **Be explicit about scope** — What's NOT included prevents scope creep
- **Name the risks** — Kickoff is the time to surface concerns, not hide them
- **End with momentum** — Clear next steps prevent post-kickoff drift
- **Time-box ruthlessly** — Kickoffs that run long lose energy and focus

# Launch Readiness Workflow

A Claude-assisted workflow for assessing and tracking launch readiness for product or feature launches.

## When to Use

- 2-4 weeks before any significant launch
- Major feature releases
- New product launches
- Migration go-lives
- Any "big bang" deployment

---

## Phase 1: Launch Scope Definition (4+ Weeks Out)

### Define Launch Criteria

**Prompt: Launch Definition**
```
Define launch criteria for this release:

Launch: {{LAUNCH_NAME}}
Target date: {{TARGET_DATE}}
Description: {{WHAT_IS_LAUNCHING}}

Create:

1. **Go Criteria** (must be true to launch)
   - Functional requirements completed
   - Quality gates passed
   - Dependencies satisfied
   - Approvals obtained

2. **No-Go Criteria** (any one blocks launch)
   - Critical bugs open
   - Security issues unresolved
   - Missing sign-offs

3. **Launch Success Metrics**
   - How we'll know launch succeeded
   - When we'll measure (T+1 day, T+1 week)
   - Rollback trigger thresholds
```

### Stakeholder Mapping

**Prompt: Launch RACI**
```
Create a RACI for this launch:

Launch: {{LAUNCH_NAME}}

Teams involved:
{{LIST_TEAMS}}

Key activities:
- Feature completion
- QA sign-off
- Security review
- Docs/training
- Customer communication
- Go-live execution
- Post-launch monitoring
- Rollback decision

For each activity, assign:
- R: Responsible (does the work)
- A: Accountable (one person, owns outcome)
- C: Consulted (input needed)
- I: Informed (needs to know)
```

---

## Phase 2: Readiness Tracking (2-4 Weeks Out)

### Launch Readiness Checklist Generator

**Prompt: Generate Checklist**
```
Generate a launch readiness checklist for:

Launch: {{LAUNCH_NAME}}
Type: {{FEATURE_LAUNCH/MIGRATION/NEW_PRODUCT}}
Scope: {{SCOPE_DESCRIPTION}}

Include sections for:

1. **Engineering Readiness**
   - Code complete
   - Code reviewed
   - Tests passing
   - Performance validated
   - Security reviewed

2. **Quality Readiness**
   - Test plan executed
   - Bug bar met
   - Edge cases covered
   - Regression testing done

3. **Operations Readiness**
   - Monitoring in place
   - Alerts configured
   - Runbooks updated
   - On-call briefed
   - Rollback tested

4. **Documentation Readiness**
   - User docs complete
   - Internal docs updated
   - Release notes drafted
   - Training materials ready

5. **Communication Readiness**
   - Customer notification planned
   - Support briefed
   - Marketing aligned
   - Internal announcement ready

6. **Business Readiness**
   - Legal/compliance approved
   - Pricing/billing ready
   - Sales enabled
   - Success metrics defined

For each item: checkbox, owner, due date, notes field.
```

### Weekly Readiness Review

**Prompt: Readiness Status**
```
Assess launch readiness for this week's review:

Launch: {{LAUNCH_NAME}}
Target date: {{DATE}}
Days until launch: {{DAYS}}

Checklist status:
{{PASTE_CURRENT_CHECKLIST_STATUS}}

Open issues:
{{LIST_OPEN_ISSUES}}

Provide:
1. Overall readiness score (Red/Yellow/Green)
2. Top 3 risks to hitting launch date
3. Items needing escalation
4. Recommendation: On track / At risk / Slip date
```

---

## Phase 3: Go/No-Go Decision (1 Week Out)

### Go/No-Go Assessment

**Prompt: Go/No-Go Brief**
```
Prepare go/no-go decision brief:

Launch: {{LAUNCH_NAME}}
Target date: {{DATE}}

Go criteria status:
{{LIST_GO_CRITERIA_WITH_STATUS}}

No-go criteria check:
{{LIST_NOGO_CRITERIA_WITH_STATUS}}

Open risks:
{{LIST_OPEN_RISKS}}

Outstanding items:
{{LIST_INCOMPLETE_ITEMS}}

Create:
1. Executive summary (3 sentences)
2. Go criteria table with status
3. Risk summary with mitigations
4. Recommendation: GO / NO-GO / CONDITIONAL GO
5. If conditional: what must be true by launch day
6. Rollback plan summary
```

### Rollback Plan

**Prompt: Rollback Plan**
```
Create a rollback plan for:

Launch: {{LAUNCH_NAME}}
What's changing: {{CHANGES}}

Define:

1. **Rollback Triggers**
   - Metrics that indicate rollback needed
   - Error rate thresholds
   - User-reported issue thresholds

2. **Rollback Decision**
   - Who can authorize rollback
   - Who must be notified before rollback

3. **Rollback Procedure**
   - Step-by-step technical steps
   - Estimated time to complete
   - Verification steps

4. **Rollback Communication**
   - Who to notify
   - Customer communication needed
   - Status page updates

5. **Post-Rollback**
   - Incident review required?
   - Re-launch criteria
```

---

## Phase 4: Launch Execution (Launch Day)

### Launch Day Runbook

**Prompt: Launch Runbook**
```
Create a launch day runbook:

Launch: {{LAUNCH_NAME}}
Date: {{DATE}}
Time: {{TIME_AND_TIMEZONE}}

Participants:
{{LIST_PARTICIPANTS_AND_ROLES}}

Create:

1. **Pre-Launch (T-2 hours)**
   - Final checks
   - Team assembled
   - Communication channels ready

2. **Launch Sequence (T-0)**
   - Step-by-step deployment
   - Verification at each step
   - Go/no-go checkpoints

3. **Monitoring (T+0 to T+2 hours)**
   - Dashboards to watch
   - Metrics to track
   - Escalation triggers

4. **Communication Cadence**
   - When to update stakeholders
   - Status page updates
   - Internal updates

5. **Success Criteria**
   - How we know launch is stable
   - When we can "all clear"
```

### Launch Status Updates

**Prompt: Launch Update**
```
Generate launch status update:

Launch: {{LAUNCH_NAME}}
Time since launch: {{DURATION}}
Current phase: {{DEPLOYING/MONITORING/STABLE}}

Current metrics:
{{KEY_METRICS}}

Issues observed:
{{ANY_ISSUES}}

Format:
- Current status (Green/Yellow/Red)
- Key metrics vs expected
- Any issues and status
- Next milestone
- ETA to "all clear" if applicable
```

---

## Phase 5: Post-Launch (24-72 Hours After)

### Launch Success Assessment

**Prompt: Launch Assessment**
```
Assess launch success:

Launch: {{LAUNCH_NAME}}
Launch date: {{DATE}}
Assessment date: {{TODAY}}

Metrics:
{{POST_LAUNCH_METRICS}}

Issues post-launch:
{{LIST_ISSUES}}

Provide:
1. Success score vs criteria defined pre-launch
2. Metric actuals vs targets
3. Issues encountered and resolution
4. Customer feedback summary
5. Recommendations for future launches
```

### Launch Retrospective

**Prompt: Launch Retro**
```
Generate launch retrospective discussion guide:

Launch: {{LAUNCH_NAME}}

What happened:
{{LAUNCH_SUMMARY}}

What went well:
{{GOOD_THINGS}}

What was challenging:
{{CHALLENGES}}

Create:
1. Retro agenda (60 min)
2. Discussion questions for each category
3. Template for capturing action items
4. Questions about process improvements
```

---

## Quick Reference: Launch Timeline

| Timing | Activity | Owner |
|--------|----------|-------|
| T-4 weeks | Define launch criteria | TPM |
| T-3 weeks | Generate readiness checklist | TPM |
| T-2 weeks | Weekly readiness reviews start | TPM |
| T-1 week | Go/no-go meeting | TPM + Leads |
| T-3 days | Rollback plan finalized | Eng Lead |
| T-1 day | Launch runbook walk-through | All |
| T-0 | Launch execution | Per runbook |
| T+1 day | Launch success assessment | TPM |
| T+1 week | Launch retrospective | Team |

# Incident Response Workflow

A Claude-assisted playbook for TPMs managing incidents from detection through postmortem.

## When to Use

- Production incidents affecting users
- Security events requiring response
- Major outages or degradations
- Any Sev1/Sev2 event

---

## Phase 1: Incident Declared (First 15 Minutes)

### Establish Command

**Prompt: Incident Brief**
```
Create an incident brief from this information:

What's happening: {{SYMPTOM_DESCRIPTION}}
When detected: {{TIME_DETECTED}}
How detected: {{ALERT_OR_REPORT}}
Initial scope: {{KNOWN_IMPACT}}

Format as:
1. One-line incident title
2. Current status (Investigating / Identified / Monitoring / Resolved)
3. Severity recommendation with justification
4. Initial user impact estimate
5. Teams to page
6. Stakeholders to notify (don't page, just inform)
```

### Set Up Coordination

**Prompt: Incident Channel Setup**
```
Draft the opening message for our incident Slack channel:

Incident: {{INCIDENT_TITLE}}
Severity: {{SEVERITY}}
Incident Commander: {{IC_NAME}}

Include:
- What we know so far
- Current impact
- Who's been paged
- Where to post updates
- Link to runbook if one exists
- Link to status page/dashboard
```

---

## Phase 2: Investigation (Active Incident)

### Running Timeline

**Prompt: Timeline Entry**
```
Add this event to the incident timeline:

Current timeline:
{{EXISTING_TIMELINE}}

New event:
- Time: {{TIME}}
- What happened: {{EVENT}}
- Who did it: {{PERSON_OR_SYSTEM}}

Format the entry with timestamp, clear description, and any relevant links.
```

### Hypothesis Tracking

**Prompt: Investigation Track**
```
We're investigating this incident:

Symptoms: {{OBSERVED_SYMPTOMS}}

Current hypotheses being investigated:
{{LIST_HYPOTHESES}}

For each hypothesis, create a tracking entry:
- Hypothesis
- How to validate (what we're checking)
- Status (Investigating / Ruled out / Confirmed)
- Owner
- Findings so far
```

### Customer Communication

**Prompt: Status Page Update**
```
Draft a customer-facing status update:

Incident: {{INCIDENT_TITLE}}
Duration: {{DURATION_SO_FAR}}
Current state: {{INVESTIGATING/IDENTIFIED/MONITORING}}

What we know:
{{CURRENT_UNDERSTANDING}}

Template:
- Keep technical jargon minimal
- Focus on user impact
- Don't promise specific resolution time unless certain
- Give next update time
```

---

## Phase 3: Mitigation

### Mitigation Options

**Prompt: Mitigation Analysis**
```
We've identified the root cause:

Root cause: {{ROOT_CAUSE}}

Possible mitigations:
{{LIST_OPTIONS}}

For each option, assess:
- Time to implement
- Risk of making things worse
- Reversibility
- Completeness (fixes root cause or just symptoms?)

Recommend the best option with justification.
```

### Rollback Decision

**Prompt: Rollback Assessment**
```
We're considering rolling back:

Current state: {{CURRENT_STATE}}
Rollback to: {{PREVIOUS_STATE}}
Rollback method: {{HOW_TO_ROLLBACK}}

Assess:
1. What does rollback fix?
2. What does rollback break? (new features, data)
3. What's the rollback risk?
4. Is there a point-forward fix that's faster?

Recommendation: Rollback / Don't rollback / Need more info
```

---

## Phase 4: Resolution

### Resolution Announcement

**Prompt: Internal Resolution Note**
```
Draft the internal resolution announcement:

Incident: {{INCIDENT_TITLE}}
Duration: {{TOTAL_DURATION}}
Resolution: {{WHAT_FIXED_IT}}
Customer impact: {{IMPACT_SUMMARY}}

Include:
- Thank yous to responders
- Current status (fully resolved / monitoring)
- When postmortem will happen
- Any immediate follow-ups needed
```

**Prompt: Customer Resolution Note**
```
Draft the customer-facing resolution update:

Incident: {{INCIDENT_TITLE}}
Duration: {{TOTAL_DURATION}}
Impact: {{USER_IMPACT}}

Keep it:
- Apologetic but not groveling
- Clear about what happened (high level)
- Clear about what we're doing to prevent recurrence
- No blame or technical finger-pointing
```

---

## Phase 5: Postmortem

### Timeline Assembly

**Prompt: Timeline Cleanup**
```
Clean up this raw incident timeline for postmortem:

Raw timeline:
{{PASTE_RAW_TIMELINE_FROM_CHANNEL}}

Format as:
| Time (UTC) | Event | Actor |
Include:
- Detection
- Declaration
- Key investigation milestones
- When root cause was found
- When mitigation was applied
- Resolution

Remove duplicate entries and chat noise.
```

### Postmortem Draft

**Prompt: Full Postmortem**
```
Generate a blameless postmortem:

Incident: {{INCIDENT_TITLE}}
Severity: {{SEVERITY}}
Duration: {{DURATION}}

Timeline:
{{CLEAN_TIMELINE}}

Root cause:
{{ROOT_CAUSE}}

Impact:
{{USER_AND_BUSINESS_IMPACT}}

What went well:
{{GOOD_THINGS}}

What went poorly:
{{BAD_THINGS}}

Use the standard postmortem template with:
- Summary
- Impact (quantified)
- Timeline
- Root cause analysis
- Contributing factors
- What went well
- What went poorly
- Where we got lucky
- Action items (with owners and tickets)
- Lessons learned
```

### Action Item Extraction

**Prompt: Postmortem Actions**
```
From this postmortem discussion, extract action items:

Discussion notes:
{{POSTMORTEM_DISCUSSION}}

For each action item:
- Specific action (not vague improvement)
- Priority (P0 = do immediately, P1 = this sprint, P2 = this quarter)
- Owner
- Success metric
- Suggested ticket title
```

---

## Quick Reference: Incident Checklist

### When Incident Starts
- [ ] Incident channel created
- [ ] IC assigned
- [ ] Initial severity set
- [ ] Teams paged
- [ ] Stakeholders notified
- [ ] Timeline started

### During Incident
- [ ] Timeline updated every 15 minutes
- [ ] Customer status page updated every 30 minutes
- [ ] Handoffs documented if IC changes
- [ ] Hypotheses tracked

### When Incident Ends
- [ ] Resolution announced internally
- [ ] Customer status updated
- [ ] Postmortem scheduled (within 5 days)
- [ ] On-call handoff if applicable

### After Postmortem
- [ ] Action items ticketed
- [ ] Postmortem published
- [ ] Lessons shared with relevant teams
- [ ] Process improvements implemented

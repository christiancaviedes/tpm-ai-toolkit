# Example: Stakeholder Update

This shows a real input and Claude output for weekly stakeholder updates.

---

## Input

```
Using the stakeholder update prompt with:

{{PROJECT_NAME}}: Checkout Redesign
{{WEEK_OF}}: January 13, 2026
{{STATUS}}: Yellow
{{STATUS_REASON}}: Payment provider integration delayed, but have mitigation path

{{ACCOMPLISHMENTS}}:
- Completed new checkout UI components (cart, shipping, review screens)
- User testing sessions finished - 4.2/5 satisfaction score
- Stripe integration code complete, pending their sandbox access
- Address autocomplete shipped to 10% of users
- Reduced checkout steps from 5 to 3

{{BLOCKERS}}:
- Stripe sandbox access request pending 5 days - they need security questionnaire
- Mobile QA understaffed - borrowed resource from Platform team

{{NEXT_WEEK}}:
- Complete Stripe sandbox integration once access granted
- Begin PayPal integration (parallel path)
- Mobile testing ramp to 25% of users
- Performance optimization pass
- Prepare for launch readiness review

{{RISKS}}:
- Stripe delay could push launch by 1 week if not resolved by Friday
- PayPal SDK has known iOS memory leak - need workaround
- Holiday code freeze starts Jan 31

{{METRICS}}:
- Checkout completion rate (test): 67% → 78%
- Average checkout time (test): 4.2min → 2.8min
- Mobile conversion (10% rollout): +3.2% vs control

{{ASKS}}:
- Need Finance to expedite Stripe security questionnaire
- Decision needed on PayPal iOS workaround vs wait for their fix
```

---

## Claude Output

**Subject:** [Checkout Redesign] Week of Jan 13 — 🟡 Yellow

---

## Checkout Redesign — Weekly Update

**Status:** 🟡 Yellow
*Stripe sandbox access delayed 5 days. Mitigation: parallel PayPal integration. On track if Stripe unblocks by Friday.*

### TL;DR

New checkout UI is complete and testing at 78% completion rate (+11 points). Stripe integration code is ready but blocked on their sandbox access — security questionnaire expedite needed from Finance. Starting PayPal as parallel path. Launch still possible for Jan 31 freeze if Stripe unblocks this week.

### Progress This Week

- ✅ All checkout UI components shipped (cart → shipping → review)
- ✅ User testing complete: 4.2/5 satisfaction, checkout steps reduced 5 → 3
- ✅ Address autocomplete live for 10% of users
- ✅ Stripe integration code complete, ready for sandbox testing
- 🔄 Mobile QA resourced via Platform team loan

### Blockers

| Blocker | Owner | Status | Ask |
|---------|-------|--------|-----|
| Stripe sandbox access | Stripe + Finance | Waiting 5 days | **Expedite security questionnaire** |

### Next Week

- Complete Stripe sandbox integration (dependent on access)
- Begin PayPal integration (parallel track, reduces Stripe dependency risk)
- Expand mobile rollout to 25%
- Performance optimization pass
- Launch readiness review prep

### Risks

| Risk | Status | Mitigation |
|------|--------|------------|
| Stripe delay → 1 week slip | 🟡 Active | PayPal parallel path; escalating |
| PayPal iOS memory leak | 🟡 Watching | Evaluating workaround vs waiting for their patch |
| Jan 31 code freeze | 🟢 Tracking | On track if Stripe resolves by Friday |

### Metrics

| Metric | Before | After (Test) | Change |
|--------|--------|--------------|--------|
| Checkout completion | 67% | 78% | **+11 pts** |
| Avg checkout time | 4.2 min | 2.8 min | **-33%** |
| Mobile conversion (10%) | baseline | +3.2% | Tracking |

### Asks

1. **Finance:** Please expedite Stripe security questionnaire — they're blocking sandbox access. Contact: stripe-partnerships@company.com
2. **Decision needed by Thursday:** PayPal iOS workaround (ship with 50MB memory cap) vs wait for their fix (unknown timeline). Recommend: workaround.

---

*Questions? Reach out on #checkout-redesign or reply to this email.*

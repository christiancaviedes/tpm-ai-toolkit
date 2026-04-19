# TPM AI Toolkit

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/christiancaviedes/tpm-ai-toolkit/pulls)
[![Claude AI](https://img.shields.io/badge/Powered%20by-Claude%20AI-orange)](https://www.anthropic.com)

## Stop rewriting the same PM artifacts every sprint.

A Technical Program Manager's week is 40% meetings and 40% writing the artifacts nobody else will write: retro summaries, risk registers, stakeholder briefs, sprint plans, OKRs, postmortems. This toolkit is a curated collection of battle-tested Claude prompts and multi-step workflows that cut that writing time to minutes.

These aren't generic templates. They've been refined through real TPM work — the kind where you need to explain a 3-week slip to a VP in 4 bullet points, or turn a chaotic retro into actionable engineering improvements.

---

## What's Inside

### Prompts

**Planning**
- Sprint planning with capacity allocation and risk flags
- OKR drafting from raw goals
- Roadmap review summaries
- Kickoff agenda generator

**Execution**
- Standup summaries from status updates
- Blocker escalation emails (with suggested resolution paths)
- Weekly stakeholder status updates
- Risk register entries from incident descriptions

**Retrospectives**
- Retro facilitation guide (by team size)
- Retro summary from raw notes
- Lessons learned synthesis

**Communication**
- Postmortem reports (timeline, root cause, action items)
- Executive briefing from technical incident
- Decision doc (problem, options, recommendation, rationale)
- Meeting notes → action items extractor

### Workflows

Complete multi-step sequences that chain prompts together:

- **Weekly TPM rhythm** — Monday kickoff → daily standups → Friday retro prep
- **Incident response playbook** — from alert to postmortem in 6 steps
- **Launch readiness checklist** — customizable for any project size

### Drop-in CLAUDE.md

Copy `CLAUDE.md` into any project root. It gives Claude full TPM context for that project — sprint structure, stakeholder map, communication norms, and current risks. Works in Claude Code and Claude.ai.

---

## Quick Start

### Option 1: Copy individual prompts

```bash
git clone https://github.com/christiancaviedes/tpm-ai-toolkit.git
```

Then browse `prompts/` and copy what you need.

### Option 2: Drop-in CLAUDE.md

```bash
curl -o CLAUDE.md \
  https://raw.githubusercontent.com/christiancaviedes/tpm-ai-toolkit/main/CLAUDE.md
```

Edit the placeholders, then use Claude Code or Claude.ai — it will understand your project automatically.

---

## Demo

**Sprint Planning Prompt — Input:**

```
Team: 6 engineers
Sprint length: 2 weeks
Velocity: 34 points
Backlog (prioritized):
  - AUTH-234: JWT refresh rotation (8pts, P0)
  - BUG-891: Dashboard pagination bug (3pts, P0)
  - FEAT-102: Export to CSV (5pts, P1)
  - PERF-45: Query optimization pass (8pts, P1)
  - TECH-78: Redis upgrade (13pts, P2)
  - FEAT-98: Dark mode (5pts, P2)
```

**Output:**

```markdown
## Sprint 24 Plan — April 21–May 2, 2026

### Committed (34 pts)
| Ticket | Title | Points | Owner |
|--------|-------|--------|-------|
| AUTH-234 | JWT refresh rotation | 8 | TBD |
| BUG-891 | Dashboard pagination | 3 | TBD |
| FEAT-102 | Export to CSV | 5 | TBD |
| PERF-45 | Query optimization | 8 | TBD |
| FEAT-98 | Dark mode | 5 | TBD |
| TECH-78 | Redis upgrade | 13 | TBD — see Risk |

**Capacity note:** TECH-78 is 38% of velocity alone. Recommend splitting into
two sub-tickets or deferring to Sprint 25.

### Risks
- Redis upgrade (TECH-78): Large scope, infrastructure dependency. Confirm
  Platform team availability before committing.

### Rollover from Sprint 23
- None carried in.

### Definition of Done
[Standard definition — customize in CLAUDE.md]
```

---

## Prompt Structure

Every prompt follows the same format so you always know where to look:

```markdown
# [Prompt Name]

## Context
What this prompt does and when to use it.

## Variables
- {{VARIABLE}}: Description and example

## Prompt
[The actual Claude prompt — ready to copy]

## Tips
- Edge cases and advice for better results
```

---

## Directory Structure

```
tpm-ai-toolkit/
├── CLAUDE.md                  # Drop-in project context
├── prompts/
│   ├── planning/              # Sprint, OKR, roadmap, kickoff
│   ├── execution/             # Standups, blockers, updates, risk
│   ├── retro/                 # Facilitation, summaries, lessons
│   └── communication/        # Postmortems, briefs, decisions
├── workflows/                 # Multi-step TPM workflow guides
└── examples/                  # Real input/output pairs
```

---

## How to Use These Prompts

1. **Find the prompt** — browse by category in `prompts/`
2. **Fill in the variables** — replace `{{TEAM_SIZE}}`, `{{SPRINT_LENGTH}}`, etc.
3. **Paste into Claude** — Claude.ai, Claude Code, or any Anthropic API call
4. **Review and edit** — the output is a solid first draft, not final copy

For workflows, follow the numbered steps in `workflows/` — each step feeds into the next.

---

## Contributing

The best contributions are prompts you've actually used. If you have a TPM prompt that works reliably, please PR it.

1. Fork the repo
2. Add your prompt under `prompts/[category]/your-prompt.md` using the standard structure
3. Include a real example in `examples/` if you have one
4. Submit a PR with a one-line description of what problem it solves

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for full guidelines.

---

## License

MIT © 2026 [Christian Caviedes](https://github.com/christiancaviedes)

Built for TPMs who'd rather ship features than rewrite status updates.

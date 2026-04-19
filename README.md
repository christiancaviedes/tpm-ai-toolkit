# TPM AI Toolkit

> Stop rewriting the same PM artifacts. Let Claude do it.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/christiancaviedes/tpm-ai-toolkit/pulls)

A curated collection of **battle-tested Claude AI prompts and workflows** for Technical Program Managers. These aren't generic templates — they're prompts that actually work in real TPM workflows, refined through daily use.

## What's Inside

### 📋 Prompts

**Planning** — Sprint planning, OKR drafting, roadmap reviews, kickoff agendas

**Execution** — Standup summaries, blocker escalations, stakeholder updates, risk registers

**Retrospectives** — Retro facilitation, retro summaries, lessons learned

**Communication** — Postmortems, exec briefs, decision docs, meeting notes

### 🔄 Workflows

Complete multi-step workflows that chain prompts together:
- Weekly TPM rhythm
- Incident response playbook
- Launch readiness checklist

### 📝 Examples

Real input/output examples showing exactly what you get.

## Quick Start

### Option 1: Copy individual prompts

1. Browse the `prompts/` directory
2. Copy the prompt you need
3. Replace `{{VARIABLES}}` with your context
4. Paste into Claude

### Option 2: Use the drop-in CLAUDE.md

Copy `CLAUDE.md` into your project root. It gives Claude full TPM context for any project — understands sprint structures, stakeholder communication norms, and TPM artifacts.

```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/christiancaviedes/tpm-ai-toolkit/main/CLAUDE.md
```

## Example: Sprint Planning in 30 Seconds

**Input:**
```
Using the sprint planning prompt with:
- {{TEAM_SIZE}}: 6 engineers
- {{SPRINT_LENGTH}}: 2 weeks
- {{VELOCITY}}: 34 points
- {{BACKLOG}}: [paste your prioritized backlog]
```

**Output:** A complete sprint plan with capacity allocation, risk flags, and rollover recommendations.

## Prompt Structure

Every prompt follows this structure:

```markdown
# [Prompt Name]

## Context
What this prompt does and when to use it.

## Variables
- {{VARIABLE_1}}: Description
- {{VARIABLE_2}}: Description

## Prompt
[The actual prompt text]

## Tips
- Pro tips for better results
```

## Directory Structure

```
tpm-ai-toolkit/
├── CLAUDE.md              # Drop-in TPM context for any project
├── prompts/
│   ├── planning/          # Sprint, OKR, roadmap, kickoff
│   ├── execution/         # Standups, blockers, updates, risks
│   ├── retro/             # Facilitation, summaries, lessons
│   └── communication/     # Postmortems, briefs, decisions
├── workflows/             # Multi-step workflow guides
└── examples/              # Real input/output examples
```

## Contributing

Found a prompt that works great for your TPM workflow? PRs welcome.

1. Fork the repo
2. Add your prompt following the standard structure
3. Include a real example if possible
4. Submit a PR

## Author

**Christian Caviedes** — Technical Program Manager

## License

MIT License — see [LICENSE](LICENSE) for details.

---

*Built for TPMs who'd rather ship features than rewrite status updates.*

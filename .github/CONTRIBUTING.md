# Contributing to TPM AI Toolkit

The best contributions to this repo are prompts that actually work in real TPM workflows. If you've found a prompt that consistently produces useful output, please share it.

## What We'd Love

- **New prompts** — anything a TPM writes repeatedly that Claude can draft well
- **Better examples** — real input/output pairs (anonymized) showing what good output looks like
- **New workflows** — multi-step sequences for common TPM scenarios
- **Prompt refinements** — improvements to existing prompts that produce better output
- **New CLAUDE.md variants** — for different project types (infra, product, platform, etc.)

## How to Add a Prompt

1. **Fork** the repo and create a branch: `git checkout -b prompt/your-prompt-name`
2. **Add your file** to the right `prompts/` subdirectory
3. **Use the standard format**:
   ```markdown
   # [Prompt Name]
   ## Context
   ## Variables
   ## Prompt
   ## Tips
   ```
4. **Add an example** in `examples/` if you have one — even a short one helps enormously
5. **Open a PR** with one sentence on what problem this prompt solves

## Quality Bar

A good prompt:
- Solves a specific, recurring TPM task
- Has clear variable placeholders (`{{TEAM_SIZE}}`, not vague blanks)
- Produces output that's useful with minimal editing
- Includes at least a brief tip about when it works best (and when it doesn't)

## Improving Existing Prompts

If a prompt produces inconsistent output, open an issue or PR with the edge case and a proposed fix.

## Questions

Open an issue with the `question` label. Happy to help with prompt engineering questions.

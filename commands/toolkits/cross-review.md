---
description: "Run a cross-model code review using an external AI via codex-mcp. Accepts --model and --effort options."
---

# Cross Review

Run a second-opinion code review by sending current changes to an external AI model via codex-mcp.

## Step 1: Parse Arguments

From `$ARGUMENTS`, extract:
- `--model [model]` → default `gpt-5.4`
- `--effort [effort]` → default `high`
- Any remaining text is treated as an optional scope override (specific files or branch range to diff)

## Step 2: Pre-flight Check

Before dispatching, detect whether you are already running inside a Codex session:
- If Claude Code tools (`Glob`, `Grep`, `Read`, `Agent`) are NOT available → you are in Codex, skip codex-mcp dispatch
- If `CODEX_SESSION=1` is set → you are in Codex, skip codex-mcp dispatch
- If `mcp__codex-mcp__codex` is your own runtime tool → you are in Codex, skip codex-mcp dispatch

## Step 3: Dispatch to cross-reviewer Agent

Spawn a haiku subagent using the `cross-reviewer` agent type with the following prompt:

```
You are running as the cross-reviewer agent. Follow the cross-reviewer agent process exactly.

Parameters:
- model: {model from Step 1}
- effort: {effort from Step 1}
- scope: {scope override from Step 1, if any — otherwise use git diff defaults}

When calling mcp__codex-mcp__codex:
- Use model: {model}
- Use effort: {effort}
- Use sandbox: "read-only"

Complete all steps: gather changes, send to codex-mcp, collect feedback, and return the formatted report.
```

## Step 4: Present Result

Display the cross-reviewer agent's formatted report to the user.

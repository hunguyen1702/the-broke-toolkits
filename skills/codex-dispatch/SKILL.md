---
name: codex-dispatch
description: "Delegate tasks to OpenAI Codex via codex-mcp. Use this skill whenever the user says 'delegate to codex', 'use codex', 'send to codex', 'codex task', or wants to leverage an external AI model for code generation, refactoring, or cross-model review. Also trigger when the user mentions codex-mcp or wants a second opinion from a different AI on code problems."
---

# Codex Dispatch

Delegate a task to OpenAI Codex through the `mcp__codex-mcp__codex` tool.

---

## Pre-flight: Detect if already in Codex

Before dispatching, check whether you're already running inside a Codex session to avoid recursive calls:

- `CODEX_SESSION=1` environment variable is set → already in Codex
- `mcp__codex-mcp__codex` is listed as your own runtime tool → already in Codex

**If already in Codex:** execute the task directly or spawn a Claude subagent. Do NOT call `mcp__codex-mcp__codex`.

---

## MCP Unavailability Fallback

Before attempting to call `mcp__codex-mcp__codex`, verify it is available in your tool list.

**If `mcp__codex-mcp__codex` is NOT available:** skip codex dispatch entirely and fall back to spawning a Claude subagent (general-purpose) to handle the task directly.

---

## Calling Codex

Call `mcp__codex-mcp__codex` directly (no subagent wrapper needed):

```
mcp__codex-mcp__codex(
  prompt: "<task description>",
  model: "<derived from effort>",   // assess task difficulty → pick effort level → consult references/codex-model-task-mapping.md
  effort: "<low|medium|high>",      // optional: reinforces model selection
  sandbox: "<chosen level>",        // choose based on task needs — see sandbox table below
  approval-policy: "on-failure",    // "untrusted" | "on-failure" | "on-request" | "never"
  cwd: "<working directory>",
  base-instructions: "<optional context>"
)
```

### Sandbox selection

Choose the minimum permission level needed for the task. Never use `danger-full-access`.

| Sandbox | When to use |
|---------|-------------|
| `read-only` | Exploration, analysis, code review, planning — no writes needed |
| `workspace-write` | Implementing features, editing files, running tests, any task that produces changes |

### Effort-based model selection

Assess the task difficulty, pick an effort level, then consult `references/codex-model-task-mapping.md` to resolve the actual model name. Do not hardcode a model name here.

| Effort | When to use |
|--------|-------------|
| **low** | Quick patches, boilerplate, small focused edits, simple test updates |
| **medium** | Typical feature work, routine debugging, writing tests, editing scripts |
| **high** | Multi-file refactors, architecture changes, hard bugs, end-to-end features |

### Subagent passthrough via base-instructions

When delegating a task that would normally go to a typed subagent (e.g., Explore, Plan, code-reviewer), include that subagent's role in `base-instructions` so Codex understands the intended persona and scope:

```
base-instructions: "You are acting as an Explore agent. Your job is to..."
```

Capture the `threadId` from the response — you'll need it to continue the conversation.

**Thread continuation:**

```
mcp__codex-mcp__codex-reply(
  threadId: "<threadId from previous response>",
  message: "<follow-up message>"
)
```

---

## Presenting Results

After codex responds, show the result to the user. If a `threadId` was returned, offer to continue the conversation with a follow-up.

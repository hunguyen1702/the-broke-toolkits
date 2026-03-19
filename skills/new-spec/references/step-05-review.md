# Step 5: Review

**Progress: Step 5 of 5** — Final Step

## Goal

Spawn a sub-agent to adversarially review the spec, apply critical fixes, and present a compact summary to the user.

## Rules

- This step **auto-triggers** — proceed without waiting for user input.
- Use the Agent tool to spawn a reviewer sub-agent.
- After review, write a compact summary and finish. Do NOT enter an approval loop.

## Sequence

### 1. Spawn Review Sub-Agent

Use the **Agent tool** to spawn a review sub-agent with this mission:

**Prompt:** You are an adversarial reviewer. Read the following spec and its supporting documents, then identify any issues:

Files to review:
- `docs/spec/{slug}/spec.md`
- `docs/spec/{slug}/discovery-report.md`
- `docs/spec/{slug}/analysis-report.md`

Review checklist:
1. **Tasks are discrete and actionable** — no vague descriptions, each task is a completable unit
2. **Dependencies are correct** — no circular dependencies, prerequisite tasks come first
3. **File paths are specific** — actual paths, not placeholders
4. **Acceptance criteria are testable** — Given/When/Then format, measurable outcomes
5. **Scope alignment** — tasks match the stated requirements, nothing out-of-scope crept in
6. **No missing tasks** — the task list fully covers the selected approach
7. **No redundant tasks** — no duplicate or unnecessary work

Return findings as:
- **Critical** (must fix): issues that would block implementation
- **Suggestions** (nice to have): improvements that aren't blocking

### 2. Apply Critical Fixes

If the reviewer found any **critical** issues:
1. Fix them in `docs/spec/{slug}/spec.md`
2. Note what was fixed

### 3. Present Summary

Write a compact completion message to the user:

```
## Spec Complete

**Feature:** {feature_name}
**Output:** `docs/spec/{slug}/`

**Files Created:**
- `discovery-report.md` — Codebase analysis findings
- `analysis-report.md` — Approach evaluation and recommendation
- `spec.md` — {task_count} implementation tasks

**Selected Approach:** {approach_name}
**Key Dependencies:** {highlight critical task dependencies}

**Review Results:**
- {count} critical issues found and fixed (if any)
- {count} suggestions noted (if any)
- {brief note on what was addressed}
```

### 4. Done

The workflow is complete. Do not proceed to any further steps.

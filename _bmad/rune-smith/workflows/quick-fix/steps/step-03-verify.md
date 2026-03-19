---
name: step-03-verify
description: User confirms fix
---

# Step 3: Verify

**Progress: Step 3 of 3** — Complete

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.

## GOAL

Confirm with the user that the fix is correct; optionally run lint/tests.

## SEQUENCE

### 1. Summarize What Was Done

Remind the user:

- The bug/task.
- The file(s) changed and the fix applied.

### 2. Ask for Confirmation

Ask:

- "Does this fix the issue? If yes, we're done. If not, describe what's still wrong and we can adjust."
- Optionally: "Should I run lint/tests on the changed files?" If yes, run and report.

### 3. Close

- If the user confirms the fix: "Quick fix complete."
- If they report an issue: offer to adjust (you can loop back to Step 2 or treat as a new quick-fix).

Workflow complete.

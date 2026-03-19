---
name: step-02-implement
description: Thor applies fix
nextStepFile: './step-03-verify.md'
---

# Step 2: Implement

**Progress: Step 2 of 3** — Next: Verify

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.

## GOAL

Apply the fix: edit the identified file(s) to resolve the bug or complete the task.

## SEQUENCE

### 1. Apply the Fix

- Read the file(s) from context (Step 1).
- Make the minimal change(s) needed to fix the bug or complete the task.
- Follow project style and conventions.

### 2. Summarize Changes

Briefly list what was changed (file(s) and main edits).

### 3. Continue

Present:

```
[Fix applied. Ready to verify.]

[C] Continue to Verify
```

**HALT** and wait for **[C]**.

### 4. Proceed

When user selects **[C]**, load and execute **`steps/step-03-verify.md`** in full.

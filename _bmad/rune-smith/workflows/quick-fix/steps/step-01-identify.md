---
name: step-01-identify
description: User describes bug/task, Thor finds file
nextStepFile: './step-02-implement.md'
---

# Step 1: Identify

**Progress: Step 1 of 3** — Next: Implement

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.

## GOAL

Understand the bug or task and locate the file(s) that need to be changed.

## SEQUENCE

### 1. Get Description

Ask `{user_name}`:

- What is the bug or task? (brief description)
- If they know the file path, ask for it; otherwise you will search.

### 2. Locate File(s)

- If the user provided a path, verify the file exists and read it.
- If not, search the codebase (grep, file list, or semantic search) for relevant files (e.g. error message, function name, feature area).

### 3. Confirm

Summarize:

- The bug/task in one sentence.
- The file(s) you will change.
- The intended fix (one sentence).

Ask: "Ready to apply the fix? [C] Continue to Implement."

**HALT** and wait for **[C]**.

### 4. Proceed

When user selects **[C]**, load and execute **`steps/step-02-implement.md`** in full. Pass the file path(s) and fix intent as context.

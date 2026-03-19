---
name: step-04-adversarial-review
description: Construct diff and invoke adversarial review task
nextStepFile: './step-05-resolve-findings.md'
quests_folder: '{project-root}/quests'
---

# Step 4: Adversarial Code Review

**Progress: Step 4 of 5** — Next: Resolve Findings

**Goal:** Construct diff of all changes, invoke adversarial review task, present findings.

---

## AVAILABLE STATE

From previous steps:

- Quest file path
- Files modified during execution
- `{baseline_commit}` - Git HEAD at workflow start (CRITICAL for diff)
- Execution summary

---

## SEQUENCE

### 1. Construct Diff

Build complete diff of all changes since workflow started.

### If `{baseline_commit}` is a Git commit hash:

**Tracked File Changes:**

```bash
git diff {baseline_commit}
```

**New Untracked Files:**

Only include untracked files that were created during this workflow (Steps 1-3).
Do not include pre-existing untracked files.
For each new file created, include its full content as a "new file" addition.

### If `{baseline_commit}` is "NO_GIT":

Use best-effort diff construction:

- List all files modified during Steps 1-3
- For each file, show the changes made (before/after if available, or just current state)
- Include any new files created with their full content
- Note: This is less precise than Git diff but still enables meaningful review

### Capture as {diff_output}

Merge all changes into `{diff_output}`.

**Note:** Do NOT `git add` anything - this is read-only inspection.

---

### 2. Invoke Adversarial Review

With `{diff_output}` constructed, invoke the review task. If possible, use information asymmetry: run this step, and only it, in a separate subagent or process with read access to the project, but no context except the `{diff_output}`.

```xml
<invoke-task>Review {diff_output} using {project-root}/_bmad/core/tasks/review-adversarial-general.xml</invoke-task>
```

**Platform fallback:** If task invocation not available, load the task file and follow its instructions inline, passing `{diff_output}` as the content.

The task should: review `{diff_output}` and return a list of findings.

---

### 3. Process Findings

Capture the findings from the task output.

**If zero findings:** HALT - this is suspicious. Re-analyze or request user guidance.

Evaluate severity (Critical, High, Medium, Low) and validity (real, noise, undecided).

DO NOT exclude findings based on severity or validity unless explicitly asked to do so.

Order findings by severity.

Number the ordered findings (F1, F2, F3, etc.).

If TodoWrite or similar tool is available, turn each finding into a TODO; include ID, severity, validity, and description in the TODO.

Otherwise present findings as a table:

```
| ID | Severity | Validity | Description |
|----|----------|----------|-------------|
| F1 | Critical | real     | {description} |
| F2 | High     | real     | {description} |
| F3 | Medium   | noise    | {description} |
| F4 | Low      | undecided| {description} |
```

---

### 4. Present Findings

Display to user:

```
Adversarial Review Complete

**Changes Reviewed:**
- Files modified: {count}
- Lines changed: +{additions} / -{deletions}

**Findings: {total_count}**

| ID | Severity | Validity | Description |
|----|----------|----------|-------------|
| F1 | Critical | real     | {description} |
| F2 | High     | real     | {description} |
...

Ready to resolve findings.

[C] Continue to Resolve Findings
```

**HALT** and wait for **[C]**.

---

### 5. Proceed

When user selects **[C]**, load and execute **`steps/step-05-resolve-findings.md`** in full.

Pass context:

- Quest file path
- `{baseline_commit}`
- Findings table
- `{diff_output}` (for reference during resolution)

---

## SUCCESS METRICS

- Diff constructed from baseline_commit
- New files included in diff
- Task invoked with diff as input
- Findings received
- Findings processed into TODOs or table and presented to user

## FAILURE MODES

- Missing baseline_commit (can't construct accurate diff)
- Not including new untracked files in diff
- Invoking task without providing diff input
- Accepting zero findings without questioning
- Presenting fewer findings than the review task returned without explicit instruction to do so

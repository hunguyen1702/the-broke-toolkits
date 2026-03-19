---
name: step-03-update-status
description: Update quest file with completed task status
nextStepFile: './step-04-adversarial-review.md'
quests_folder: '{project-root}/quests'
---

# Step 3: Update Status

**Progress: Step 3 of 5** — Next: Adversarial Review

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Update quest file accurately reflecting all completed tasks.

## GOAL

Update the quest file to mark all completed tasks as done, update the overall quest status, and add execution notes.

## AVAILABLE STATE

From previous steps:

- Quest file path
- Execution summary
- List of completed tasks
- Files modified
- `{baseline_commit}`

---

## SEQUENCE

### 1. Load Quest File

Read the current quest file to update status.

### 2. Update Task Completion Status

For each completed task:

1. **Mark task as complete** in the Implementation Plan section:

   ```markdown
   ## Implementation Plan

   ### Tasks

   - [x] Task 1: Clear action description ✓
     - File: `path/to/file.ext`
     - Action: Specific change to make
     - Dependencies: []
     - Notes: Completed - implementation notes

   - [x] Task 2: Another task description ✓
     ...
   ```

2. **Add completion timestamp** (optional):

   ```markdown
   - [x] Task 1: Description ✓ (completed: 2026-01-30)
   ```

### 3. Update Quest Frontmatter

Update the frontmatter to reflect current status:

```yaml
---
title: '{title}'
slug: '{slug}'
created: '{date}'
status: '{new_status}'  # 'in-progress' or 'completed'
stepsCompleted:
  - task-1
  - task-2
  - task-3
  ...
last_updated: '{current_date}'
files_modified:
  - path/to/file1.ext
  - path/to/file2.ext
---
```

**Status Logic:**

- If ALL tasks complete: `status: 'completed'`
- If SOME tasks complete: `status: 'in-progress'`
- If NO tasks complete: `status: 'planned'`

### 4. Add Execution Log

Append or update the execution log section in the quest file:

```markdown
## Execution Log

### Session: {current_date}

**Executed by:** Thor (Execute Quest Workflow)

**Tasks Completed This Session:**
- [x] Task 1: {description}
- [x] Task 2: {description}
- [x] Task 3: {description}

**Files Modified:**
| File | Changes |
|------|---------|
| `{file_path}` | {change_summary} |

**Parallel Execution:**
- Track A: {task_count} tasks
- Track B: {task_count} tasks

**Notes:**
{any_implementation_notes_or_decisions}

---
```

### 5. Update Acceptance Criteria

If any acceptance criteria can be marked as met:

```markdown
### Acceptance Criteria

- [x] AC 1: Given precondition, when action, then result ✓
- [x] AC 2: Another criteria ✓
- [ ] AC 3: Pending criteria (requires manual verification)
```

### 6. Save Quest File

Write the updated quest file back to disk.

### 7. Present Update Summary

Display to user:

```
Quest Status Updated: {quest_title}

**Status:** {previous_status} → {new_status}

**Tasks Completed:** {completed_count}/{total_count}
  ✓ Task 1: {description}
  ✓ Task 2: {description}
  ...

**Files Modified:** {file_count}

**Acceptance Criteria:** {met_count}/{total_criteria} met

{If quest completed:}
Quest fully implemented! All tasks complete.

{If quest in progress:}
Remaining tasks: {remaining_count}
Next task: Task {next_task_id}: {description}

[C] Continue to Adversarial Review
```

**HALT** and wait for **[C]**.

### 8. Proceed

When user selects **[C]**, load and execute **`steps/step-04-adversarial-review.md`** in full.

Pass context:

- Quest file path (updated)
- Files modified
- `{baseline_commit}`
- Execution summary

---

## SUCCESS METRICS

- Quest file loaded successfully
- All completed tasks marked with [x]
- Frontmatter status updated correctly
- stepsCompleted list updated
- Execution log added
- Quest file saved
- Summary presented to user

## FAILURE MODES

- Not marking all completed tasks
- Incorrect status calculation
- Missing stepsCompleted updates
- Not saving quest file
- No execution log

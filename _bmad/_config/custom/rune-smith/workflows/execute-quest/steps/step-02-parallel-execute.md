---
name: step-02-parallel-execute
description: Execute tasks in parallel using sub-agents
nextStepFile: './step-03-update-status.md'
quests_folder: '{project-root}/quests'
---

# Step 2: Parallel Execution

**Progress: Step 2 of 5** — Next: Update Status

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Coordinate sub-agents effectively.
- Each sub-agent receives complete context for their assigned track.

## GOAL

Execute quest tasks in parallel by spawning sub-agents for independent task branches. Coordinate completion and handle dependencies between tracks.

## AVAILABLE STATE

From Step 1:

- Quest file path and content
- Dependency graph analysis
- Task tracks (parallel branches)
- `{baseline_commit}` for diff construction

---

## SEQUENCE

### 1. Prepare Execution Context

For each parallel track, prepare a sub-agent briefing:

```yaml
Sub-Agent Briefing:
  track_id: "{track_identifier}"
  quest_name: "{quest_name}"
  feature_folder: "{feature_folder_path}"

  assigned_tasks:
    - task_id: "Task N"
      description: "{task_description}"
      file: "{target_file}"
      action: "{specific_action}"
      acceptance_criteria: "{criteria}"
      notes: "{implementation_notes}"
    - task_id: "Task N+1"
      ...

  codebase_context:
    patterns_to_follow: "{relevant_patterns}"
    files_to_reference: "{reference_files}"
    technical_decisions: "{key_decisions}"

  execution_rules:
    - Complete tasks in sequence within your track
    - Follow project conventions and patterns
    - Report completion status for each task
    - Flag any blockers or questions immediately
```

### 2. Spawn Sub-Agents for Parallel Tracks

For each parallel track (non-blocking tasks):

**Announce:**

```
Spawning Sub-Agent for Track {track_id}:
- Tasks: {task_list}
- Starting: {first_task}
```

**Sub-Agent Instructions:**

```
You are a Thor sub-agent assigned to Track {track_id}.

**Your Mission:** Execute the following tasks in sequence:

{task_list_with_details}

**Feature Context:**
- Feature folder: {feature_folder}
- Quest: {quest_name}
- Patterns to follow: {patterns}

**Execution Protocol:**
1. Read each task's description and acceptance criteria
2. Implement the change following project conventions
3. Mark task as complete when done
4. Move to next task in your track
5. Report blockers immediately

**Do NOT:**
- Work on tasks outside your assigned track
- Modify files unrelated to your tasks
- Wait for other sub-agents unless there's a true dependency

Begin with Task {first_task_id}.
```

### 3. Monitor Sub-Agent Progress

While sub-agents work:

1. **Track completion status** for each sub-agent
2. **Handle blockers** - If a sub-agent reports a blocker:
   - Assess if it's a true dependency
   - Provide guidance or reassign if needed
3. **Coordinate merge points** - When parallel tracks converge:
   - Wait for all prerequisite tracks to complete
   - Then proceed with dependent tasks

**Progress Display:**

```
Execution Progress:

Track A: [████████░░] 80% (4/5 tasks)
  ✓ Task 1: Create base component
  ✓ Task 3: Add styling
  ✓ Task 6: Add tests
  ✓ Task 8: Documentation
  ○ Task 10: Integration (in progress)

Track B: [██████████] 100% (3/3 tasks)
  ✓ Task 2: Setup API endpoint
  ✓ Task 4: Add validation
  ✓ Task 7: Error handling

Sequential: [░░░░░░░░░░] Waiting...
  ○ Task 5: Connect UI to API (depends on Task 3, Task 4)
  ○ Task 9: End-to-end testing
```

### 4. Execute Sequential Tasks

After parallel tracks complete, execute tasks with dependencies:

1. **Verify prerequisites** - Ensure all dependent tasks are done
2. **Execute in order** - Follow dependency chain
3. **Handle as main agent** or spawn additional sub-agents for remaining parallel opportunities

```
Parallel tracks complete. Executing sequential tasks...

Task 5: Connect UI to API
- Dependencies: ✓ Task 3, ✓ Task 4
- Status: Executing...
```

### 5. Consolidate Results

After all tasks complete:

**Gather from each sub-agent:**

- Tasks completed
- Files modified
- Any issues encountered
- Implementation notes

**Create execution summary:**

```
Execution Summary:

**Completed Tasks:** {count}/{total}
**Files Modified:** {file_count}
  - {file_path_1}
  - {file_path_2}
  ...

**Implementation Notes:**
- {notable_decisions_or_changes}

**Issues Encountered:**
- {any_issues_and_resolutions}
```

### 6. Continue

Present:

```
All tasks executed. Ready to update quest status.

[C] Continue to Update Status
[R] Review Changes (show diff)
[I] View Implementation Details
```

**HALT** and wait for user selection.

### 7. Handle User Selection

- IF [C]: Proceed to step 8
- IF [R]: Show `git diff {baseline_commit}` then re-present menu
- IF [I]: Show detailed implementation notes, then re-present menu

### 8. Proceed

When user selects **[C]**, load and execute **`steps/step-03-update-status.md`** in full.

Pass context:

- Quest file path
- Execution summary
- List of completed tasks
- Files modified
- `{baseline_commit}`

---

## SUB-AGENT COORDINATION RULES

### Task Assignment Principles

1. **Minimize communication overhead** - Give sub-agents complete context upfront
2. **Clear boundaries** - Each sub-agent owns their track exclusively
3. **Explicit dependencies** - Make cross-track dependencies crystal clear
4. **Fail fast** - Sub-agents report blockers immediately

### Handling Edge Cases

**If sub-agent encounters unexpected dependency:**

- Sub-agent pauses and reports to main agent
- Main agent reassesses dependency graph
- Provides guidance or reorders tasks

**If sub-agent's task conflicts with another track:**

- Identify the conflict early
- Serialize conflicting operations
- Or merge tracks if appropriate

**If sub-agent fails a task:**

- Report failure with details
- Main agent decides: retry, skip, or abort track
- Document failure in execution summary

---

## SUCCESS METRICS

- All parallel tracks identified and assigned
- Sub-agents spawned with complete context
- Tasks executed in correct order respecting dependencies
- Progress monitored and reported
- All tasks completed or blockers documented
- Execution summary prepared

## FAILURE MODES

- Missing dependency analysis
- Incomplete context for sub-agents
- Not handling blockers promptly
- Ignoring dependency violations
- No execution summary

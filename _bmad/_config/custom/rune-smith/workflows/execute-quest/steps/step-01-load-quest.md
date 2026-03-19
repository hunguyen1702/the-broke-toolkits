---
name: step-01-load-quest
description: Greet user and load quest for execution
nextStepFile: './step-02-parallel-execute.md'
quests_folder: '{project-root}/quests'
---

# Step 1: Greet & Load Quest

**Progress: Step 1 of 5** — Next: Parallel Execution

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Be helpful and suggest alternatives if user has no quest.

## GOAL

Greet the user, identify which quest to execute, and load it for processing. If user has no active quest, suggest using the `new-quest` workflow first.

## SEQUENCE

### 1. Greet User

Greet the user warmly:

"Greetings, {user_name}! Ready to conquer a quest today? Which quest would you like to execute?"

### 2. List Available Quests (Optional)

If quests folder exists, list available quests:

```
Available Quests:
- quest-001-feature-name/quest.md (status: planned)
- quest-002-another-feature/quest.md (status: in-progress)
...
```

### 3. Handle User Response

**IF user provides a quest path:**

- Proceed to step 4 (Load Quest)

**IF user has no quest or is unsure:**

Present suggestion:

```
No active quest? No problem! Consider these options:

[N] Start New Quest - Use the new-quest workflow to plan a feature first
[L] List Quests - Show all available quests in the quests folder
[P] Provide Path - Enter a specific quest file path
```

- IF [N]: Inform user to run the `new-quest` workflow: "Run Thor's [NQ] New Quest to plan your feature first, then return here to execute it."
- IF [L]: List all quests in `{quests_folder}` with their status
- IF [P]: Prompt for quest path

**HALT** and wait for user input.

### 4. Load and Parse Quest

Read the full Quest file. Extract:

- **Quest Title**: Feature/change name
- **Problem Statement**: What problem this solves
- **Solution Overview**: High-level approach
- **Selected Approach**: From analysis report (if applicable)
- **Implementation Tasks**: The task list with dependencies
- **Dependency Graph**: Task dependency structure
- **Acceptance Criteria**: How to verify completion
- **Files to Reference**: Relevant codebase files
- **Technical Decisions**: Key decisions from planning

### 5. Analyze Dependency Graph

Parse the task dependency structure:

1. Identify **root tasks** (no dependencies)
2. Map **dependency chains** (tasks that depend on others)
3. Identify **parallel branches** (independent task sequences)
4. Note **merge points** (where branches converge)

Example dependency analysis:

```
Task Dependency Analysis:
├── Track A (can run in parallel):
│   └── Task 1 → Task 3 → Task 6
├── Track B (can run in parallel):
│   └── Task 2 → Task 4
└── Sequential (depends on A & B):
    └── Task 5 (depends on Task 3, Task 4) → Task 7
```

### 6. Present Quest Summary

Display to user:

```
Quest Loaded: {quest_title}

**Problem:** {problem_statement_summary}
**Approach:** {selected_approach}

**Task Overview:**
- Total tasks: {count}
- Completed: {completed_count}
- Remaining: {remaining_count}

**Parallel Execution Plan:**
- Track A: {task_count} tasks (can start immediately)
- Track B: {task_count} tasks (can start immediately)
- Sequential: {task_count} tasks (must wait for dependencies)

Ready to begin parallel execution?

[C] Continue to Parallel Execution
[V] View Full Task List
[D] View Dependency Graph
```

**HALT** and wait for user selection.

### 7. Handle User Selection

- IF [C]: Proceed to step 8
- IF [V]: Display full task list with status, then re-present menu
- IF [D]: Display dependency graph visualization, then re-present menu

### 8. Proceed

When user selects **[C]**, load and execute **`steps/step-02-parallel-execute.md`** in full.

Pass context:

- Quest file path
- Quest content (parsed)
- Dependency graph analysis
- `{baseline_commit}` from workflow initialization

---
name: step-04-create-quest
description: Generate quest file with implementation tasks
nextStepFile: './step-05-review.md'
questTemplate: '../templates/quest-template.md'
---

# Step 4: Create Quest

**Progress: Step 4 of 5** — Next: Review

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Tasks MUST be broken into dependency hierarchy.
- Use Thor's powerful, action-oriented style.

## GOAL

Create a comprehensive quest file with implementation tasks organized in dependency hierarchy.

## SEQUENCE

### 1. Load Context

Load all context from previous steps:

- Confirmed scope from Step 1
- Discovery report from `{quests_folder}/{quest-name}/discovery-report.md`
- Analysis report from `{quests_folder}/{quest-name}/analysis-report.md`
- Selected approach details

### 2. Generate Quest Metadata

Create quest identifiers:

- **Slug:** kebab-case from feature name (e.g., `add-user-auth`)
- **Title:** Human-readable feature name
- **Created:** Current date

### 3. Draft Overview Section

Using information from Steps 1-3, populate:

```markdown
## Overview

### Problem Statement
{from Step 1 - what problem this solves}

### Solution
{from Step 3 - selected approach summary}

### Scope
**In Scope:**
{from Step 1}

**Out of Scope:**
{from Step 1}
```

### 4. Generate Implementation Tasks

**CRITICAL:** Break down the implementation into discrete tasks with dependency hierarchy.

#### 4A. Task Breakdown Rules

1. Each task should be a **discrete, completable unit** of work
2. Tasks are ordered by **dependencies** (prerequisite tasks first)
3. Each task specifies **exact files** to modify
4. Each task includes **explicit actions** to take

#### 4B. Task Format

```markdown
- [ ] Task {N}: {Clear action description}
  - File: `path/to/file.ext`
  - Action: {Specific change to make}
  - Dependencies: [{Task X}, {Task Y}] or "None"
  - Notes: {Implementation details}
```

#### 4C. Build Dependency Graph

Visualize task dependencies:

```
Task 1 (Foundation)
├── Task 2 (depends on 1)
│   └── Task 4 (depends on 2)
└── Task 3 (depends on 1)
    └── Task 5 (depends on 3)
Task 6 (depends on 4, 5)
```

#### 4D. Task Categories

Organize tasks into logical groups:

1. **Setup/Foundation** — Initial scaffolding, configs
2. **Core Implementation** — Main feature logic
3. **Integration** — Connecting to existing systems
4. **Testing** — Test implementation
5. **Documentation** — Update docs if needed

### 5. Generate Acceptance Criteria

Create testable acceptance criteria using Given/When/Then format:

```markdown
### Acceptance Criteria

- [ ] AC 1: Given {precondition}, when {action}, then {expected result}
- [ ] AC 2: Given {precondition}, when {action}, then {expected result}
```

**Ensure ACs cover:**

- Happy path functionality
- Error handling scenarios
- Edge cases (if relevant)
- Integration points (if relevant)

### 6. Complete Additional Sections

#### Dependencies

```markdown
### Dependencies

- **External Libraries:** {list any new dependencies}
- **Task Dependencies:** {cross-reference to other quests if any}
- **API/Data Dependencies:** {external services or data needed}
```

#### Testing Strategy

```markdown
### Testing Strategy

- **Unit Tests:** {what needs unit testing}
- **Integration Tests:** {what needs integration testing}
- **Manual Testing:** {manual verification steps}
```

#### Notes

```markdown
### Notes

- **High-Risk Items:** {from analysis, if any}
- **Known Limitations:** {scope limitations}
- **Future Considerations:** {out of scope but worth noting}
```

### 7. Write Quest File

Using template from `{questTemplate}`, write to:
`{quests_folder}/{quest-name}/quest.md`

### 8. Present Draft

Show the user the complete quest draft:

```
## Quest Draft Complete

**Quest:** {title}
**Tasks:** {task_count}
**Acceptance Criteria:** {ac_count}

### Task Summary

{numbered list of tasks}

### Key Dependencies

{dependency highlights}

Would you like to refine this quest, or shall we proceed to review?

[A] Add/modify details
[C] Continue to Review
```

**HALT** and wait for user input.

### 9. Handle Response

**IF [A] Add/Modify:**

- Capture user feedback
- Update quest file
- Re-present and ask again
- Continue review/feedback loop until satisfied

**IF [C] Continue:**

- Finalize quest file
- Proceed to next step

### 10. Proceed

When user confirms, load and execute **`steps/step-05-review.md`** in full.

# Step 4: Create Spec

**Progress: Step 4 of 5** — Next: Review

## Goal

Create a comprehensive spec file with implementation tasks organized in dependency hierarchy, acceptance criteria, and testing strategy.

## Rules

- This step **auto-triggers** — proceed without waiting for user input.
- Tasks MUST be broken into a dependency hierarchy.
- Each task must be discrete and actionable with specific files and actions.

## Sequence

### 1. Load Context

Load all context from previous steps:
- Confirmed scope from Step 1
- Discovery report from `docs/spec/{slug}/discovery-report.md`
- Analysis report from `docs/spec/{slug}/analysis-report.md`
- Selected approach details

### 2. Generate Spec Metadata

- **Slug:** kebab-case from feature name (already created in Step 1)
- **Title:** Human-readable feature name
- **Created:** Current date

### 3. Draft Overview

Using information from Steps 1-3, write:
- **Problem Statement:** from Step 1 goals
- **Solution:** from Step 3 selected approach
- **Scope:** in-scope and out-of-scope from Step 1

### 4. Generate Implementation Tasks

#### Task Breakdown Rules

1. Each task is a **discrete, completable unit** of work
2. Tasks are ordered by **dependencies** (prerequisite tasks first)
3. Each task specifies **exact files** to create or modify
4. Each task includes **explicit actions** (not vague descriptions)

#### Task Format

```markdown
- [ ] Task {N}: {Clear action description}
  - File: `path/to/file.ext`
  - Action: {Specific change to make}
  - Dependencies: [{Task X}, {Task Y}] or "None"
  - Notes: {Implementation details}
```

#### Task Categories

Organize tasks into logical groups:
1. **Setup/Foundation** — Initial scaffolding, configs
2. **Core Implementation** — Main feature logic
3. **Integration** — Connecting to existing systems
4. **Testing** — Test implementation
5. **Documentation** — Update docs if needed

### 5. Build Dependency Graph

Visualize task dependencies as an ASCII tree:

```
Task 1 (Foundation)
├── Task 2 (depends on 1)
│   └── Task 4 (depends on 2)
└── Task 3 (depends on 1)
    └── Task 5 (depends on 3)
Task 6 (depends on 4, 5)
```

### 6. Generate Acceptance Criteria

Create testable acceptance criteria using Given/When/Then format:

```markdown
- [ ] AC 1: Given {precondition}, when {action}, then {expected result}
- [ ] AC 2: Given {precondition}, when {action}, then {expected result}
```

Ensure ACs cover:
- Happy path functionality
- Error handling scenarios
- Edge cases (if relevant)
- Integration points (if relevant)

### 7. Complete Additional Sections

- **Dependencies:** External libraries, cross-references, API/data dependencies
- **Testing Strategy:** Unit tests, integration tests, manual verification steps
- **Notes:** High-risk items, known limitations, future considerations

### 8. Write Spec File

Read template from `spec-template.md` and write the complete spec to:
`docs/spec/{slug}/spec.md`

### 9. Auto-Proceed

Read `step-05-review.md` and follow it.

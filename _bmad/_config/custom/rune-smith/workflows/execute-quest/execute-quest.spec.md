# Workflow Specification: execute-quest

**Module:** rune-smith
**Status:** Active
**Created:** 2026-01-27
**Updated:** 2026-01-30

---

## Workflow Overview

**Goal:** Execute a Quest with parallel task processing and adversarial code review.

**Description:** Thor takes an approved Quest/Tech Spec, analyzes the dependency graph, spawns sub-agents for parallel task branches, coordinates execution, updates status, and ensures quality through adversarial review.

**Workflow Type:** Core

---

## Workflow Structure

### Entry Point

```yaml
---
name: execute-quest
description: Execute a Quest with parallel task processing and adversarial review
web_bundle: true
installed_path: '{project-root}/_bmad/rune-smith/workflows/execute-quest'
---
```

### Mode

- [ ] Create-only (steps-c/)
- [x] Execution mode (parallel task processing with sub-agents)

---

## Workflow Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Greet & Load Quest | Greet user, load quest file, suggest new-quest if none available |
| 2 | Parallel Execution | Spawn sub-agents for parallel task branches, coordinate execution |
| 3 | Update Status | Update quest file with completed task status |
| 4 | Adversarial Review | Construct diff and invoke adversarial code review |
| 5 | Resolve Findings | Handle review findings interactively, finalize quest |

---

## Step Details

### Step 1: Greet & Load Quest

- Greet user warmly
- List available quests (if any)
- Suggest `new-quest` workflow if user has no active quest
- Load and parse quest file
- Analyze dependency graph to identify parallel tracks
- Present quest summary with parallel execution plan

### Step 2: Parallel Execution

- Prepare execution context for each parallel track
- Spawn sub-agents with complete task briefings
- Each sub-agent assigned a track (sequence of dependent tasks)
- Sub-agents work independently on their tracks
- Monitor progress and handle blockers
- Execute sequential tasks after parallel tracks complete
- Consolidate results from all sub-agents

### Step 3: Update Status

- Mark all completed tasks as done in quest file
- Update frontmatter status (`planned` → `in-progress` → `completed`)
- Add execution log with session details
- Update acceptance criteria if applicable
- Save updated quest file

### Step 4: Adversarial Review

- Construct diff from `{baseline_commit}`
- Include all modified and new files
- Invoke adversarial review task
- Process findings (severity, validity)
- Present findings table to user

### Step 5: Resolve Findings

- Present resolution options: Walk through / Fix automatically / Skip
- Apply fixes as selected
- Update quest file with review notes
- Provide completion summary
- Suggest next steps (commit, update saga, continue)

---

## Workflow Inputs

### Required Inputs

- Quest file (`quests/{quest-name}/quest.md`)

### Optional Inputs

- User feedback during execution
- Specific task selection

---

## Workflow Outputs

### Output Format

- [x] Document-producing (updated quest file)
- [x] Non-document (code changes)

### Output Files

- Updated codebase (implemented features)
- Updated `quests/{quest-name}/quest.md` with:
  - Task completion status
  - Execution log
  - Review notes

---

## Agent Integration

### Primary Agent

Thor

### Sub-Agents

- Task execution sub-agents (spawned for parallel tracks)
- Adversarial review sub-agent (for code review)

---

## Workflow References

- `steps/step-01-load-quest.md` - Greet and load quest
- `steps/step-02-parallel-execute.md` - Parallel task execution
- `steps/step-03-update-status.md` - Update quest status
- `steps/step-04-adversarial-review.md` - Adversarial code review
- `steps/step-05-resolve-findings.md` - Resolve findings

---

## Key Features

### Parallel Execution

- Analyzes dependency graph to identify parallelizable tasks
- Spawns sub-agents for independent task branches
- Each sub-agent receives complete context:
  - Task details and acceptance criteria
  - Feature folder path for reference
  - Relevant codebase patterns

### Quality Assurance

- Adversarial code review after implementation
- Finding categorization (severity, validity)
- Multiple resolution approaches (walk-through, auto-fix, skip)

### Status Tracking

- Real-time progress updates
- Detailed execution logs
- Comprehensive completion summaries

---

## Implementation Notes

Workflow implementation complete with 5 steps in `steps/` folder.

Key changes from v1:
- Added parallel execution with sub-agents
- Integrated adversarial review from quick-dev workflow
- Enhanced status tracking with execution logs
- Added greeting and quest suggestion flow

---

_Spec created on 2026-01-27, updated 2026-01-30 via BMAD Module workflow_

# Workflow Specification: update-saga

**Module:** rune-smith
**Status:** Active
**Created:** 2026-01-27
**Updated:** 2026-01-30

---

## Workflow Overview

**Goal:** Synchronize Saga documentation from multiple Quest folders.

**Description:** Mimir helps the user select which quest folders to sync, extracts relevant information (features implemented, architectural decisions, patterns discovered), and updates the PRD and Architecture documents to reflect the current state of the project.

**Workflow Type:** Feature

---

## Workflow Structure

### Entry Point

```yaml
---
name: update-saga
description: Sync Saga documentation from multiple Quest folders
web_bundle: true
installed_path: '{project-root}/_bmad/rune-smith/workflows/update-saga'
---
```

### Mode

- [ ] Create-only (steps-c/)
- [x] Sync mode (aggregates from multiple sources)

---

## Workflow Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Select Quest Folders | User selects which quest folders to sync |
| 2 | Analyze & Aggregate | Extract and categorize information from quests |
| 3 | Draft Updates | Prepare updates for prd.md and architecture.md |
| 4 | Review | User confirms proposed updates |
| 5 | Commit | Write updated Saga files |

---

## Step Details

### Step 1: Select Quest Folders

- Greet user and list available quest folders
- Ask user which quest folders to sync:
  - Specific folder names (comma-separated)
  - "all" for all quest folders
  - "completed" for completed quests only
  - "recent" for recently modified quests
- Validate user selection
- Load current Saga files (prd.md, architecture.md)
- For each selected quest folder, load:
  - `quest.md` (main quest file)
  - `discovery-report.md` (patterns, constraints)
  - `analysis-report.md` (approach decisions)
- Present selection summary to user

### Step 2: Analyze & Aggregate

- Aggregate features from all quests
- Compile architectural information:
  - Components and modules
  - Patterns and conventions
  - Technical decisions
  - Constraints
- Identify changes needed for PRD
- Identify changes needed for Architecture
- Deduplicate and resolve conflicts
- Present change summary

### Step 3: Draft Updates

- Draft PRD updates based on aggregated features
- Draft Architecture updates based on aggregated info
- Apply quest attribution for traceability
- Generate diff summary
- Present drafts for preview

### Step 4: Review

- Present change summary
- Show full PRD draft
- Show full Architecture draft
- Allow user to edit either/both
- Iterate until user approves

### Step 5: Commit

- Ensure saga folder exists
- Write approved PRD content
- Write approved Architecture content
- Include sync metadata in frontmatter
- Generate sync report
- Provide next steps guidance

---

## Workflow Inputs

### Required Inputs

- Quest folders in `{quests_folder}/`

### Optional Inputs

- Existing Saga files (prd.md, architecture.md)
- User notes or corrections

---

## Workflow Outputs

### Output Format

- [x] Document-producing
- [ ] Non-document

### Output Files

- Updated `{saga_folder}/prd.md`
- Updated `{saga_folder}/architecture.md`

---

## Quest Folder Structure

Each quest folder should contain:

```
{quests_folder}/{quest-name}/
├── quest.md              # Main quest file (required)
├── discovery-report.md   # Patterns, constraints (optional)
└── analysis-report.md    # Approach decisions (optional)
```

### Information Extracted

| Source | Information |
|--------|-------------|
| quest.md | Features, tasks, status, acceptance criteria |
| discovery-report.md | Patterns, constraints, external references |
| analysis-report.md | Approaches evaluated, decisions made |

---

## Agent Integration

### Primary Agent

Mimir

### Other Agents

None

---

## Workflow References

- `steps/step-01-scan-quests.md` - Select quest folders
- `steps/step-02-analyze-aggregate.md` - Aggregate information
- `steps/step-03-draft-updates.md` - Draft Saga updates
- `steps/step-04-review.md` - User review
- `steps/step-05-commit.md` - Write files

---

## Key Features

### User-Selected Quest Sync

- User chooses which quest folders to sync
- Supports specific selection, "all", "completed", or "recent"
- Handles missing optional files gracefully

### Intelligent Merging

- Deduplicates information from multiple quests
- Preserves existing Saga content
- Resolves conflicts with clear rules

### Traceability

- Quest attribution in updated content
- Sync metadata in frontmatter
- Source tracking for future updates

---

## Implementation Notes

Workflow implementation complete with 5 steps in `steps/` folder.

Key changes from v1:
- User now manually selects which quest folders to sync (instead of auto-loading all)
- Supports "all", "completed", "recent" filters as shortcuts
- Aggregates information from quest.md, discovery-report.md, and analysis-report.md
- Updates both PRD and Architecture based on aggregated data
- Added sync metadata and attribution

---

_Spec created on 2026-01-27, updated 2026-01-30 via BMAD Module workflow_

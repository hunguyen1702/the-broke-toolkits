# Workflow Specification: forge-prd

**Module:** rune-smith
**Status:** Active
**Created:** 2026-01-27
**Updated:** 2026-01-30

---

## Workflow Overview

**Goal:** Generate a lightweight PRD document that helps developers and AI agents understand the project context, focusing on business requirements and user needs (NOT code or technical details).

**Description:** Mimir analyzes the project context (README, user input, and optionally codebase structure) to generate a PRD document that captures the business essence of the project. The PRD focuses on WHAT the project does and WHO it serves, never on HOW it's implemented.

**Workflow Type:** Core (document-producing)

---

## Workflow Structure

### Entry Point

```yaml
---
name: forge-prd
description: Forge a PRD document through codebase analysis and user input
main_config: '{project-root}/_bmad/core/config.yaml'
web_bundle: true
---
```

### Mode

- [x] Create-only (steps/)
- [ ] Tri-modal (steps-c/, steps-e/, steps-v/)

---

## Steps

| Step | File | Goal |
|------|------|------|
| 1 | step-01-welcome-readme.md | Check for existing PRD, welcome user, read README |
| 2 | step-02-detect-project.md | Determine greenfield/brownfield, identify project type |
| 3 | step-03-create-placeholder.md | Create draft PRD placeholder from template |
| 4 | step-04-scan-codebase.md | Scan codebase for info (brownfield only) |
| 5 | step-05-consolidate-draft.md | Consolidate info into PRD following template |
| 6 | step-06-review-cycle.md | User review and feedback loop |
| 7 | step-07-finalize.md | Mark PRD complete |

### Step Flow

```
Step 1 (Welcome)
    ├── [PRD exists] → Offer: Regenerate / Update-saga / Cancel
    └── [No PRD] → Continue
           ↓
Step 2 (Detect Project)
    ├── Brownfield → Continue to Step 3
    └── Greenfield → Continue to Step 3
           ↓
Step 3 (Create Placeholder)
    ├── Brownfield → Step 4 (Scan)
    └── Greenfield → Step 5 (Consolidate) [skip scan]
           ↓
Step 4 (Scan) → Step 5
           ↓
Step 5 (Consolidate Draft)
           ↓
Step 6 (Review Cycle) ←──┐
    ├── [Approve] → Step 7   │
    └── [Edit] ──────────────┘
           ↓
Step 7 (Finalize) → Complete
```

---

## Workflow Inputs

### Required Inputs

- User description of the project
- Project root directory access

### Optional Inputs

- README.md (if exists)
- Codebase (for brownfield projects)

---

## Workflow Outputs

### Output Format

- [x] Document-producing
- [ ] Non-document

### Output Files

- `{saga_folder}/prd.md`

### Output Content (PRD Sections)

1. **Title** - Project name
2. **Project Overview** - What it does, problem it solves, value proposition
3. **Target User** - Who uses it, their objectives
4. **Requirements & Features** - User-facing features grouped by functionality

### Critical Constraint

The PRD contains **NO code or technical information**:
- No programming languages
- No frameworks or libraries
- No architecture details
- No implementation specifics

---

## Agent Integration

### Primary Agent

**Mimir** - The Wisdom Keeper

### Agent Role

Synthesizes project vision and forges PRD documents focusing on business context and user needs.

---

## Templates

| Template | Purpose |
|----------|---------|
| templates/prd-template.md | PRD document structure |

---

## Related Workflows

| Workflow | Relationship |
|----------|--------------|
| update-saga | Can be invoked from Step 1 if PRD already exists |
| forge-architecture | Uses PRD as input for technical architecture |

---

_Spec updated on 2026-01-30 via BMAD workflow-builder_

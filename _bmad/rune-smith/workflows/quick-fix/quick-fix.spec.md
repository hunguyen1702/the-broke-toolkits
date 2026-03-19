# Workflow Specification: quick-fix

**Module:** rune-smith
**Status:** Active
**Created:** 2026-01-27
**Updated:** 2026-01-30

---

## Workflow Overview

**Goal:** Rapidly fix bugs without full Quest ceremony.

**Description:** Thor identifies the file, fixes the issue, and confirms, skipping the detailed planning phase.

**Workflow Type:** Utility

---

## Workflow Structure

### Entry Point

```yaml
---
name: quick-fix
description: Rapidly fix bugs without full Quest ceremony
web_bundle: true
installed_path: '{project-root}/_bmad/rune-smith/workflows/quick-fix'
---
```

### Mode

- [x] Create-only (steps-c/)
- [ ] Tri-modal (steps-c/, steps-e/, steps-v/)

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Identify | User describes bug/task, Thor finds file |
| 2 | Implement | Thor applies fix |
| 3 | Verify | User confirms fix |

---

## Workflow Inputs

### Required Inputs

- Bug description / Task

### Optional Inputs

- File path (if known)

---

## Workflow Outputs

### Output Format

- [ ] Document-producing
- [x] Non-document (Code changes)

### Output Files

- Updated codebase

---

## Agent Integration

### Primary Agent

Thor

### Other Agents

None

---

## Implementation Notes

Workflow implementation complete with 3 steps in `steps/` folder.

---

_Spec created on 2026-01-27, updated 2026-01-30 via BMAD Module workflow_

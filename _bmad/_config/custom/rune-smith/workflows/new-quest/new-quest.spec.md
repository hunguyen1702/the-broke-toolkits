# Workflow Specification: new-quest

**Module:** rune-smith
**Status:** Active
**Created:** 2026-01-27
**Updated:** 2026-01-30

---

## Workflow Overview

**Goal:** Plan a new feature with Discovery, Analysis, and Quest generation.

**Description:** Thor gathers requirements through clarifying questions, conducts multi-agent discovery for patterns and constraints, analyzes approaches with 9-criteria scoring, and produces a detailed Quest with task dependency hierarchy.

**Workflow Type:** Core

---

## Workflow Structure

### Entry Point

```yaml
---
name: new-quest
description: Plan a new feature with Discovery, Analysis, and Quest generation
web_bundle: true
installed_path: '{project-root}/_bmad/rune-smith/workflows/new-quest'
---
```

### Mode

- [x] Create-only (steps/)
- [ ] Tri-modal (steps-c/, steps-e/, steps-v/)

---

## Workflow Steps

| Step | Name | Goal | Auto-Proceed |
|------|------|------|--------------|
| 1 | Requirements | Greeting, clarifying questions, scope confirmation | No |
| 2 | Discovery | Multi-agent discovery for patterns, constraints, references | Yes |
| 3 | Analysis (Router) | Route to 3A or 3B based on discovery findings | Yes |
| 3A | Pattern-Based | Select best matching pattern (if patterns exist) | Yes |
| 3B | Multi-Approach | 9-criteria scoring evaluation (if no patterns) | Yes |
| 4 | Create Quest | Task breakdown with dependency hierarchy | No |
| 5 | Review | Final review and approval cycle | No |

---

## Step Details

### Step 1: Requirements

- Greet user and ask what to build
- Ask clarifying questions:
  - Goals of the update/feature
  - Expected outcome
  - Implementation preference (optional)
- Summarize and confirm scope
- Create quest folder structure

### Step 2: Discovery (Multi-Agent)

Spawns sub-agents for (only if needed):

- **Pattern Search:** Find existing patterns in codebase via Saga and code search
- **Constraints:** Identify technical constraints in project
- **Similar Features:** Research external implementations
- **External Docs:** Gather integration documentation

Output: `{quests_folder}/{quest-name}/discovery-report.md`

### Step 3: Analysis Router

Routes to appropriate analysis path based on discovery findings:
- If patterns exist → Step 3A
- If no patterns / user wants evaluation → Step 3B

### Step 3A: Pattern-Based Implementation

- Select the simplest pattern that matches requirements
- Create simplified analysis report
- Minimal overhead for well-established patterns

Output: `{quests_folder}/{quest-name}/analysis-report.md`

### Step 3B: Multi-Approach Evaluation

- Generate 3 distinct implementation approaches
- Spawn sub-agents to evaluate each approach
- Score using 9 criteria (1-10 scale):
  1. Simple and easy to implement
  2. Maintainable and scalable
  3. Reusable and modular
  4. Efficient and fast
  5. Secure and safe
  6. Cost-effective
  7. User-friendly
  8. Compatible with codebase
  9. Compatible with tech stack
- Highest average score wins

Output: `{quests_folder}/{quest-name}/analysis-report.md`

### Step 4: Create Quest

- Generate quest metadata
- Break implementation into tasks with dependency hierarchy
- Create acceptance criteria (Given/When/Then)
- Document dependencies and testing strategy
- Review/feedback cycle with user

Output: `{quests_folder}/{quest-name}/quest.md`

### Step 5: Review

- Validate completeness checklist
- Present final quest for approval
- Handle edits or regeneration requests
- Mark quest as ready for execution

---

## Workflow Inputs

### Required Inputs

- User Request (from Step 1)
- Saga (`prd.md`, `architecture.md`) — optional but recommended

### Optional Inputs

- User implementation preference
- Specific file references

---

## Workflow Outputs

### Output Format

- [x] Document-producing
- [ ] Non-document

### Output Files

- `{quests_folder}/{quest-name}/discovery-report.md`
- `{quests_folder}/{quest-name}/analysis-report.md`
- `{quests_folder}/{quest-name}/quest.md`

---

## Templates

| Template | Purpose |
|----------|---------|
| `discovery-report-template.md` | Structure for discovery findings |
| `analysis-report-template.md` | Structure for approach evaluation |
| `quest-template.md` | Structure for quest file |

---

## Agent Integration

### Primary Agent

Thor (Implementation Lead)

### Sub-Agents

- Discovery sub-agents (Step 2)
- Analysis sub-agents (Step 3)

### Other Agents

Mimir (Context provider via Saga)

### Workflow References

- `steps/step-01-requirements.md`
- `steps/step-02-discovery.md`
- `steps/step-03-analysis.md` (router)
- `steps/step-03a-pattern-based.md`
- `steps/step-03b-multi-approach.md`
- `steps/step-04-create-quest.md`
- `steps/step-05-review.md`

---

## Implementation Notes

Workflow redesigned on 2026-01-30 with:
- Enhanced requirements gathering with clarifying questions
- Multi-agent discovery phase
- 9-criteria approach scoring system
- Task dependency hierarchy in quest generation
- Review/feedback cycles

---

_Spec created on 2026-01-27, updated 2026-01-30 via BMAD Module workflow_

---
name: new-quest
description: Plan a new feature with Discovery, Analysis, and Quest generation
main_config: '{project-root}/_bmad/core/config.yaml'
web_bundle: true
installed_path: '{project-root}/_bmad/rune-smith/workflows/new-quest'
---

# New Quest

**Goal:** Plan a new feature through systematic discovery, multi-criteria approach analysis, and detailed quest generation with task dependency mapping.

**Your Role:** You are Thor, the Implementation Lead. You gather requirements, conduct discovery, analyze approaches with scoring, and produce an actionable Quest that can be executed step-by-step.

---

## WORKFLOW ARCHITECTURE

- **Micro-file Design**: Each step is a self-contained instruction file.
- **Just-In-Time Loading**: Only the current step file is in memory.
- **Sequential Enforcement**: Complete steps in order; do not skip.
- **Multi-Agent Discovery**: Step 2 spawns sub-agents for parallel discovery.
- **Structured Analysis**: Step 3 uses 9-criteria scoring for approach evaluation.
- **State Tracking**: Artifacts stored in `{quests_folder}/{quest-name}/`.

### Step Processing Rules

1. **READ COMPLETELY** the entire step file before acting.
2. **FOLLOW SEQUENCE**; do not deviate.
3. **WAIT FOR INPUT** at menus (unless step says auto-proceed).
4. **LOAD NEXT** only when directed.

### Critical Rules

- **NEVER** load multiple step files at once.
- **ALWAYS** read the full step file before execution.
- **ALWAYS** speak output in the agent's `{communication_language}`.

---

## WORKFLOW STEPS

| Step | Name | Description | Auto-Proceed |
|------|------|-------------|--------------|
| 1 | Requirements | Greeting, clarifying questions, scope confirmation | No |
| 2 | Discovery | Multi-agent pattern/constraint/reference gathering | Yes |
| 3 | Analysis (Router) | Route to 3A or 3B based on discovery findings | Yes |
| 3A | Pattern-Based | Select best matching pattern (if patterns exist) | Yes |
| 3B | Multi-Approach | 9-criteria scoring evaluation (if no patterns) | Yes |
| 4 | Create Quest | Task breakdown with dependency hierarchy | No |
| 5 | Review | Final review and approval cycle | No |

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from `{main_config}` and resolve:

- `project_name`, `output_folder`, `user_name`, `communication_language`, `document_output_language`
- Saga path: `{saga_folder}/`
- Quests path: `{quests_folder}/`

### 2. First Step Execution

Read fully and follow: `steps/step-01-requirements.md` to begin the workflow.

---

## WORKFLOW OUTPUTS

This workflow produces:

1. **Discovery Report** — `{quests_folder}/{quest-name}/discovery-report.md`
   - Architecture snapshot
   - Existing patterns
   - Technical constraints
   - External references

2. **Analysis Report** — `{quests_folder}/{quest-name}/analysis-report.md`
   - Approach evaluations with scores
   - Recommendation and rationale

3. **Quest File** — `{quests_folder}/{quest-name}/quest.md`
   - Problem statement and solution
   - Implementation tasks with dependencies
   - Acceptance criteria
   - Testing strategy

---

## TEMPLATES

Templates are located in `templates/`:

- `discovery-report-template.md`
- `analysis-report-template.md`
- `quest-template.md`

---

## ANALYSIS CRITERIA

Approaches are scored on 9 criteria (1-10 scale):

1. Simple and easy to implement
2. Maintainable and scalable
3. Reusable and modular
4. Efficient and fast
5. Secure and safe
6. Cost-effective
7. User-friendly
8. Compatible with codebase
9. Compatible with tech stack

The approach with the highest average score is recommended.

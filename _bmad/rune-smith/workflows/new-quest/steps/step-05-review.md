---
name: step-05-review
description: Final review and approval of quest
---

# Step 5: Review

**Progress: Step 5 of 5** — Final Step

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Continue review cycle until user approves.
- Use Thor's protective, quality-focused style.

## GOAL

Conduct final review of the quest, ensure completeness, and get user approval before marking as ready for execution.

## SEQUENCE

### 1. Load Quest for Review

Read the quest file from `{quests_folder}/{quest-name}/quest.md`.

### 2. Validate Completeness

Run through quality checklist:

```markdown
## Quest Quality Checklist

### Structure
- [ ] Problem statement is clear and specific
- [ ] Solution aligns with selected approach
- [ ] Scope boundaries are well-defined

### Tasks
- [ ] All tasks are discrete and actionable
- [ ] Dependencies are correctly mapped
- [ ] File paths are specific and accurate
- [ ] Actions are explicit (not vague)

### Acceptance Criteria
- [ ] ACs use Given/When/Then format
- [ ] Happy path is covered
- [ ] Error scenarios are addressed
- [ ] ACs are testable

### Context
- [ ] Codebase patterns are documented
- [ ] Technical decisions are recorded
- [ ] Dependencies are listed
```

### 3. Present Final Review

Display the complete quest with validation results:

```
## Final Quest Review

**Quest:** {title}
**Status:** Ready for Review

### Overview
{problem + solution summary}

### Implementation Plan
{task count} tasks in {category count} categories

{task list with dependencies}

### Acceptance Criteria
{ac count} criteria defined

{ac list}

### Quality Check Results
✅ {passed checks}
⚠️ {warnings if any}

---

## Review Actions

[A] Approve - Quest is ready for execution
[E] Edit - Make changes to the quest
[R] Regenerate - Start fresh with new approach
```

**HALT** and wait for user input.

### 4. Handle Response

**IF [A] Approve:**

- Update quest status to `ready-for-execution`
- Update frontmatter: `status: 'ready'`
- Proceed to completion

**IF [E] Edit:**

- Ask what the user wants to change
- Apply edits to quest file
- Re-present for review
- Continue cycle until approved

**IF [R] Regenerate:**

- Ask what should be different
- Return to Step 3 (Analysis) or Step 4 (Create Quest) as appropriate
- Note: This is rare and should be confirmed with user

### 5. Completion

When approved, present final confirmation:

```
## Quest Forged Successfully! ⚒️

**Quest:** {title}
**Location:** `{quests_folder}/{quest-name}/quest.md`
**Status:** Ready for Execution

### Related Documents
- Discovery Report: `{quests_folder}/{quest-name}/discovery-report.md`
- Analysis Report: `{quests_folder}/{quest-name}/analysis-report.md`

### Next Steps

To execute this quest, run:
**[EX] Execute Quest** and select "{quest-name}"

The hammer awaits your command, {user_name}.
```

### 6. Workflow Complete

The New Quest workflow is complete. Return control to Thor's main menu.

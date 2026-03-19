---
name: step-01-select-quests
description: Greet user and select quest folders to sync
nextStepFile: './step-02-analyze-aggregate.md'
---

# Step 1: Select Quest Folders

**Progress: Step 1 of 5** — Next: Analyze & Aggregate

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Only load quest folders explicitly selected by the user.
- Do NOT auto-load all quest folders.

## GOAL

Greet the user, ask which quest folders to sync to the Saga, and load only the selected quests.

## SEQUENCE

### 1. Greet & Show Available Quests

Display greeting and list available quest folders:

```
Saga Synchronization

I'll help you update the Saga documentation (prd.md and architecture.md) with information from your quests.

**Available Quest Folders:**
{list all subdirectories in {quests_folder}/}

Example:
- quest-001-user-auth
- quest-002-payment-integration
- quest-003-dashboard-redesign
```

### 2. Ask for Selection

Prompt the user:

```
Which quest folders would you like to sync to the Saga?

**Options:**
- Enter folder names (comma-separated): quest-001, quest-002
- Enter "all" to sync all quest folders
- Enter "completed" to sync only completed quests
- Enter "recent" to sync quests modified in the last 7 days

Your selection:
```

**HALT** and wait for user input.

### 3. Validate Selection

Based on user input:

| Input | Action |
|-------|--------|
| Specific names | Validate each folder exists |
| "all" | Select all quest folders |
| "completed" | Filter to status: completed |
| "recent" | Filter to modified within 7 days |

If any specified folder doesn't exist:

```
Warning: The following folders were not found:
- {invalid_folder_1}
- {invalid_folder_2}

Continue with the valid folders? [Y/N]
```

### 4. Load Current Saga

Read the current Saga files:

- `{saga_folder}/prd.md`
- `{saga_folder}/architecture.md`

If either is missing, note it - they will be created during the commit step.

### 5. Load Selected Quest Contents

For each **selected** quest folder, attempt to read:

| File | Purpose | Required |
|------|---------|----------|
| `quest.md` | Main quest with tasks and status | Yes |
| `discovery-report.md` | Patterns, constraints, references | Optional |
| `analysis-report.md` | Approach evaluation and selection | Optional |

### 6. Extract Key Information

For each loaded quest, extract:

**From quest.md:**
- Quest title and description
- Problem statement
- Solution overview
- Implementation tasks (completed/pending)
- Acceptance criteria (met/pending)
- Technical decisions
- Files modified

**From discovery-report.md (if exists):**
- Existing patterns found
- Technical constraints
- External references
- Architecture snapshot

**From analysis-report.md (if exists):**
- Approaches evaluated
- Selected approach and rationale
- Scoring results

### 7. Present Summary

Display to user:

```
Quest Folders Selected: {selected_count}

**Selected Quests:**
{list each selected quest with status}

**Information Extracted:**
- Features: {feature_count}
- Patterns: {pattern_count}
- Architectural decisions: {decision_count}
- Technical constraints: {constraint_count}

**Current Saga Status:**
- prd.md: {exists/missing}
- architecture.md: {exists/missing}

[C] Continue to Analyze & Aggregate
[A] Add more quest folders
[R] Remove quest folders from selection
[V] View Quest Details
```

**HALT** and wait for user selection.

### 8. Handle User Selection

- IF [C]: Proceed to step 9
- IF [A]: Show unselected folders, allow adding, return to step 5
- IF [R]: Show selected folders, allow removal, return to step 7
- IF [V]: Display detailed information for selected quests, re-present menu

### 9. Proceed

When user selects **[C]**, load and execute **`steps/step-02-analyze-aggregate.md`** in full.

Pass context:
- Current Saga content (prd.md, architecture.md)
- Selected quest data
- Extracted information (features, patterns, decisions, constraints)

---

## SUCCESS METRICS

- User selected quest folders
- Selected quest files loaded successfully
- Information extracted and categorized
- Summary presented to user

## FAILURE MODES

- No quest folders selected
- All selected folders invalid
- Unreadable quest files (report but continue)

---
name: step-04-review
description: User confirms proposed Saga updates
nextStepFile: './step-05-commit.md'
---

# Step 4: Review

**Progress: Step 4 of 5** — Next: Commit

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Get explicit user approval before committing changes.

## GOAL

Present the drafted Saga updates to the user and get approval or edits before writing to disk.

## AVAILABLE STATE

From previous steps:
- PRD draft content
- Architecture draft content
- Change diff summary
- Quest attribution data

---

## SEQUENCE

### 1. Present Change Summary

Display the diff summary first:

```
Saga Update Review

**Changes from {quest_count} Quest(s):**

PRD Changes:
{diff_summary_prd}

Architecture Changes:
{diff_summary_arch}
```

### 2. Present PRD Draft

Show the full PRD draft or key sections:

```
─────────────────────────────────
PRD DRAFT
─────────────────────────────────

{prd_draft_content}

─────────────────────────────────
```

### 3. Present Architecture Draft

Show the full architecture draft or key sections:

```
─────────────────────────────────
ARCHITECTURE DRAFT
─────────────────────────────────

{architecture_draft_content}

─────────────────────────────────
```

### 4. Request Feedback

Present options:

```
Review Complete

**Options:**
[A] Approve - Write both files as shown
[E] Edit PRD - Make changes to PRD draft
[R] Edit Architecture - Make changes to Architecture draft
[B] Edit Both - Make changes to both drafts
[D] View Diff Only - Show only the changes (not full content)
[X] Cancel - Abort without saving
```

**HALT** and wait for user selection.

### 5. Handle User Selection

**IF [A]:** Proceed to step 6 (Commit)

**IF [E]:**
- Ask user what changes they want to the PRD
- Apply edits to the draft
- Re-present for review

**IF [R]:**
- Ask user what changes they want to Architecture
- Apply edits to the draft
- Re-present for review

**IF [B]:**
- Ask user what changes they want to both files
- Apply edits to both drafts
- Re-present for review

**IF [D]:**
- Show only the diff (new/changed sections)
- Re-present menu

**IF [X]:**
- Confirm cancellation
- Exit workflow without saving

### 6. Iterate Until Approved

Repeat the review cycle until user selects **[A]** (Approve).

### 7. Proceed

When user approves, present:

```
[Saga updates approved. Ready to write to disk.]

Files to update:
- {saga_folder}/prd.md
- {saga_folder}/architecture.md

[C] Continue to Commit
```

**HALT** and wait for **[C]**.

### 8. Execute

When user selects **[C]**, load and execute **`steps/step-05-commit.md`** in full.

Pass context:
- Approved PRD content
- Approved Architecture content
- Quest attribution data

---

## REVIEW GUIDELINES

### What to Check

- **Accuracy**: Do the updates correctly reflect quest outcomes?
- **Completeness**: Are all relevant features/decisions captured?
- **Clarity**: Is the content clear and well-organized?
- **Consistency**: Does it match existing Saga style?

### Common Edits

- Rewording for clarity
- Adding missing context
- Removing redundant information
- Adjusting section organization

---

## SUCCESS METRICS

- User reviewed both drafts
- All requested edits applied
- Explicit approval obtained
- Ready for commit

## FAILURE MODES

- User abandons review (offer to save draft)
- Conflicting edit requests (clarify with user)
- Missing information discovered (return to aggregate step)

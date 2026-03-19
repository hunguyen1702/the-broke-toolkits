---
name: step-05-resolve-findings
description: Handle review findings interactively, apply fixes, update quest with final status
quests_folder: '{project-root}/quests'
---

# Step 5: Resolve Findings

**Progress: Step 5 of 5** — Final Step

**Goal:** Handle adversarial review findings interactively, apply fixes, finalize quest status.

---

## AVAILABLE STATE

From previous steps:

- Quest file path
- `{baseline_commit}` - Git HEAD at workflow start
- Findings table from step-04
- `{diff_output}` for reference

---

## RESOLUTION OPTIONS

Present: "How would you like to handle these findings?"

Display:

**[W] Walk through** - Discuss each finding individually
**[F] Fix automatically** - Automatically fix issues classified as "real"
**[S] Skip** - Acknowledge and proceed to completion

### Menu Handling Logic:

- IF W: Execute WALK THROUGH section below
- IF F: Execute FIX AUTOMATICALLY section below
- IF S: Execute SKIP section below

### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed when user makes a selection

---

## WALK THROUGH [W]

For each finding in order:

1. Present the finding with context
2. Ask: **fix now / skip / discuss**
3. If fix: Apply the fix immediately
4. If skip: Note as acknowledged, continue
5. If discuss: Provide more context, re-ask
6. Move to next finding

After all findings processed, summarize what was fixed/skipped.

---

## FIX AUTOMATICALLY [F]

1. Filter findings to only those classified as "real"
2. Apply fixes for each real finding
3. Report what was fixed:

```
**Auto-fix Applied:**
- F1: {description of fix}
- F3: {description of fix}
...

Skipped (noise/uncertain): F2, F4
```

---

## SKIP [S]

1. Acknowledge all findings were reviewed
2. Note that user chose to proceed without fixes
3. Continue to completion

---

## UPDATE QUEST FILE

After resolution:

1. Load quest file
2. Add review notes section:

   ```markdown
   ## Review Notes

   ### Adversarial Review: {current_date}

   **Findings:** {count} total
   - Fixed: {fixed_count}
   - Skipped: {skipped_count}
   - Noise: {noise_count}

   **Resolution Approach:** {walk-through/auto-fix/skip}

   **Fixed Issues:**
   - F1: {description} - Fixed by {change}
   - F3: {description} - Fixed by {change}

   **Acknowledged (not fixed):**
   - F2: {description} - Reason: {reason}
   ```

3. Update quest status if needed:
   - If quest was `in-progress` and all tasks done: `completed`
   - Add `reviewed: true` to frontmatter

4. Save changes

---

## COMPLETION OUTPUT

```
**Quest Execution Complete!**

**Quest:** {quest_title}
**Status:** {final_status}

**Implementation Summary:**
- Tasks completed: {count}/{total}
- Files modified: {file_count}
- Lines changed: +{additions} / -{deletions}

**Review Summary:**
- Findings: {total_findings}
- Fixed: {fixed_count}
- Acknowledged: {skipped_count}

**Next Steps:**
{If quest complete:}
- ✓ Quest fully implemented
- Consider running [US] Update Saga with Mimir to sync project documentation
- Ready to commit changes

{If tasks remain:}
- Remaining tasks: {remaining_count}
- Run [EX] Execute Quest again to continue
- Or start a new quest with [NQ] New Quest
```

---

## WORKFLOW COMPLETE

This is the final step. The Execute Quest workflow is now complete.

User can:

- Commit changes
- Run additional tests
- Update Saga documentation with Mimir
- Start new quest or continue with remaining tasks

---

## SUCCESS METRICS

- User presented with resolution options
- Chosen approach executed correctly
- Fixes applied cleanly (if applicable)
- Quest file updated with review notes
- Completion summary provided
- User understands next steps

## FAILURE MODES

- Not presenting resolution options
- Auto-fixing "noise" or "uncertain" findings
- Not updating quest file after resolution
- No completion summary
- Leaving user unclear on next steps

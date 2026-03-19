---
name: step-05-commit
description: Write updated Saga files to disk
---

# Step 5: Commit

**Progress: Step 5 of 5** — Complete

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Only write approved content.

## GOAL

Write the approved prd.md and architecture.md to the Saga folder and finalize the synchronization.

## AVAILABLE STATE

From previous steps:
- Approved PRD content
- Approved Architecture content
- Quest attribution data
- Quest sources list

---

## SEQUENCE

### 1. Ensure Saga Folder Exists

Check that `{saga_folder}/` exists. Create if needed:

```bash
mkdir -p {saga_folder}
```

### 2. Backup Existing Files (Optional)

If files exist and user wants backups:

```bash
cp {saga_folder}/prd.md {saga_folder}/prd.md.backup
cp {saga_folder}/architecture.md {saga_folder}/architecture.md.backup
```

### 3. Write PRD

Write the approved PRD content to `{saga_folder}/prd.md`.

Add sync metadata in frontmatter:

```yaml
---
title: Product Requirements Document
project: {project_name}
last_synced: {date}
synced_from:
  - quest-001-feature-name
  - quest-002-another-feature
  ...
---
```

### 4. Write Architecture

Write the approved architecture content to `{saga_folder}/architecture.md`.

Add sync metadata in frontmatter:

```yaml
---
title: Architecture Document
project: {project_name}
last_synced: {date}
synced_from:
  - quest-001-feature-name
  - quest-002-another-feature
  ...
---
```

### 5. Generate Sync Report

Create a summary of what was synchronized:

```
Saga Synchronization Complete

**Files Updated:**
✓ {saga_folder}/prd.md
✓ {saga_folder}/architecture.md

**Sync Summary:**
- Quests processed: {quest_count}
  - Completed: {completed_count}
  - In-progress: {in_progress_count}
  - Planned: {planned_count}

- Features documented: {feature_count}
- Patterns recorded: {pattern_count}
- Decisions captured: {decision_count}

**PRD Updates:**
- New sections: {prd_new_count}
- Updated sections: {prd_updated_count}

**Architecture Updates:**
- New sections: {arch_new_count}
- Updated sections: {arch_updated_count}

**Quest Sources:**
{list of quest folders that contributed}
```

### 6. Completion Message

Tell the user:

```
─────────────────────────────────
SAGA SYNCHRONIZATION COMPLETE
─────────────────────────────────

Your Saga documentation is now up to date with all Quest information.

**Updated Files:**
- {saga_folder}/prd.md
- {saga_folder}/architecture.md

**Next Steps:**
- Review the updated files in your editor
- Commit changes to version control if desired
- Run [US] Update Saga again after completing more quests

**Tips:**
- Keep quests organized in {quests_folder}/
- Run this workflow periodically to keep Saga current
- Add manual notes to Saga files - they'll be preserved

─────────────────────────────────
```

Workflow complete.

---

## POST-COMMIT OPTIONS

After completion, user may:

- Review files in editor
- Commit to git
- Run Thor's [EX] Execute Quest to continue work
- Run Thor's [NQ] New Quest to plan new features

---

## SUCCESS METRICS

- Saga folder exists
- Both files written successfully
- Sync metadata included
- Completion report provided
- User informed of next steps

## FAILURE MODES

- Write permission denied (report error)
- Disk full (report error)
- Invalid content (should not happen - caught in review)

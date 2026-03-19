---
description: "Splits large markdown documents into smaller, organized files based on level 2 (default) sections"
---

# Shard Document

Split a large markdown document into smaller, organized files based on level 2 headings using `@kayvan/markdown-tree-parser`.

**MANDATORY: Execute ALL steps below IN EXACT ORDER. Do NOT skip steps or change the sequence. HALT immediately when halt conditions are met.**

## Step 1: Get Source Document

1. If no source document path was provided as argument `$ARGUMENTS`, ask the user for the source document path.
2. Verify the file exists and is accessible.
3. Verify the file is markdown format (`.md` extension).
4. **HALT** with an error message if the file is not found or is not markdown.

## Step 2: Get Destination Folder

1. Determine the default destination: same location as source file, folder named after the source file without the `.md` extension.
   - Example: `/path/to/architecture.md` → `/path/to/architecture/`
2. Ask the user for the destination folder path: `[y] to confirm use of default: [suggested-path], else enter a new path`
3. If the user accepts the default, use the suggested destination path. If the user provides a custom path, use that instead.
4. Verify the destination folder exists or can be created, and check write permissions.
5. **HALT** with an error message if permission is denied.

## Step 3: Execute Sharding

1. Inform the user that sharding is beginning.
2. Execute: `npx @kayvan/markdown-tree-parser explode [source-document] [destination-folder]`
3. Capture command output and any errors.
4. **HALT** and display the error to the user if the command fails.

## Step 4: Verify Output

1. Check that the destination folder contains sharded files.
2. Verify `index.md` was created in the destination folder.
3. Count the number of files created.
4. **HALT** with an error message if no files were created.

## Step 5: Report Completion

Display a completion report including:
- Source document path and name
- Destination folder path
- Number of section files created
- Confirmation that `index.md` was created
- Any tool output or warnings

## Step 6: Handle Original Document

> **Important:** Keeping both the original and sharded versions defeats the purpose of sharding and can cause confusion.

Ask the user:

```
What would you like to do with the original document `[source-document-name]`?

Options:
[d] Delete - Remove the original (recommended - shards can always be recombined)
[m] Move to archive - Move original to a backup/archive location
[k] Keep - Leave original in place (NOT recommended - defeats sharding purpose)

Your choice (d/m/k):
```

**If delete (d):**
- Delete the original source document file.
- Confirm: `Original document deleted: [source-document-path]`

**If move (m):**
- Default archive location: same directory as source, in an `archive` subfolder (e.g., `/path/to/archive/architecture.md`).
- Ask: `Archive location ([y] to use default: [default-archive-path], or provide custom path):`
- Create archive directory if needed. Move the original document.
- Confirm: `Original document moved to: [archive-path]`

**If keep (k):**
- Display warning:
  ```
  WARNING: Keeping both original and sharded versions is NOT recommended.
  This creates confusion because:
  - Updates to one won't reflect in the other
  - You'll have duplicate content taking up space
  Consider deleting or archiving the original document.
  ```
- Confirm: `Original document kept at: [source-document-path]`

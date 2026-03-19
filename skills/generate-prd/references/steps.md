# PRD Generation Steps

Follow these steps sequentially. Complete each step before moving to the next.

---

## Step 1: Check for Existing PRD

Check if `docs/prd.md` already exists in the project root.

**IF it exists:**

Present options to the user:

"I found an existing PRD at `docs/prd.md`.

What would you like to do?
- **Update** — Keep existing content, add or modify specific sections
- **Regenerate** — Start fresh and create a new PRD (will overwrite existing)
- **View** — Show current PRD contents first
- **Cancel** — Exit, keep existing PRD unchanged"

- If Update: Read the existing PRD, ask user what sections need changes, apply edits, then go to Step 6 (Review Cycle)
- If Regenerate: Continue to Step 2
- If View: Display current PRD content, then re-present options
- If Cancel: End workflow

**IF it does not exist:**

Ask the user where they'd like to save the PRD. Default to `docs/prd.md` — confirm before proceeding.

Continue to Step 2.

---

## Step 2: Gather Context

### 2a. Read README

- Check if `README.md` or `README` exists in project root
- If exists: Read and extract business-level information:
  - Project name and description
  - Stated goals or purpose
  - Target users or audience
- If not exists: Note this — we will need more user input
- Focus on business/product information, skip technical setup instructions

### 2b. Ask Initial Questions

Ask the user:

1. What is this project? (product, app, service, tool, etc.)
2. What problem does it solve or what value does it provide?
3. Who is the target user?

### 2c. Summarize Initial Context

Summarize what you learned from README + user input. Focus on:
- Business purpose
- User value proposition
- Target audience

Confirm with the user that the summary is accurate before proceeding.

---

## Step 3: Detect Project Type

### 3a. Check for Existing Codebase

- List root directory
- Look for source code files (*.js, *.ts, *.py, *.go, *.rs, etc.)
- Look for package/dependency files (package.json, requirements.txt, Cargo.toml, go.mod, etc.)

**Classification:**
- **BROWNFIELD:** Source code files AND/OR dependency files exist
- **GREENFIELD:** No source code, no dependency files (empty or docs-only project)

### 3b. Explain Workflow Path

- **Brownfield:** "Since this is an existing project, I'll scan the codebase to identify user-facing features for the PRD."
- **Greenfield:** "Since this is a new project, we'll skip the codebase scan and build the PRD from your requirements."

Note: Tech stack detection is used internally to guide codebase scanning. Do NOT include programming languages, frameworks, or technical details in the PRD output.

---

## Step 4: Scan Codebase (Brownfield Only)

**Skip this step for greenfield projects — go directly to Step 5.**

The goal of this step is to understand what the application does from a USER perspective. Scan code to identify features, not to document implementation.

### 4a. Analyze Project Structure

- List root directory and key folders
- Identify main source directories (src/, lib/, app/, etc.)
- Note the general shape of the project

### 4b. Read Key Files

Read the following (as available) to understand what the application does:

**Package/Dependency Files:**
- package.json, requirements.txt, Cargo.toml, go.mod, etc.
- Extract: project metadata, description

**Entry Points & Routes:**
- Main entry file, router files
- Identify user-facing capabilities and workflows

**Core Modules (1-2 representative files):**
- Skim structure to understand what users can do
- Identify key user-facing features

### 4c. Identify User-Facing Features

From the code analysis, extract user-facing functionality only:
- **Core Features:** What can users do with this application?
- **User Workflows:** What are the main tasks or journeys?
- **User Interactions:** How do users interact with the system? (UI, CLI, API consumers, etc.)
- **Capabilities:** What value does the application provide to its users?

Do NOT extract or include: API endpoint paths, data model schemas, database details, internal architecture, dependency lists, or implementation patterns.

### 4d. Present Scan Results

Present findings to the user:

"**Codebase Scan Complete**

**Core Features Identified:**
1. [User-facing feature 1]
2. [User-facing feature 2]
3. [User-facing feature 3]

**User Workflows:**
- [How users interact with the system]

Does this capture the main functionality? Any corrections or additions?"

Incorporate any user feedback before proceeding.

---

## Step 5: Generate PRD

### 5a. Review Template

Read `references/prd-template.md` to understand the target structure:
- Section 1: Title
- Section 2: Project Overview
- Section 3: Target User
- Section 4: Scope (In/Out)
- Section 5: User Stories
- Section 6: Requirements & Features
- Section 7: Success Criteria
- Section 8: Constraints & Assumptions

### 5b. Map Information to Sections

For each section, synthesize gathered information:

**Section 2: Project Overview**
- What: System type and core problem it solves
- How: Key solution/mechanism (from user perspective, NOT technical)
- Why: Primary goal and value proposition

**Section 3: Target User**
- Who: Primary user roles
- What they do: Main objectives and interactions

**Section 4: Scope**
- What is included in this project
- What is explicitly excluded

**Section 5: User Stories**
- Key user stories in "As a [role], I want [action] so that [benefit]" format
- Cover the main workflows and use cases

**Section 6: Requirements & Features**
- Group features by user-facing functionality
- Describe each feature from user perspective
- NO implementation details

**Section 7: Success Criteria**
- Measurable outcomes that indicate success
- Business metrics, user satisfaction indicators

**Section 8: Constraints & Assumptions**
- Known limitations or restrictions
- Assumptions made during planning

Scale the depth of each section to the project's complexity — a small CLI tool doesn't need the same level of detail as a multi-team SaaS platform.

### 5c. Write PRD Draft

Create the PRD file at the confirmed output path with consolidated content:
- Replace template placeholders with actual content
- Maintain consistent tone and language
- Keep focus on business/user perspective

### 5d. Present Draft Summary

After writing, present a summary of what was generated:
- Title
- Project Overview (brief)
- Target Users identified
- Number of features across how many groups

---

## Step 6: Review Cycle

### 6a. Present Full PRD

Display the complete PRD content to the user.

### 6b. Ask for Feedback

"Please review the PRD above.

Options:
- **Approve** — Content is good, proceed to finalize
- **Edit** — I have changes to request
- **Regenerate** — Start over with a different approach"

### 6c. Handle Response

**If Approve:** Proceed to Step 7.

**If Edit:**
- Ask: "What would you like to change?"
- Apply the requested edits
- Show summary of changes
- Return to 6a — present updated PRD again

**If Regenerate:**
- Ask: "What should be different this time?"
- Regenerate content with new direction
- Return to 6a — present regenerated PRD

---

## Step 7: Finalize

### 7a. Confirm Completion

Display completion summary:

"**PRD Complete!**

**Document:** `[output path]`
**Project Type:** [greenfield/brownfield]

**What's in the PRD:**
- Project Overview
- Target Users
- Scope
- User Stories
- Requirements & Features
- Success Criteria
- Constraints & Assumptions

**Next Steps:**
- Use this PRD to guide development
- Reference it when making architectural decisions
- Run `generate-architecture` to create an Architecture Document based on this PRD
- Update it as requirements evolve"

### 7b. End Workflow

Workflow is complete. No further action needed.

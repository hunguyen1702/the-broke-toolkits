# Architecture Generation Steps

Follow these steps sequentially. Complete each step before moving to the next.

**Critical Principle — HIGH-LEVEL ONLY applies throughout:**
- No file paths, no code snippets in the architecture document
- Use search keywords, pattern names, responsibility descriptions
- The document is a "thinking map", not a "code index"

---

## Step 1: Detect PRD

This is a **gate step** — the workflow cannot proceed without a valid PRD.

### 1a. Search for PRD

Look for a PRD document in the project. Check these locations in order:

1. `docs/prd.md`
2. `docs/PRD.md`
3. `prd.md` / `PRD.md` in project root
4. Any file matching `*prd*` or `*product-requirement*` in `docs/` or project root

Use Glob to search: `{docs/,}*{prd,PRD,product-requirement}*{.md,.txt}`

**IF found:**
- Validate it has PRD-like structure (sections for overview, users, features)
- Display: "Found PRD at `<path>`"
- Show brief info: project name, key details
- Ask user to confirm using this PRD

**IF not found:**
- Display: "No PRD document found."
- Suggest: "Please run `generate-prd` first to create a PRD, then come back to generate the architecture document."
- **END WORKFLOW**

### 1b. Confirm PRD Selection

Once valid PRD is found and confirmed, proceed to Step 2.

---

## Step 2: Create Draft

### 2a. Read Template

Read `references/architecture-template.md` to understand the document structure:
- Section 1: High-Level Stack
- Section 2: Logic & Feature Mapping
- Section 3: Data Model Strategy
- Section 4: API Interface Strategy
- Section 5: Coding Patterns & Search Strategy
- Section 6: Testing Strategy & Tech Stack

### 2b. Create Draft File

Ensure `docs/` directory exists (create it if missing). Then create `docs/architecture.md` using the template structure with placeholder content.

Inform the user:

"Architecture Document draft created at `docs/architecture.md`.

**Reminder — HIGH-LEVEL ONLY:**
- Document will contain search keywords, NOT file paths
- This is a 'thinking map' for agents, not a 'code index'

Next: Scanning project and filling content into each section..."

Proceed directly to Step 3.

---

## Step 3: Scan & Fill

### 3a. Read PRD for Context

Read the PRD to extract project name, key features, and technical hints.

### 3b. Determine Search Strategy

Based on PRD and project structure, identify:
- Programming language (check file extensions)
- Package manager (package.json, Gemfile, requirements.txt, go.mod, Cargo.toml, etc.)
- Framework hints from dependencies

### 3c. Launch 6 Parallel Sub-Agents

Read `references/sub-agent-missions.md` for detailed instructions.

Use the Agent tool to launch ALL 6 sub-agents simultaneously. Each sub-agent:
1. Scans the codebase for its designated section
2. Follows the HIGH-LEVEL ONLY principle
3. Returns structured content in the specified format

**If sub-agents are unavailable:** Perform sections sequentially in the main thread.

The 6 agents:

| Agent | Section | Focus |
|-------|---------|-------|
| 1 | High-Level Stack | Backend, DB, Async, Infrastructure |
| 2 | Logic & Feature Mapping | PRD features to search keywords |
| 3 | Data Model Strategy | Domain entities |
| 4 | API Interface Strategy | API types |
| 5 | Coding Patterns | Patterns and search keywords |
| 6 | Testing Strategy | Test stack |

### 3d. Aggregate and Update Document

After all sub-agents complete:
1. Collect all section content
2. Update `docs/architecture.md` with filled sections
3. Verify no file paths or code snippets leaked through
4. Present a summary of what each section contains:
   - Section 1 (Stack): [summary]
   - Section 2 (Features): [X features mapped]
   - Section 3 (Data): [X entities]
   - Section 4 (APIs): [X API groups]
   - Section 5 (Patterns): [X patterns]
   - Section 6 (Testing): [summary]

---

## Step 4: Review

### 4a. Present Document and Gather Feedback

Display a summary of each section from `docs/architecture.md`.
Point user to the full document: `docs/architecture.md`

Ask the user:

"Please review the architecture document.

Options:
- **Approve** — Content is good, proceed to finalize
- **Edit** — I have changes or additions
- Provide specific feedback about any section"

### 4b. Handle Feedback Loop

**If Approve:** Proceed to Step 5.

**If Edit or feedback provided:**
1. Understand the requested change
2. Make the update (maintaining HIGH-LEVEL principle — no file paths, no code)
3. Confirm the change
4. Return to 4a — present updated summary

Continue iterating until user approves.

---

## Step 5: Finalize

### 5a. Display Completion Summary

"**Architecture Document Complete!**

**Document:** `docs/architecture.md`

**Sections:**
- 1. High-Level Stack
- 2. Logic & Feature Mapping
- 3. Data Model Strategy
- 4. API Interface Strategy
- 5. Coding Patterns & Search Strategy
- 6. Testing Strategy & Tech Stack

**How to use this document:**
1. **For AI Agents:** Provide this file when agents need codebase context
2. **Code Search:** Use the search keywords in the document to locate code
3. **Onboarding:** Helps new team members understand high-level architecture
4. **Planning:** Reference when planning new features

**Important:**
- This document contains **search keywords**, not file paths
- Agents use keywords to **search** the codebase, not copy paths
- Update this document when the architecture changes significantly"

### 5b. End Workflow

Workflow is complete. No further action needed.

---
name: step-04-scan-codebase
description: Scan codebase to gather PRD-relevant information (brownfield only)
nextStepFile: './step-05-consolidate-draft.md'
---

# Step 4: Scan Codebase

**Progress: Step 4 of 7** — Next: Generate PRD Content

## STEP GOAL:

Scan the existing codebase to gather information needed for PRD generation. This step is for BROWNFIELD projects only.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read complete step file before action
- 🔄 CRITICAL: When loading next with 'C', read entire file
- 📋 YOU ARE A FACILITATOR, not content generator
- ✅ Speak output in `{communication_language}`

### Step-Specific Rules:

- 🎯 Focus on information gathering, not PRD writing
- 🚫 FORBIDDEN to modify any project files
- 💬 Approach: Systematic code analysis

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 📖 Use tools to read and analyze codebase
- 💾 Compile findings for PRD generation

## CONTEXT BOUNDARIES:

- Available context: Project directory, README info, tech stack
- Focus: Extract PRD-relevant information
- Limits: Read-only analysis

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. List Project Structure

- List root directory and key folders
- Identify main source directories (src/, lib/, app/, etc.)
- Note test directories, config locations

### 2. Read Key Files

Read the following (as available):

**Package/Dependency Files:**
- package.json, requirements.txt, Cargo.toml, go.mod, etc.
- Extract: dependencies, scripts, project metadata

**Configuration Files:**
- Config files relevant to the framework
- Environment sample files (.env.example)

**Entry Points:**
- Main entry file (index.js, main.py, main.go, etc.)
- Router files (routes.*, app.*)

**Core Modules (1-2 representative files):**
- Skim structure to understand patterns
- Identify key features/capabilities

### 3. Identify Features & Capabilities

From the code analysis, extract:

- **Core Features:** What the application does
- **API Endpoints:** If web app, list main endpoints/routes
- **Data Models:** Key entities/schemas
- **External Integrations:** Third-party services, APIs
- **User Interactions:** How users interact with the system

### 4. Summarize Scan Results

Present findings to user:

```
**Codebase Scan Complete**

**Project Structure:**
- [Summary of directory structure]

**Core Features Identified:**
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

**Technical Details:**
- Dependencies: [key dependencies]
- Patterns: [observed patterns]
- Integrations: [external services]

Does this capture the main functionality? Any corrections or additions?
```

### 5. Incorporate User Feedback

If user provides corrections or additions, note them for PRD generation.

### 6. Present MENU OPTIONS

Display:

```
[Codebase scan complete. Ready to generate PRD content.]

[C] Continue to Generate PRD
[X] Cancel workflow
```

#### Menu Handling Logic:

- IF C: Update stepsCompleted, load {nextStepFile}
- IF X: "Workflow cancelled. You can resume later." - Exit workflow
- IF Any other: Help user respond, then redisplay menu

**HALT** and wait for user input.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Project structure analyzed
- Key files read
- Features/capabilities identified
- User confirmed findings
- Information ready for PRD generation

### ❌ SYSTEM FAILURE:

- Skipping key file analysis
- Not asking user for confirmation
- Modifying project files
- Writing PRD content here

**Master Rule:** Gather information only. PRD writing happens in next step.

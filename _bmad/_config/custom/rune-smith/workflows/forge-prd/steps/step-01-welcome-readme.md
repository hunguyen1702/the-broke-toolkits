---
name: step-01-welcome-readme
description: Check for existing PRD, welcome user, and read README for basic project info
nextStepFile: './step-02-detect-project.md'
outputFile: '{saga_folder}/prd.md'
updateSagaWorkflow: '{project-root}/_bmad/rune-smith/workflows/update-saga/workflow.md'
---

# Step 1: Welcome & Read README

**Progress: Step 1 of 7** — Next: Detect Project Type

## STEP GOAL:

Check if a PRD already exists for this project, then gather initial project understanding by welcoming the user and reading the README file (if exists).

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read complete step file before action
- 🔄 CRITICAL: When loading next with 'C', read entire file
- 📋 YOU ARE A FACILITATOR, not content generator
- ✅ Speak output in `{communication_language}`
- 🚫 CRITICAL: NO code or technical information in the PRD

### Step-Specific Rules:

- 🎯 Focus on checking existing PRD and gathering initial context
- 🚫 FORBIDDEN to make assumptions about project type yet
- 💬 Approach: Collaborative discovery

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 📖 Check for existing PRD first
- 📖 Read README if it exists to gather evidence
- 💾 Store gathered info for next step

## CONTEXT BOUNDARIES:

- Available context: Project root directory, output folder
- Focus: Initial understanding (business context, NOT technical)
- Limits: Do not determine brownfield/greenfield yet (that's step 2)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. Check for Existing PRD

- Check if {outputFile} already exists in the output folder
- Read frontmatter to check `status` field if file exists

**IF PRD EXISTS:**

Proceed to section 2 (Present Existing PRD Options)

**IF PRD DOES NOT EXIST:**

Skip to section 3 (Greet User)

### 2. Present Existing PRD Options

**IF existing PRD found:**

"**I found an existing PRD for this project:**

📄 **File:** {outputFile}
📊 **Status:** [status from frontmatter]

**What would you like to do?**

**[R]egenerate** - Start fresh and create a new PRD (will overwrite existing)
**[U]pdate** - Use update-saga workflow to update the existing PRD content
**[V]iew** - Show current PRD contents first
**[X] Cancel** - Exit workflow"

#### Menu Handling Logic:

- IF R: Continue to section 3 (Greet User) to start fresh
- IF U: "Redirecting to update-saga workflow..." - Load and execute {updateSagaWorkflow}
- IF V: Display current PRD content, then redisplay this menu
- IF X: "Workflow cancelled. Your existing PRD is unchanged." - Exit workflow
- IF Any other: Help user respond, then redisplay menu

**HALT** and wait for user input.

### 3. Greet User

Greet `{user_name}` and explain the workflow purpose:

"Welcome! I'm Mimir, and I'll help you forge a PRD for your project.

**Important:** This PRD will focus on:
- What your project does (business goals)
- Who it serves (target users)
- What features it provides (from user perspective)

**NOT included:** Code, technical architecture, or implementation details.

Let's start by understanding what we're working with."

### 4. Read README (if exists)

- Check if README.md or README exists in project root
- If exists: Read and extract key information:
  - Project name and description
  - Any stated goals or purpose
  - Target users or audience
- If not exists: Note this - we'll need more user input

**Note:** Focus on business/product information, skip technical setup instructions.

### 5. Ask Initial Questions

Ask user to describe:

- What is this project? (product, app, service, tool, etc.)
- What problem does it solve or what value does it provide?
- Who is the target user?

### 6. Summarize Initial Context

Summarize back what you learned from README + user input. This becomes evidence for the next step.

**Focus summary on:**
- Business purpose
- User value proposition
- Target audience

### 7. Present MENU OPTIONS

Display:

```
[Initial context captured. Ready to detect project type.]

[C] Continue to Project Detection
[X] Cancel workflow
```

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF X: "Workflow cancelled. You can restart anytime." - Exit workflow
- IF Any other: Help user respond, then redisplay menu

**HALT** and wait for user input.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Checked for existing PRD first
- Offered appropriate options if PRD exists
- README read (if exists) - business info only
- User provided project description
- Initial context summarized (no technical details)
- Evidence gathered for step 2

### ❌ SYSTEM FAILURE:

- Not checking for existing PRD
- Skipping README check
- Including technical/code information
- Not asking user for description
- Making brownfield/greenfield determination here

**Master Rule:** This step checks for existing PRD and gathers business context evidence. No technical details. Do not jump to conclusions about project type.

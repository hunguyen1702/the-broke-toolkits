---
name: step-02-detect-project
description: Determine greenfield/brownfield and identify tech stack
nextStepFile: './step-03-create-placeholder.md'
---

# Step 2: Detect Project Type

**Progress: Step 2 of 7** — Next: Create PRD Placeholder

## STEP GOAL:

Determine if project is greenfield (new) or brownfield (existing codebase) and identify the tech stack. This determines the workflow branching.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read complete step file before action
- 🔄 CRITICAL: When loading next with 'C', read entire file
- 📋 YOU ARE A FACILITATOR, not content generator
- ✅ Speak output in `{communication_language}`

### Step-Specific Rules:

- 🎯 Focus on project type detection and tech stack identification
- 🚫 FORBIDDEN to skip detection logic
- 💬 Approach: Evidence-based reasoning

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 📖 Check for code files to determine project type
- 🔀 Branch logic based on detection result

## CONTEXT BOUNDARIES:

- Available context: README info from step 1, project directory
- Focus: Classification and tech stack
- Limits: Do not create PRD yet

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. Detect Project Type

**Check for existing codebase:**

- List root directory
- Look for source code files (*.js,*.ts,*.py,*.go,*.rs, etc.)
- Look for package/dependency files (package.json, requirements.txt, Cargo.toml, go.mod, etc.)

**Classification Logic:**

- **BROWNFIELD:** Source code files exist AND/OR dependency files exist
- **GREENFIELD:** No source code, no dependency files (empty or docs-only project)

### 2. Identify Tech Stack (Brownfield) OR Gather Requirements (Greenfield)

**IF BROWNFIELD:**

Identify from existing files:
- **Language:** Primary programming language(s)
- **Framework:** Web framework, libraries (React, Express, Django, etc.)
- **Package Manager:** npm, yarn, pip, cargo, etc.

Present findings:

```
**Project Type: BROWNFIELD (Existing Codebase)**

Detected:
- Language: [detected]
- Framework: [detected or N/A]
- Package Manager: [detected]

Is this correct? [Y/N]
```

**IF GREENFIELD:**

Ask user for preferences:

```
**Project Type: GREENFIELD (New Project)**

Since this is a new project, please tell me:

1. What programming language will you use?
2. Any specific framework? (or N/A)
3. What package manager? (or default for language)
```

### 3. Store Tech Stack Info

Store the following for PRD frontmatter:
- `language`
- `framework`
- `package_manager`
- `project_type` (greenfield/brownfield)

### 4. Explain Workflow Path

**IF BROWNFIELD:**

"Since this is an existing project, I'll scan the codebase to gather information for the PRD."

**IF GREENFIELD:**

"Since this is a new project, we'll skip the codebase scan and build the PRD from your requirements."

### 5. Present MENU OPTIONS

Display:

```
[Project type detected: {project_type}]
[Tech stack: {language} / {framework} / {package_manager}]

[C] Continue to Create PRD Placeholder
[X] Cancel workflow
```

#### Menu Handling Logic:

- IF C (Brownfield): Store `workflow_mode: brownfield`, load {nextStepFile}
- IF C (Greenfield): Store `workflow_mode: greenfield`, load {nextStepFile}
- IF X: "Workflow cancelled. You can restart anytime." - Exit workflow
- IF Any other: Help user respond, then redisplay menu

**HALT** and wait for user input.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Project type correctly identified
- Tech stack captured (detected or user-provided)
- Workflow path determined
- Variables stored for PRD

### ❌ SYSTEM FAILURE:

- Wrong classification (greenfield vs brownfield)
- Missing tech stack info
- Not explaining workflow path difference

**Master Rule:** Correct classification is critical. Brownfield scans code; greenfield uses user input.

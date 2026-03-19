---
name: step-03-create-placeholder
description: Create draft PRD placeholder from template
nextStepFile: './step-04-scan-codebase.md'
skipToStepFile: './step-05-consolidate-draft.md'
prdTemplate: '../templates/prd-template.md'
outputFile: '{saga_folder}/prd.md'
---

# Step 3: Create PRD Placeholder

**Progress: Step 3 of 7** — Next: Scan Codebase (or Skip for Greenfield)

## STEP GOAL:

Create a draft PRD file using the template, populated with tech stack info from step 2. This becomes the working document.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read complete step file before action
- 🔄 CRITICAL: When loading next with 'C', read entire file
- 📋 YOU ARE A FACILITATOR, not content generator
- ✅ Speak output in `{communication_language}`

### Step-Specific Rules:

- 🎯 Focus on creating placeholder PRD only
- 🚫 FORBIDDEN to fill in content sections yet
- 💬 Approach: Template instantiation

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Create PRD file from template
- 📖 Populate only frontmatter and title

## CONTEXT BOUNDARIES:

- Available context: Tech stack from step 2, project name
- Focus: File creation only
- Limits: Do not generate content yet

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. Read Template

Load and read {prdTemplate} to understand the structure.

### 2. Create PRD File

Create {outputFile} with:

**Frontmatter (populated):**
```yaml
---
status: draft
language: '{language}'
framework: '{framework}'
package_manager: '{package_manager}'
project_type: '{project_type}'
stepsCompleted: ['step-01', 'step-02', 'step-03']
---
```

**Title (populated):**
```markdown
# PRD: {project_name}

## 1. Title

{project_name}
```

**Remaining sections:** Keep as template placeholders (will be filled in step 5).

### 3. Confirm Creation

Tell user:

```
**PRD placeholder created at:** {outputFile}

Status: draft
Tech Stack: {language} / {framework} / {package_manager}

The content sections will be filled after we gather more information.
```

### 4. Determine Next Step

**IF workflow_mode == brownfield:**
- Next step: Scan codebase to gather PRD information

**IF workflow_mode == greenfield:**
- Skip scan step, go directly to PRD generation

### 5. Present MENU OPTIONS

**IF BROWNFIELD:**

Display:

```
[PRD placeholder ready. Next: Scan codebase for requirements.]

[C] Continue to Scan Codebase
[X] Cancel workflow
```

**IF GREENFIELD:**

Display:

```
[PRD placeholder ready. Next: Generate PRD content from your requirements.]

[C] Continue to Generate PRD (skipping scan)
[X] Cancel workflow
```

#### Menu Handling Logic:

- IF C (Brownfield): Load, read entire file, then execute {nextStepFile}
- IF C (Greenfield): Load, read entire file, then execute {skipToStepFile}
- IF X: "Workflow cancelled. PRD placeholder saved at {outputFile}." - Exit workflow
- IF Any other: Help user respond, then redisplay menu

**HALT** and wait for user input.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD file created at correct location
- Frontmatter populated with tech stack
- Template structure preserved
- Correct routing based on project type

### ❌ SYSTEM FAILURE:

- Filling in content sections prematurely
- Wrong routing (brownfield should scan, greenfield should skip)
- Missing frontmatter fields

**Master Rule:** Create placeholder only. Content generation happens in step 5.

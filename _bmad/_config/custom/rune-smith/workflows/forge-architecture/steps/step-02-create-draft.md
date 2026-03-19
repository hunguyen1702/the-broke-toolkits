---
name: 'step-02-create-draft'
description: 'Create architecture.md draft file with template structure'

nextStepFile: './step-03-scan-and-fill.md'
templateFile: '../templates/architecture-template.md'
outputFile: '{saga_folder}/architecture.md'
---

# Step 2: Create Draft

## STEP GOAL:

To create the `architecture.md` draft file using the template structure, with status set to `draft`. This step auto-proceeds to scanning after creation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are **Mimir** (God of Wisdom) - architecture analyst
- ✅ We engage in collaborative dialogue, not command-response
- ✅ This step is mostly automated - minimal user interaction needed
- ✅ HIGH-LEVEL ONLY principle applies to all architecture content

### Step-Specific Rules:

- 🎯 Focus ONLY on creating the draft file
- 🚫 FORBIDDEN to fill content yet - that's step 3
- 🚫 FORBIDDEN to scan codebase yet
- 💬 Approach: Create file, confirm, auto-proceed

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Create architecture.md from template
- 📖 Update frontmatter with metadata
- ➡️ Auto-proceed to step 3 after creation

## CONTEXT BOUNDARIES:

- Available context: Validated PRD path from step 1
- Focus: File creation only
- Limits: Do not fill any section content
- Dependencies: Valid PRD confirmed in step 1

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. Announce Draft Creation

Display:
"**Đang tạo Architecture Document draft...**

📄 Template: `architecture-template.md`
📁 Output: `{saga_folder}/architecture.md`

**Lưu ý quan trọng - HIGH-LEVEL ONLY:**
- Document sẽ chứa search keywords, KHÔNG phải file paths
- Đây là 'thinking map' cho agents, không phải 'code index'"

### 2. Load Template

Read {templateFile} to get the document structure.

### 3. Create Draft File

Create {outputFile} with:

**Frontmatter:**
```yaml
---
status: draft
stepsCompleted: ['step-01-detect-prd', 'step-02-create-draft']
lastStep: 'step-02-create-draft'
created_date: '[current date]'
completed_date: ''
prd_source: '[PRD path from step 1]'
user_name: '{user_name}'
---
```

**Content:** Copy template structure with placeholder content.

### 4. Confirm Creation and Request Approval

Display:
"✅ **Draft đã tạo thành công!**

📄 File: `{saga_folder}/architecture.md`
📊 Status: `draft`
📝 Sections: 6 (all empty, ready to fill)

**Tiếp theo:** Scan project và fill content vào các sections...

### 5. Auto-Proceed to Scan

Display: "**Đang chuyển sang bước Scan & Fill...**"

#### Menu Handling Logic:

- After file creation confirmed, immediately load, read entire file, then execute {nextStepFile}

#### EXECUTION RULES:

- This is an AUTO-PROCEED step with no user menu
- Proceed directly to step 3 after draft creation
- No halt required - user already confirmed in step 1

## CRITICAL STEP COMPLETION NOTE

This is an **auto-proceed** step. Once the draft file is created successfully, immediately load `./step-03-scan-and-fill.md` to begin scanning the codebase.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- architecture.md created at {saga_folder}
- Frontmatter populated with metadata
- Template structure preserved
- Status set to `draft`
- stepsCompleted updated
- Auto-proceeded to step 3

### ❌ SYSTEM FAILURE:

- Filling content before step 3
- Not updating frontmatter
- Waiting for user input (this is auto-proceed)
- Creating file in wrong location

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

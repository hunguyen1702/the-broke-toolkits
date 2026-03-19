---
name: 'step-03-scan-and-fill'
description: 'Scan codebase with 6 parallel sub-agents and fill architecture sections'

nextStepFile: './step-04-review.md'
outputFile: '{saga_folder}/architecture.md'
prdFile: '{saga_folder}/prd.md'
subAgentMissions: './data/sub-agent-missions.md'
---

# Step 3: Scan & Fill

## STEP GOAL:

To analyze the codebase using **6 parallel sub-agents**, each responsible for filling one section of the architecture document.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are **Mimir** (God of Wisdom) - architecture analyst
- ✅ You orchestrate 6 sub-agents to work in parallel
- ✅ Each sub-agent focuses on ONE section only

### Step-Specific Rules:

- 🎯 Use 6 PARALLEL sub-agents for scanning
- 🚨 **DO NOT BE LAZY** - Thoroughly analyze codebase, this is critical for architecture quality
- 🔍 HIGH-LEVEL ONLY: Search keywords, pattern names - NO code snippets, NO file paths
- 🚫 FORBIDDEN to include specific file paths in output
- 🚫 FORBIDDEN to include code snippets in output
- 💬 Approach: Get approval → Launch sub-agents → Aggregate results → Update document
- ⚙️ TOOL/SUBPROCESS FALLBACK: If sub-agents unavailable, perform sections sequentially in main thread

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- ⚠️ **CRITICAL:** Launch ALL 6 sub-agents SIMULTANEOUSLY - do NOT wait for one to complete
- 💾 Each sub-agent updates its section in {outputFile}
- 📖 Update stepsCompleted when all sections filled

## CONTEXT BOUNDARIES:

- Available context: PRD from step 1, draft from step 2
- Focus: Codebase analysis and section filling
- Limits: HIGH-LEVEL ONLY - no code, no paths
- Dependencies: architecture.md draft exists

## CRITICAL PRINCIPLE: HIGH-LEVEL ONLY

⚠️ **READ THIS BEFORE SCANNING** ⚠️

| ❌ FORBIDDEN | ✅ REQUIRED |
|--------------|-------------|
| `src/services/auth_service.rb` | `*Service`, `auth`, `authenticate` |
| Code snippets | Pattern names and purposes |
| Implementation details | Search keywords for agents |

**Why?** Agents use keywords to SEARCH the codebase. They don't copy-paste paths.

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. Read PRD for Context

Load {prdFile} to extract project name, key features, and technical hints.

### 2. Determine Search Strategy

Based on PRD and project structure, infer:
- Programming language (check file extensions)
- Package manager (package.json, Gemfile, requirements.txt, etc.)
- Framework hints from dependencies

### 3. Request User Approval

Display:
"**🔍 Sẵn sàng Scan & Fill**

Tôi sẽ deploy **6 sub-agents** để scan project song song:

| Agent | Section | Focus |
|-------|---------|-------|
| 🏗️ 1 | High-Level Stack | Backend, DB, Async, Infra |
| 🗺️ 2 | Logic & Feature Mapping | PRD → Keywords |
| 📊 3 | Data Model Strategy | Domain entities |
| 🔌 4 | API Interface Strategy | API types |
| ⚙️ 5 | Coding Patterns | Patterns & keywords |
| 🧪 6 | Testing Strategy | Test stack |

**Bắt đầu scan?** [Y] Yes / [N] Cancel"

**Wait for user approval before proceeding.**

### 4. Launch 6 Parallel Sub-Agents

**IF user approves (Y):**

Load {subAgentMissions} for detailed instructions.

Launch ALL 6 sub-agents simultaneously. Each sub-agent:
1. Scans codebase for its designated section
2. Follows HIGH-LEVEL ONLY principle
3. Returns structured content (see {subAgentMissions} for formats)

**IF sub-agents unavailable:** Perform sections sequentially in main thread.

### 5. Aggregate and Update Document

After all sub-agents complete:
1. Collect all section content
2. Update {outputFile} with filled sections
3. Update frontmatter: Add 'step-03-scan-and-fill' to stepsCompleted

### 6. Display Summary

Display:
"**✅ Scan & Fill hoàn tất!**

**Kết quả:**
- 📋 Section 1 (Stack): [summary]
- 🗺️ Section 2 (Features): [X features mapped]
- 📊 Section 3 (Data): [X entities]
- 🔌 Section 4 (APIs): [X API groups]
- ⚙️ Section 5 (Patterns): [X patterns]
- 🧪 Section 6 (Testing): [summary]

**Lưu ý:** Tất cả content đều ở mức HIGH-LEVEL (keywords, patterns)."

### 7. Present MENU OPTIONS

Display: "**Select:** [C] Continue to Review"

#### Menu Handling Logic:

- IF C: Update {outputFile} frontmatter, then load, read entire file, then execute {nextStepFile}
- IF Any other: Answer questions, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN user selects 'C' and document is updated will you load `./step-04-review.md`.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- User approved before scanning started
- All 6 sections filled with HIGH-LEVEL content
- No file paths or code snippets in output
- Search keywords provided for each feature/pattern
- Document updated with stepsCompleted

### ❌ SYSTEM FAILURE:

- Starting scan without user approval
- Including file paths or code snippets
- Missing any of the 6 sections
- Being lazy - superficial analysis

**Master Rule:** Skipping steps is FORBIDDEN and constitutes SYSTEM FAILURE.

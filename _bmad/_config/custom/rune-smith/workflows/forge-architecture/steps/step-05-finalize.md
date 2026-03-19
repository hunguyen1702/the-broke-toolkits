---
name: 'step-05-finalize'
description: 'Finalize architecture document and mark workflow complete'

outputFile: '{saga_folder}/architecture.md'
---

# Step 5: Finalize

## STEP GOAL:

To finalize the architecture document by updating its status from `draft` to `complete`, and gracefully end the workflow.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are **Mimir** (God of Wisdom) - architecture analyst
- ✅ Celebrate the completion with the user
- ✅ Provide guidance on how to use the document

### Step-Specific Rules:

- 🎯 Focus on finalizing and closing
- 🚫 FORBIDDEN to add new content
- 💬 Approach: Update status → Summarize → Congratulate

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 💾 Update document status to 'complete'
- 📖 Update all frontmatter fields
- 🎉 End with success message

## CONTEXT BOUNDARIES:

- Available context: Approved architecture.md from step 4
- Focus: Finalization only
- Limits: No content changes
- Dependencies: User approved document in step 4

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Update Document Status

Update {outputFile} frontmatter:

```yaml
---
status: complete
stepsCompleted: ['step-01-detect-prd', 'step-02-create-draft', 'step-03-scan-and-fill', 'step-04-review', 'step-05-finalize']
lastStep: 'step-05-finalize'
completed_date: '[current date]'
---
```

### 2. Display Completion Summary

Display:
"**🎉 Architecture Document Hoàn Tất!**

---

📄 **File:** `{saga_folder}/architecture.md`
📊 **Status:** `complete` ✅
📅 **Completed:** [current date]

---

**Document Overview:**

| Section | Content |
|---------|---------|
| 1. High-Level Stack | ✅ Filled |
| 2. Logic & Feature Mapping | ✅ Filled |
| 3. Data Model Strategy | ✅ Filled |
| 4. API Interface Strategy | ✅ Filled |
| 5. Coding Patterns | ✅ Filled |
| 6. Testing Strategy | ✅ Filled |

---

**Cách sử dụng document này:**

1. **Cho AI Agents:** Cung cấp file này khi agents cần context về codebase
2. **Tìm kiếm code:** Sử dụng search keywords trong document để locate code
3. **Onboarding:** Giúp members mới hiểu high-level architecture
4. **Planning:** Reference khi lập kế hoạch features mới

---

**Lưu ý quan trọng:**
- Document này chứa **search keywords**, không phải file paths
- Agents sẽ dùng keywords để **search** codebase, không copy paths
- Update document khi architecture thay đổi đáng kể"

### 3. Suggest Next Steps

Display:
"**Bước tiếp theo có thể:**

- 🗡️ **forge-quest:** Tạo quest mới cho task cụ thể
- 📝 **Update PRD:** Nếu requirements thay đổi
- 🔄 **Re-run forge-architecture:** Nếu codebase thay đổi đáng kể

---

**Cảm ơn đã sử dụng Forge Architecture!** 🏛️

*- Mimir*"

### 4. End Workflow

**No menu** - Workflow ends here.

#### EXECUTION RULES:

- This is the FINAL step - no next step to load
- Workflow completes after displaying messages
- User may start a new conversation for other tasks

## CRITICAL STEP COMPLETION NOTE

This is the **FINAL STEP**. After updating status and displaying completion message, the workflow ends. There is no next step to load.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Status updated to 'complete'
- completed_date filled
- stepsCompleted array complete
- Summary displayed
- Usage guidance provided
- Workflow ended gracefully

### ❌ SYSTEM FAILURE:

- Status not updated
- Trying to add more content
- Trying to load a next step (there is none)
- Missing completion date

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.

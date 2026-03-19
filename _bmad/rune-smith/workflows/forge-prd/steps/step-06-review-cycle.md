---
name: step-06-review-cycle
description: User review and feedback/update PRD cycle
nextStepFile: './step-07-finalize.md'
outputFile: '{saga_folder}/prd.md'
---

# Step 6: Review Cycle

**Progress: Step 6 of 7** — Next: Finalize

## STEP GOAL:

Present the PRD to user for review and iterate on feedback until user is satisfied with the content.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read complete step file before action
- 🔄 CRITICAL: When loading next with 'C', read entire file
- 📋 YOU ARE A FACILITATOR, user drives the review
- ✅ Speak output in `{communication_language}`

### Step-Specific Rules:

- 🎯 Focus on user satisfaction
- 🚫 FORBIDDEN to skip review presentation
- 💬 Approach: Iterative refinement

## EXECUTION PROTOCOLS:

- 🎯 Follow the MANDATORY SEQUENCE exactly
- 🔄 Loop until user approves
- 💾 Update PRD with each change

## CONTEXT BOUNDARIES:

- Available context: Generated PRD from step 5
- Focus: Review and refinement
- Output: User-approved PRD

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly.

### 1. Present Full PRD

Read and display the complete {outputFile} to user:

```
**PRD Review**

Here is the complete PRD for your review:

---
[Display full PRD content]
---
```

### 2. Ask for Feedback

```
**Please review the PRD above.**

Options:
- **[A]pprove** - Content is good, proceed to finalize
- **[E]dit** - I have changes to request
- **[R]egenerate** - Start over with different approach
```

### 3. Handle User Response

#### IF [A]pprove:
- Proceed to step 4 (Present completion menu)

#### IF [E]dit:
Ask: "What would you like to change?"

User may request:
- Add content to a section
- Remove content
- Modify existing content
- Reorganize structure

**Apply Changes:**
1. Make the requested edits to {outputFile}
2. Show the diff/summary of changes
3. **Return to step 1** - Present updated PRD again

#### IF [R]egenerate:
Ask: "What should be different this time?"
- Regenerate content with new direction
- **Return to step 1** - Present regenerated PRD

### 4. Confirm Approval

When user selects [A]pprove:

```
**PRD Approved!**

Summary:
- Sections completed: [list]
- Review cycles: [count]

Ready to finalize and mark as complete.
```

### 5. Present MENU OPTIONS

Display:

```
[PRD approved by user. Ready to finalize.]

[C] Continue to Finalize
```

#### Menu Handling Logic:

- IF C: Update stepsCompleted, load {nextStepFile}
- IF Any other: Help user respond, then redisplay menu

**HALT** and wait for user to select **[C]**.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- PRD presented in full
- User feedback collected
- Changes applied correctly
- Iterative refinement until approval
- User explicitly approved

### ❌ SYSTEM FAILURE:

- Not showing full PRD
- Ignoring user feedback
- Auto-approving without user confirmation
- Not saving changes to file

**Master Rule:** User must explicitly approve. Iterate until satisfied.

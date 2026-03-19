---
name: step-01-requirements
description: Greeting and requirements gathering with clarifying questions
nextStepFile: './step-02-discovery.md'
---

# Step 1: Requirements Gathering

**Progress: Step 1 of 5** — Next: Discovery

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Use Thor's action-oriented, powerful communication style.

## GOAL

Greet the user, understand their feature request through clarifying questions, and confirm scope before proceeding to discovery.

## SEQUENCE

### 1. Load Saga Context

Load and read (if they exist):

- `{saga_folder}/prd.md`
- `{saga_folder}/architecture.md`

If either is missing, inform the user they may want to run **[FP] Forge PRD** and **[FA] Forge Architecture** with Mimir first for optimal results.

### 2. Greeting

Greet `{user_name}` with Thor's characteristic directness:

```
The hammer is ready, {user_name}. What shall we build today?
```

### 3. Gather Initial Request

Listen to the user's description of what they want to build or change.

### 4. Ask Clarifying Questions

Ask these questions to ensure complete understanding (adapt based on user's initial input):

**Required Questions:**

1. **Goals:** "What is the primary goal of this update or feature? What problem does it solve?"

2. **Expected Outcome:** "What does success look like? How will you know when it's done?"

**Optional Question (only if user wants to specify):**

3. **Implementation Preference:** "Do you have a preferred approach for implementation, or would you like me to evaluate options?"
   - If user wants to decide: Note their preference for Step 3.
   - If user wants AI to decide: Proceed with full analysis in Step 3.

### 5. Capture User Responses

Document the user's answers. If any responses are vague, ask follow-up questions to clarify.

### 6. Summarize and Confirm Scope

Present a concise summary:

```
## Request Summary

**Feature:** {feature_name}
**Goal:** {goal}
**Expected Outcome:** {outcome}
**Implementation Preference:** {user_preference or "AI will evaluate approaches"}

**Scope:**
- In scope: {in_scope_items}
- Out of scope: {out_of_scope_items}
```

Ask:

```
Does this capture your vision? Would you like to add any details, or shall we proceed to discovery?

[A] Add more details
[C] Continue to Discovery
```

**HALT** and wait for user input.

### 7. Handle Response

**IF [A] Add Details:**

- Capture additional details
- Update summary
- Re-present and ask again

**IF [C] Continue:**

- Store the confirmed scope in memory for subsequent steps
- Create quest folder: `{quests_folder}/{quest-slug}/`
- Proceed to next step

### 8. Proceed

When user confirms, load and execute **`steps/step-02-discovery.md`** in full. Pass the confirmed scope and user preferences.

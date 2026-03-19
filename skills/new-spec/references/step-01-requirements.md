# Step 1: Requirements Gathering

**Progress: Step 1 of 5** — Next: Discovery

## Goal

Understand the user's feature request through clarifying questions and confirm scope before proceeding to discovery.

## Rules

- Do NOT skip ahead. Complete this step fully before moving on.
- This step is **interactive** — HALT and wait for user input at designated points.
- If the user provided a feature description via `$ARGUMENTS`, use it as the initial request (skip straight to clarifying questions).

## Sequence

### 1. Gather Initial Request

If no feature description was provided, ask:

> What feature or change would you like to plan?

Listen to the user's description of what they want to build or change.

### 2. Ask Clarifying Questions

Ask these questions to ensure complete understanding (adapt based on what the user already provided):

**Required:**

1. **Goals:** "What is the primary goal of this feature? What problem does it solve?"
2. **Expected Outcome:** "What does success look like? How will you know when it's done?"

**Optional (only if user wants to specify):**

3. **Implementation Preference:** "Do you have a preferred approach, or should I evaluate options?"
   - If user specifies a preference: Note it for Step 3.
   - If user defers: Proceed with full analysis in Step 3.

### 3. Capture Responses

Document the user's answers. If any responses are vague, ask follow-up questions to clarify.

### 4. Summarize and Confirm Scope

Present a concise summary:

```
## Request Summary

**Feature:** {feature_name}
**Goal:** {goal}
**Expected Outcome:** {outcome}
**Implementation Preference:** {user_preference or "Will evaluate approaches"}

**Scope:**
- In scope: {in_scope_items}
- Out of scope: {out_of_scope_items}
```

Ask:

> Does this capture what you're looking for? Would you like to adjust anything, or shall we proceed to discovery?

**HALT** — Wait for user input.

### 5. Handle Response

- If the user wants changes: update the summary, re-present, and ask again.
- If the user confirms: continue.

### 6. Create Output Folder

Create the spec output directory: `docs/spec/{slug}/` (derive slug from feature name in kebab-case).

### 7. Proceed

Read `step-02-discovery.md` and follow it. Carry forward the confirmed scope and user preferences.

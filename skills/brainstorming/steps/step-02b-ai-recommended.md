# Step 2b: AI-Recommended Techniques

You are a technique matchmaker — analyze the session context and recommend optimal techniques.

## Sequence

### 1. Analyze Session Context

Read `references/techniques-library.md`. Evaluate the user's topic and goals across these dimensions:

- **Goal type:** Innovation → creative/wild. Problem solving → deep/structured. Personal insight → introspective. Strategic → structured/deep.
- **Complexity:** Abstract → deep/structured. Concrete/familiar → creative/wild. Emotional → introspective.
- **User energy/tone:** Formal → structured/analytical. Playful → creative/theatrical/wild. Reflective → introspective/deep.

### 2. Present Recommendations

Recommend 2-3 techniques organized as a phased sequence:

> **Based on your goals, I recommend:**
>
> **Phase 1 — Foundation:** [Technique] from [Category]
> - Why this fits: [specific connection to their goals]
>
> **Phase 2 — Idea Generation:** [Technique] from [Category]
> - Why this builds on Phase 1: [complementary effect]
>
> **Phase 3 — Refinement** (if time allows): [Technique] from [Category]
> - Why this concludes effectively: [rationale]

Provide clear rationale linking each recommendation to the user's specific context.

### 3. Get Confirmation

> **Options:**
> - **Continue** — Begin with these techniques
> - **Modify** — Adjust the selection
> - **Details** — Learn more about any technique
> - **Back** — Return to approach selection

### 4. Update Document and Continue

Update the session document:
- Frontmatter: `selected_approach: 'ai-recommended'`, `techniques_used: [...]`, `stepsCompleted: [1, 2]`
- Append a "Technique Selection" section with recommendations and AI rationale

**Next step:** Read and follow `step-03-facilitation.md`

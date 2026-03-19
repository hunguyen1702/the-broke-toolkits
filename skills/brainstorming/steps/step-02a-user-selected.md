# Step 2a: User-Selected Techniques

You are a technique librarian — present options neutrally and let the user explore and choose.

## Sequence

### 1. Load Technique Library

Read `references/techniques-library.md` and present the 10 categories with technique counts and brief descriptions.

### 2. Browse Categories

When the user picks a category, show all techniques in that category with their full descriptions from the library.

Let the user:
- Select techniques by name or number
- Ask for more details about any technique
- Browse another category
- Select multiple techniques for a comprehensive session

### 3. Confirm Selection

Once the user has chosen their techniques:

> **Your selected techniques:**
> - [Technique 1]: [Brief fit to their session goals]
> - [Technique 2]: [How it complements the first]
>
> **Ready to begin?**
> - **Continue** — Start technique execution
> - **Back** — Modify selection

### 4. Update Document and Continue

Update the session document:
- Frontmatter: `selected_approach: 'user-selected'`, `techniques_used: [...]`, `stepsCompleted: [1, 2]`
- Append a "Technique Selection" section with the chosen techniques and rationale

**Next step:** Read and follow `step-03-facilitation.md`

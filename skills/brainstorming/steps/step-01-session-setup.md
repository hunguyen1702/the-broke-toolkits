# Step 1: Session Setup and Continuation Detection

Initialize the brainstorming workflow by detecting continuation state and setting up session context.

## Initialization Sequence

### 1. Check for Existing Session

Look for a file at `docs/brainstorming/brainstorming-session-*.md`.

- If it exists and has frontmatter with `stepsCompleted`, this is a **continuation**. Proceed to the Continuation section below.
- If it does not exist, this is a **fresh session**. Proceed to Fresh Session Setup.

### 2. Continuation (existing session found)

Read the existing session document fully. Analyze the frontmatter for `stepsCompleted`, `session_topic`, `session_goals`, and `techniques_used`.

Present the user with a status summary:

> Welcome back! I can see your brainstorming session on **[session_topic]**.
>
> **Current status:** Steps completed: [list], Techniques used: [list], Ideas generated: [count]
>
> **Options:**
> 1. **Continue** where you left off
> 2. **Extend** the session with new techniques or angles
> 3. **Start fresh** on a new topic

Route based on their choice:
- Continue → load the next incomplete step file
- Extend → loop back to technique selection (step-02)
- Start fresh → proceed to Fresh Session Setup below (use a new filename or overwrite after confirmation)

### 3. Fresh Session Setup

Ask the user these discovery questions:

1. **What are we brainstorming about?** (The central topic or challenge)
2. **What specific outcomes are you hoping for?** (Types of ideas, solutions, or insights)
3. **How deep do you want to go?** Offer three options:
   - **Quick burst** (~10-15 min, 1 technique, 30+ ideas) — fast divergent thinking
   - **Standard session** (~30 min, 2-3 techniques, 50+ ideas) — balanced exploration
   - **Deep dive** (~60+ min, 3-4 techniques, 80-100+ ideas) — thorough creative exploration
4. **Where should I save the session document?** Default: `docs/brainstorming/brainstorming-session-{date}.md`

Also ask for their name if this is the first session.

Wait for responses. Then confirm understanding:

> Based on your responses, we're focusing on **[topic]** with goals around **[objectives]**, doing a **[scope]** session. Does this capture what you want to achieve?

### 4. Initialize Session Document

Once confirmed:
- Create the output directory if it doesn't exist
- Copy the session template from `assets/session-template.md` to the user's chosen path (or the default)
- Fill in the user's name and today's date
- Update frontmatter: `stepsCompleted: [1]`, `session_topic`, `session_goals`, `session_scope` (quick/standard/deep)

### 5. Present Technique Selection Approaches

- Present:

> **Session setup complete!**


- Ask user:

> **Ready to explore technique approaches?**
> 1. **User-Selected Techniques** — Browse the complete technique library
> 2. **AI-Recommended Techniques** — Get suggestions based on your goals
> 3. **Random Technique Selection** — Discover unexpected creative methods
> 4. **Progressive Technique Flow** — Start broad, then systematically narrow focus
>
> Which approach appeals to you? (1-4)

### 6. Route to Selected Approach

Update frontmatter with `selected_approach` and append a Session Overview section to the document.

- **1** → Read and follow `step-02a-user-selected.md`
- **2** → Read and follow `step-02b-ai-recommended.md`
- **3** → Read and follow `step-02c-random-selection.md`
- **4** → Read and follow `step-02d-progressive-flow.md`

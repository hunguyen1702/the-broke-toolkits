---
name: step-03-draft-updates
description: Prepare updates for prd.md and architecture.md
nextStepFile: './step-04-review.md'
---

# Step 3: Draft Updates

**Progress: Step 3 of 5** — Next: Review

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Preserve existing content structure where possible.

## GOAL

Draft comprehensive updates for prd.md and architecture.md based on the aggregated quest information.

## AVAILABLE STATE

From previous steps:
- Current Saga content (prd.md, architecture.md)
- Aggregated features list
- Aggregated architecture information
- Proposed PRD changes
- Proposed architecture changes

---

## SEQUENCE

### 1. Draft PRD Updates

**If prd.md exists:**
- Start from current content
- Apply proposed changes:
  - Add new feature sections
  - Update feature statuses (planned → implemented)
  - Expand scope based on completed work
  - Update out-of-scope if addressed

**If prd.md doesn't exist:**
- Create new PRD structure based on quest data
- Include all implemented features
- Document current scope

**PRD Structure Template:**

```markdown
# Product Requirements Document

## Project Overview
{from aggregated quest data}

## Features

### Implemented Features
{from completed quests}

### In-Progress Features
{from in-progress quests}

### Planned Features
{from planned quests}

## Scope

### In Scope
{aggregated from all quests}

### Out of Scope
{documented exclusions}

## Requirements
{functional and non-functional requirements from quests}

## Success Metrics
{from quest acceptance criteria}

---
Last updated: {date}
Synced from: {quest_count} quests
```

### 2. Draft Architecture Updates

**If architecture.md exists:**
- Start from current content
- Apply proposed changes:
  - Add new components/modules
  - Document new patterns
  - Record technical decisions
  - Update tech stack

**If architecture.md doesn't exist:**
- Create new architecture structure based on quest data
- Document current components
- Record all discovered patterns

**Architecture Structure Template:**

```markdown
# Architecture Document

## System Overview
{high-level architecture from quest data}

## Components

### Core Components
{from quest implementations}

| Component | Purpose | Introduced |
|-----------|---------|------------|
{aggregated component list}

### Modules
{module breakdown from quests}

## Patterns & Conventions

### Code Patterns
{from discovery reports}

| Pattern | Location | Usage |
|---------|----------|-------|
{aggregated patterns}

### Naming Conventions
{from discovery reports}

## Technical Decisions

| Decision | Rationale | Date | Quest |
|----------|-----------|------|-------|
{from analysis reports}

## Technical Stack

### Dependencies
{from quest discovery reports}

### Constraints
{from discovery reports}

## Data Flow
{if documented in quests}

## Security Considerations
{from quest implementations}

---
Last updated: {date}
Synced from: {quest_count} quests
```

### 3. Apply Quest Attribution

For each significant addition, include attribution:

```markdown
### User Authentication
<!-- Source: quest-001-user-auth -->

JWT-based authentication system...
```

This helps track where information came from for future updates.

### 4. Generate Diff Summary

Create a summary of changes:

**PRD Changes:**
```diff
+ Added: Feature X section
+ Added: Feature Y section
~ Updated: Feature Z status (planned → implemented)
~ Updated: Scope section
```

**Architecture Changes:**
```diff
+ Added: AuthService component
+ Added: Repository pattern documentation
+ Added: Technical decision: JWT selection
~ Updated: Tech stack dependencies
```

### 5. Present Drafts

Display to user:

```
Saga Drafts Ready

**PRD Draft:**
- Total sections: {count}
- New sections: {new_count}
- Updated sections: {updated_count}
- Word count: {words}

**Architecture Draft:**
- Total sections: {count}
- New sections: {new_count}
- Updated sections: {updated_count}
- Word count: {words}

**Quest Sources:**
- {quest_count} quests analyzed
- {discovery_count} discovery reports
- {analysis_count} analysis reports

[C] Continue to Review
[P] Preview PRD Draft
[A] Preview Architecture Draft
```

**HALT** and wait for user selection.

### 6. Handle User Selection

- IF [C]: Proceed to step 7
- IF [P]: Show full PRD draft, then re-present menu
- IF [A]: Show full architecture draft, then re-present menu

### 7. Proceed

When user selects **[C]**, load and execute **`steps/step-04-review.md`** in full.

Pass context:
- PRD draft content
- Architecture draft content
- Change diff summary
- Quest attribution data

---

## DRAFTING GUIDELINES

### Content Quality

- Use clear, concise language
- Maintain consistent formatting
- Include relevant details from quests
- Avoid redundancy

### Structure Preservation

- Keep existing section order where sensible
- Add new sections in logical places
- Don't remove content unless explicitly outdated

### Attribution

- Note quest sources for traceability
- Use HTML comments for non-visible attribution
- Helpful for future sync operations

---

## SUCCESS METRICS

- PRD draft complete with all features
- Architecture draft complete with all components
- Diff summary accurately reflects changes
- Drafts ready for user review

## FAILURE MODES

- Missing quest data for key sections
- Conflicting information (flag for user)
- Overly long documents (suggest splitting)

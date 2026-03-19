---
name: step-02-analyze-aggregate
description: Extract and categorize information from selected quests
nextStepFile: './step-03-draft-updates.md'
---

# Step 2: Analyze & Aggregate

**Progress: Step 2 of 5** — Next: Draft Updates

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Aggregate information intelligently - avoid duplicates.

## GOAL

Analyze selected quest data and aggregate information into structured categories for PRD and Architecture updates.

## AVAILABLE STATE

From Step 1:
- Current Saga content (prd.md, architecture.md)
- User-selected quest data
- Extracted information from selected quest folders

---

## SEQUENCE

### 1. Aggregate Features for PRD

Compile features from selected quests:

```
Features Aggregation:

**Implemented Features (from completed quests):**
| Feature | Quest | Description | Status |
|---------|-------|-------------|--------|
| User Authentication | quest-001 | Login/logout with JWT | Implemented |
| Dashboard | quest-002 | Main dashboard with widgets | Implemented |

**In-Progress Features:**
| Feature | Quest | Description | Progress |
|---------|-------|-------------|----------|
| Reports Module | quest-003 | Generate PDF reports | 60% |

**Planned Features:**
| Feature | Quest | Description | Priority |
|---------|-------|-------------|----------|
| API v2 | quest-004 | REST API redesign | High |
```

### 2. Aggregate Architectural Information

Compile architectural decisions and patterns:

**Components & Modules:**
```
| Component | Introduced By | Purpose |
|-----------|---------------|---------|
| AuthService | quest-001 | Handle authentication |
| ReportGenerator | quest-003 | PDF generation |
```

**Patterns & Conventions:**
```
| Pattern | Location | Description | Source |
|---------|----------|-------------|--------|
| Repository Pattern | src/repos/ | Data access abstraction | quest-001 |
| Factory Pattern | src/factories/ | Object creation | quest-002 |
```

**Technical Decisions:**
```
| Decision | Rationale | Quest |
|----------|-----------|-------|
| Use JWT for auth | Stateless, scalable | quest-001 |
| PostgreSQL for DB | ACID compliance needed | quest-002 |
```

**Technical Constraints:**
```
| Constraint | Impact | Source |
|------------|--------|--------|
| Node 20+ required | Use ESM modules | quest-001 |
| Max 100MB uploads | Chunked upload needed | quest-003 |
```

### 3. Identify PRD Changes

Compare aggregated features with current PRD:

**New Additions to PRD:**
- Features not yet documented
- Updated scope from completed quests
- New requirements discovered

**Updates to PRD:**
- Features marked as "planned" that are now "implemented"
- Scope changes based on implementation
- Out-of-scope items that were addressed

**No Change Needed:**
- Features already documented correctly

Present:
```
PRD Impact Analysis:

**New Sections to Add:** {count}
- {section_name}: {reason}

**Sections to Update:** {count}
- {section_name}: {change_description}

**No Changes Needed:** {count} sections
```

### 4. Identify Architecture Changes

Compare aggregated architecture info with current architecture.md:

**New Additions to Architecture:**
- New components/modules
- New patterns documented
- New technical decisions

**Updates to Architecture:**
- Updated component descriptions
- Revised patterns
- Changed technical stack

Present:
```
Architecture Impact Analysis:

**New Sections to Add:** {count}
- {section_name}: {reason}

**Sections to Update:** {count}
- {section_name}: {change_description}

**No Changes Needed:** {count} sections
```

### 5. Create Change Summary

Consolidate all proposed changes:

```
Saga Update Summary:

**PRD Changes:**
- Additions: {count}
- Updates: {count}
- Total sections affected: {count}

**Architecture Changes:**
- Additions: {count}
- Updates: {count}
- Total sections affected: {count}

**Data Sources (from selected quests):**
- Completed quests: {count}
- In-progress quests: {count}
- Discovery reports: {count}
- Analysis reports: {count}

[C] Continue to Draft Updates
[D] View Detailed Changes
```

**HALT** and wait for user selection.

### 6. Handle User Selection

- IF [C]: Proceed to step 7
- IF [D]: Show detailed change list for each file, then re-present menu

### 7. Proceed

When user selects **[C]**, load and execute **`steps/step-03-draft-updates.md`** in full.

Pass context:
- Current Saga content
- Aggregated features list
- Aggregated architecture information
- Proposed PRD changes
- Proposed architecture changes

---

## AGGREGATION RULES

### Deduplication

- If same feature appears in multiple quests, use the most recent/complete version
- Merge similar patterns with consistent naming
- Consolidate overlapping technical decisions

### Priority

- Completed quests take precedence over in-progress
- In-progress quests take precedence over planned
- Most recent information wins for conflicts

### Preservation

- Don't remove existing Saga content unless explicitly outdated
- Preserve manual edits to Saga files
- Add "from quest" attribution where helpful

---

## SUCCESS METRICS

- Features aggregated without duplicates
- Architecture info categorized properly
- Impact analysis completed for both files
- Change summary presented clearly

## FAILURE MODES

- Conflicting information from different quests (report to user)
- Missing critical quest data (note gaps)
- Unclear feature status (ask for clarification)

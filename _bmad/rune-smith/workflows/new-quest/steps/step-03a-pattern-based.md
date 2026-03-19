---
name: step-03a-pattern-based
description: Pattern-based implementation analysis
nextStepFile: './step-04-create-quest.md'
analysisReportTemplate: '../templates/analysis-report-template.md'
---

# Step 3A: Pattern-Based Implementation

**Progress: Step 3A of 5** — Next: Create Quest

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Use Thor's strategic, decisive communication style.

## GOAL

Select the best matching pattern from discovery and create a simplified analysis report.

## CONTEXT

This path is selected when:
- Existing patterns directly apply to the feature
- The simplest approach is to follow established conventions

## SEQUENCE

### 1. Identify Best Pattern

From the discovery report, evaluate all found patterns and select the **simplest one** that satisfies the requirements.

Consider:
- How closely does the pattern match the requirement?
- How much adaptation is needed?
- What is the risk of deviation?

### 2. Present Pattern Recommendation

Show the user the selected pattern:

```
## Pattern Match Found ⚡

Based on the discovery, I recommend following the existing pattern:

**Pattern:** {pattern_name}
**Location:** `{file_path}`

### Why This Pattern

{rationale - why this pattern is the best fit}

### How It Applies

{brief explanation of how this pattern will be adapted for the feature}

### Adaptation Required

- {adaptation 1}
- {adaptation 2}
```

### 3. Create Analysis Report

Write to `{quests_folder}/{quest-name}/analysis-report.md`:

```markdown
# Analysis Report: {feature_name}

## Analysis Approach

Pattern-based implementation selected. Existing codebase pattern identified.

## Selected Pattern

**Pattern:** {pattern_name}
**Location:** `{file_path}`
**Rationale:** {rationale}

## Why This Pattern

- Follows established codebase conventions
- Minimal risk of regressions
- Proven implementation approach
- Simpler maintenance
- Lower cognitive overhead for future developers

## Pattern Details

### Original Implementation

{describe the pattern as it exists}

### Adaptation for This Feature

{describe how it will be modified}

### Files Involved

| File | Role |
|------|------|
| `{file}` | {purpose} |

## Risk Assessment

**Risk Level:** Low

**Potential Issues:**
- {any edge cases or considerations}

**Mitigations:**
- {how to address them}

## Adaptation Notes

{detailed notes on any modifications needed for this specific feature}
```

### 4. Confirm and Proceed

Present completion message:

```
## Pattern Analysis Complete

Analysis report saved to: `{quests_folder}/{quest-name}/analysis-report.md`

Selected pattern: **{pattern_name}**

Proceeding to quest creation...
```

### 5. Auto-Proceed

**Automatically** load and execute **`{nextStepFile}`** (Step 4: Create Quest).

Pass to next step:
- Selected pattern name and details
- Analysis report location
- Discovery report location

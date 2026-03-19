# Step 3: Analysis

**Progress: Step 3 of 5** — Next: Create Spec

## Goal

Evaluate implementation approaches using either pattern-based selection or multi-approach scoring, then document the recommendation.

## Rules

- This step **auto-triggers** — proceed without waiting for user input.
- Do NOT execute both analysis paths. Choose one based on the router logic below.
- Score approaches inline (main agent scores, no sub-agents for scoring).

## Sequence

### 1. Load Discovery Context

Read the discovery report from `docs/spec/{slug}/discovery-report.md`.

Extract:
- Existing patterns found
- Technical constraints
- User's implementation preference (from Step 1)

### 2. Route: Trivial, Pattern-Based, or Multi-Approach?

Evaluate the discovery findings:

| Condition | Route |
|-----------|-------|
| Change is trivially obvious (e.g., config tweak, rename, 1-2 file edit) | **Path T** (Trivial) |
| Direct pattern match exists in codebase | **Path A** (Pattern-Based) |
| User specified "evaluate options" | **Path B** (Multi-Approach) |
| No patterns found | **Path B** (Multi-Approach) |
| Novel feature requiring exploration | **Path B** (Multi-Approach) |

Inform the user which path is selected and why.

---

## Path T: Trivial Feature

Use when the implementation is so straightforward that scoring multiple approaches would add no value.

### T1. State the Approach

Briefly describe what needs to be done and why it's straightforward.

### T2. Write Analysis Report

Write a short analysis report to `docs/spec/{slug}/analysis-report.md` noting that the change is trivial, describing the single approach, and skipping the scoring matrix.

### T3. Continue

Skip to **User Checkpoint** below.

---

---

## Path A: Pattern-Based Analysis

Use when existing codebase patterns directly apply to the feature.

### A1. Select Best Pattern

From discovery findings, evaluate all found patterns and select the **simplest one** that satisfies the requirements. Consider:
- How closely does the pattern match the requirement?
- How much adaptation is needed?
- What is the risk of deviation?

### A2. Document Pattern Recommendation

Present to the user:

```
## Pattern Match Found

**Pattern:** {pattern_name}
**Location:** `{file_path}`

### Why This Pattern
{rationale}

### How It Applies
{explanation of adaptation}

### Adaptations Required
- {adaptation 1}
- {adaptation 2}
```

### A3. Write Analysis Report

Write to `docs/spec/{slug}/analysis-report.md` using the `analysis-report-template.md` template. For pattern-based analysis, fill in the selected pattern as Approach 1 and note that pattern-based selection was used (leave other approach sections as N/A or remove them).

### A4. Continue

Skip to **Auto-Proceed** at the bottom of this file.

---

## Path B: Multi-Approach Evaluation

Use when no direct patterns exist or when evaluation of options is warranted.

### B1. Generate 3 Approaches

Based on discovery findings, identify 3 distinct implementation approaches. Present them:

```
## Approach Evaluation

Analyzing 3 potential strategies for {feature_name}:

1. **{approach_1_name}** — {one-line description}
2. **{approach_2_name}** — {one-line description}
3. **{approach_3_name}** — {one-line description}

Scoring each against 9 criteria...
```

### B2. Score Each Approach

For **each approach**, evaluate against the 9-criteria matrix. Score each criterion 1-10 with brief justification.

| # | Criteria | Description |
|---|----------|-------------|
| 1 | Simple & Easy | How straightforward is the implementation? |
| 2 | Maintainable & Scalable | Will this grow well over time? |
| 3 | Reusable & Modular | Can components be reused elsewhere? |
| 4 | Efficient & Fast | Performance considerations |
| 5 | Secure & Safe | Security implications |
| 6 | Cost-Effective | Resource and budget considerations |
| 7 | User-Friendly | End-user experience impact |
| 8 | Codebase Compatible | Fits with existing patterns |
| 9 | Tech Stack Compatible | Works with current technologies |

For each approach, produce:

```
### Approach {N}: {name}

**Description:** {detailed description}
**Implementation Strategy:** {step-by-step}

| Criteria | Score | Justification |
|----------|-------|---------------|
| Simple & Easy | {1-10} | {why} |
| Maintainable & Scalable | {1-10} | {why} |
| Reusable & Modular | {1-10} | {why} |
| Efficient & Fast | {1-10} | {why} |
| Secure & Safe | {1-10} | {why} |
| Cost-Effective | {1-10} | {why} |
| User-Friendly | {1-10} | {why} |
| Codebase Compatible | {1-10} | {why} |
| Tech Stack Compatible | {1-10} | {why} |

**Average Score:** {sum/9}
**Key Risks:** {risks with mitigations}
**Key Benefits:** {benefits}
```

### B3. Rank and Recommend

Create comparison table and select the highest-scoring approach:

```
## Recommendation

| Rank | Approach | Avg Score | Top Strength | Main Weakness |
|------|----------|-----------|--------------|---------------|
| 1 | {name} | {score} | {strength} | {weakness} |
| 2 | {name} | {score} | {strength} | {weakness} |
| 3 | {name} | {score} | {strength} | {weakness} |

**Selected:** {winning_approach} ({score}/10)
**Rationale:** {why this wins based on scoring}
**Trade-offs:** {what we're giving up}
```

### B4. Write Analysis Report

Read template from `analysis-report-template.md` and write the complete report to:
`docs/spec/{slug}/analysis-report.md`

Include all 3 approach evaluations with full scoring, comparison, recommendation, and trade-off analysis.

---

## User Checkpoint

Before proceeding to spec creation, ask the user:

> **Selected approach: {approach_name}**
> {one-sentence rationale}
>
> Shall I proceed with spec creation, or would you like to adjust the approach?

**HALT** — Wait for user input.

- If the user confirms or says nothing specific: proceed.
- If the user wants changes: update the analysis report and re-present.

## Auto-Proceed

Read `step-04-create-spec.md` and follow it. Pass:
- Selected approach name and details
- Analysis report location
- Discovery report location

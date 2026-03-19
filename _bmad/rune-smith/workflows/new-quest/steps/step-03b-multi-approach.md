---
name: step-03b-multi-approach
description: Multi-approach evaluation with 9-criteria scoring
nextStepFile: './step-04-create-quest.md'
analysisReportTemplate: '../templates/analysis-report-template.md'
---

# Step 3B: Multi-Approach Evaluation

**Progress: Step 3B of 5** — Next: Create Quest

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Use Thor's strategic, decisive communication style.
- Evaluate **exactly 3 approaches** unless fewer are viable.

## GOAL

Generate, evaluate, and score multiple implementation approaches using a systematic 9-criteria matrix.

## CONTEXT

This path is selected when:
- No existing patterns directly apply
- User requested approach evaluation
- Feature is novel and requires exploration

## SEQUENCE

### 1. Generate 3 Approaches

Based on discovery findings, identify 3 distinct implementation approaches.

Inform the user:

```
## Approach Generation 🔍

Analyzing possible approaches for {feature_name}...

I've identified 3 potential strategies:

1. **{approach_1_name}** — {one-line description}
2. **{approach_2_name}** — {one-line description}
3. **{approach_3_name}** — {one-line description}

Deploying evaluation agents to score each approach...
```

### 2. Spawn Evaluation Sub-Agents

For **each approach**, spawn a sub-agent to evaluate against the criteria matrix.

---

#### Evaluation Criteria (score 1-10 for each)

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

---

#### Sub-Agent Mission Template

**Mission:** Evaluate Approach {N}: {approach_name}

**Actions:**

1. Describe the implementation strategy in detail
2. Score each of the 9 criteria (1-10)
3. Provide brief justification for each score
4. Calculate average score
5. Identify key risks and mitigations

**Required Output Format:**

```markdown
## Approach {N}: {name}

**Description:** {detailed description}

**Implementation Strategy:**
{step-by-step how to implement}

**Scores:**

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

**Key Risks:**
- {risk 1}: {mitigation}
- {risk 2}: {mitigation}

**Key Benefits:**
- {benefit 1}
- {benefit 2}
```

---

### 3. Aggregate and Rank

Collect all sub-agent evaluations and create ranking table:

```markdown
## Approach Comparison

| Rank | Approach | Avg Score | Top Strength | Main Weakness |
|------|----------|-----------|--------------|---------------|
| 1 | {name} | {score} | {strength} | {weakness} |
| 2 | {name} | {score} | {strength} | {weakness} |
| 3 | {name} | {score} | {strength} | {weakness} |
```

**Selection Rule:** The approach with the **highest average score** is recommended.

### 4. Present Recommendation

Show the user the analysis summary:

```
## Analysis Complete ⚔️

**Recommended Approach:** {winning_approach}
**Score:** {score}/10

### Why This Approach Wins

{brief rationale based on scores - highlight top-scoring criteria}

### Comparison Summary

| Approach | Score | Verdict |
|----------|-------|---------|
| {name} | {score} | {Recommended / Runner-up / Alternative} |

### Trade-offs Acknowledged

{what we're giving up by choosing this approach}

Full analysis saved to: `{quests_folder}/{quest-name}/analysis-report.md`
```

### 5. Write Analysis Report

Using template from `{analysisReportTemplate}`, write complete report to:
`{quests_folder}/{quest-name}/analysis-report.md`

Include:
- All 3 approach evaluations with full scoring
- Comparison table
- Recommendation with rationale
- Trade-off analysis

### 6. Auto-Proceed

**Automatically** load and execute **`{nextStepFile}`** (Step 4: Create Quest).

Pass to next step:
- Selected approach name and details
- Full scoring breakdown
- Analysis report location
- Discovery report location

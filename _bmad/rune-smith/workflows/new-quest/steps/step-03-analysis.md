---
name: step-03-analysis
description: Route to appropriate analysis path based on discovery findings
pathAFile: './step-03a-pattern-based.md'
pathBFile: './step-03b-multi-approach.md'
timebox: 30 minutes
---

# Step 3: Analysis Router

**Progress: Step 3 of 5** — Next: Create Quest

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Timebox the entire analysis phase to **30 minutes** maximum.
- Use Thor's strategic, decisive communication style.

## GOAL

Load discovery context and route to the appropriate analysis path.

## SEQUENCE

### 1. Load Discovery Context

Read the discovery report from `{quests_folder}/{quest-name}/discovery-report.md`.

Extract key information:

- Existing patterns found
- Technical constraints
- External references
- User's implementation preference (from Step 1)

### 2. Analyze Findings

Evaluate the discovery report to determine:

1. **Are there existing patterns** that directly apply to this feature?
2. **Did the user specify** an implementation preference?
3. **Is the feature novel** enough to require approach evaluation?

### 3. Present Routing Decision

Inform the user of the analysis path:

```
## Analysis Path Determination

Based on the discovery findings:

**Patterns Found:** {yes/no - list if yes}
**User Preference:** {specified/AI decides}
**Recommendation:** {Path A or Path B}

{Brief rationale}
```

### 4. Route to Analysis Path

**IF patterns exist that directly apply to the feature:**

```
Existing patterns match this requirement. Proceeding with pattern-based implementation.
```

→ Load and execute **`{pathAFile}`** (Step 3A: Pattern-Based)

---

**IF no direct patterns exist OR user requested approach evaluation OR feature is novel:**

```
No direct pattern match. Initiating multi-approach evaluation with scoring.
```

→ Load and execute **`{pathBFile}`** (Step 3B: Multi-Approach)

---

## Routing Criteria

| Condition | Route To |
|-----------|----------|
| Direct pattern match exists | Step 3A (Pattern-Based) |
| User specified "AI decides" | Step 3B (Multi-Approach) |
| No patterns found | Step 3B (Multi-Approach) |
| Novel feature requiring evaluation | Step 3B (Multi-Approach) |
| User wants to evaluate options | Step 3B (Multi-Approach) |

## IMPORTANT

- Do NOT execute both paths
- Do NOT skip the routing decision
- The selected path file handles auto-proceeding to Step 4

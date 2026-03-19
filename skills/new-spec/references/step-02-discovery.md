# Step 2: Discovery

**Progress: Step 2 of 5** — Next: Analysis

## Goal

Conduct targeted codebase discovery to gather patterns, constraints, and references needed for informed implementation decisions.

## Rules

- This step **auto-triggers** — proceed without waiting for user input.
- Only explore discovery areas that are **relevant** based on Step 1 inputs.
- Use the Agent tool to spawn sub-agents for parallel discovery.

## Sequence

### 1. Assess Discovery Needs

Based on the confirmed scope from Step 1, determine which discovery areas are needed:

| Discovery Area | When Needed |
|----------------|-------------|
| Codebase Analysis | Feature touches existing code, follows established patterns, or has similar prior implementations |
| Constraints | Feature has technical requirements or limitations |
| External Docs | Feature requires third-party integrations or libraries |

Inform the user which areas will be explored:

> Exploring the codebase for: {list relevant discovery areas}. Stand by while I compile findings.

### 2. Spawn Discovery Sub-Agents

Use the **Agent tool** to spawn sub-agents in parallel for each relevant discovery area. Only spawn agents for areas that are needed.

#### 2A. Codebase Analysis Agent (IF NEEDED)

**Prompt:** Search the codebase for patterns and similar implementations relevant to {feature description}. Look for:
1. Similar implementations or modules with comparable functionality
2. Reusable utilities and components
3. Naming conventions in the relevant areas
4. Architectural patterns that apply
5. Relevant test patterns

Return structured findings as: patterns found (name, location, how it's used), similar features (location, approach, relevance), reusable utilities, and naming conventions.

#### 2B. Constraints Agent (IF NEEDED)

**Prompt:** Identify technical constraints for implementing {feature description}. Check:
1. Package/config files for version constraints and key dependencies
2. Build system requirements
3. Performance or security requirements in the codebase
4. Architectural constraints from existing code structure

Return structured findings as: runtime info, key dependencies, build requirements, and any constraints found.

#### 2C. External Docs Agent (IF NEEDED)

**Prompt:** Search for documentation relevant to implementing {feature description}. Look for:
1. README files, docs folders, or inline documentation about relevant systems
2. Configuration examples for required libraries
3. API documentation for external services involved (use WebSearch or context7 MCP tools if available for third-party docs)

Return structured findings as: documentation sources (location, key sections, relevance).

**Note:** If discovery yields minimal or no relevant findings (e.g., greenfield project or entirely new domain), note this explicitly and proceed. Step 3 will default to Path B (Multi-Approach) and rely on general best practices.

### 3. Consolidate Discovery Report

Gather all sub-agent outputs and create the discovery report:

1. Read template from `discovery-report-template.md`
2. Populate with findings from sub-agents
3. Write to: `docs/spec/{slug}/discovery-report.md`

### 4. Present Summary

Show the user a brief summary of key findings:

```
## Discovery Complete

**Patterns Found:** {count}
**Constraints Identified:** {count}
**External References:** {count}

Key Findings:
- {highlight 1}
- {highlight 2}
- {highlight 3}

Full report saved to: `docs/spec/{slug}/discovery-report.md`
```

### 5. Auto-Proceed

Read `step-03-analysis.md` and follow it. Pass the discovery report location and key findings.

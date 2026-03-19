---
name: step-02-discovery
description: Multi-agent discovery for patterns, constraints, and references
nextStepFile: './step-03-analysis.md'
discoveryReportTemplate: '../templates/discovery-report-template.md'
---

# Step 2: Discovery

**Progress: Step 2 of 5** — Next: Analysis

## RULES

- Do not skip steps. Follow the sequence exactly.
- Speak output in `{communication_language}`.
- Only spawn sub-agents for discovery areas that are **needed** based on Step 1 inputs.
- Use Thor's decisive, action-oriented style.

## GOAL

Conduct targeted discovery to gather patterns, constraints, and references needed for informed implementation decisions.

## SEQUENCE

### 1. Assess Discovery Needs

Based on the confirmed scope from Step 1, determine which discovery areas are needed:

| Discovery Area | When Needed |
|----------------|-------------|
| Pattern Search | Feature touches existing code or follows established patterns |
| Constraints | Feature has technical requirements or limitations |
| Similar Features | Novel feature that could benefit from external examples |
| External Docs | Feature requires third-party integrations |

Inform the user which discovery areas will be explored:

```
Based on your request, I'm deploying scouts to gather intelligence on:
- {list relevant discovery areas}

Stand by while I forge the discovery report.
```

### 2. Execute Discovery Sub-Agents

**ONLY spawn sub-agents for relevant discovery areas.** Each sub-agent operates independently and returns structured findings.

---

#### 2A. Pattern Search Sub-Agent (IF NEEDED)

**Mission:** Find existing patterns in codebase based on Saga documents and code search.

**Actions:**

1. Search `{saga_folder}/architecture.md` for relevant patterns
2. Search codebase for similar implementations
3. Identify reusable utilities and components
4. Note naming conventions in the relevant areas

**Output Format:**

```
## Patterns Found

| Pattern | Location | How It's Used |
|---------|----------|---------------|
| {pattern} | `{file}` | {description} |

### Reusable Utilities
- {utility}: {location}

### Naming Conventions
- {convention}
```

---

#### 2B. Constraints Sub-Agent (IF NEEDED)

**Mission:** Identify technical constraints in the project.

**Actions:**

1. Check package.json / config files for version constraints
2. Identify build system requirements
3. Find architectural constraints from Saga
4. Note any performance or security requirements

**Output Format:**

```
## Technical Constraints

- **Runtime:** {node/python/etc version}
- **Key Dependencies:** {list with versions}
- **Build Requirements:** {requirements}
- **Architectural Constraints:** {from saga}
- **Performance Requirements:** {if any}
- **Security Requirements:** {if any}
```

---

#### 2C. Similar Features Sub-Agent (IF NEEDED)

**Mission:** Research how similar features were implemented in other projects.

**Actions:**

1. Search for similar open-source implementations
2. Identify common approaches for this type of feature
3. Note pros/cons of different implementations

**Output Format:**

```
## Similar Implementations

| Project/Feature | Approach | Pros | Cons | Source |
|-----------------|----------|------|------|--------|
| {project} | {approach} | {pros} | {cons} | {link} |
```

---

#### 2D. External Docs Sub-Agent (IF NEEDED)

**Mission:** Gather relevant documentation for external integrations.

**Actions:**

1. Find official documentation for required libraries/APIs
2. Identify relevant examples and tutorials
3. Note any version-specific considerations

**Output Format:**

```
## External Documentation

| Library/API | Documentation | Key Sections | Notes |
|-------------|---------------|--------------|-------|
| {lib} | {url} | {sections} | {notes} |
```

---

### 3. Consolidate Discovery Report

Gather all sub-agent outputs and create the discovery report:

1. Read template from `{discoveryReportTemplate}`
2. Populate with findings from sub-agents
3. Write to: `{quests_folder}/{quest-name}/discovery-report.md`

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

Full report saved to: `{quests_folder}/{quest-name}/discovery-report.md`

Proceeding to analysis phase...
```

### 5. Auto-Proceed

**Automatically** load and execute **`steps/step-03-analysis.md`**. Pass the discovery report location and key findings.

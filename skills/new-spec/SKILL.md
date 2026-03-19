---
name: new-spec
description: >-
  Plan and design new features through systematic discovery, multi-criteria
  analysis, and detailed task breakdown. Use this skill whenever the user wants
  to plan a feature, spec something out, evaluate implementation approaches,
  break work into ordered tasks, or create a structured implementation plan —
  even if they don't use the word "spec". Also triggers on phrases like "how
  should I implement", "what's the best approach for", "design a solution for",
  "plan a feature", "spec out", "implementation plan", "evaluate approaches",
  or "break down this feature into tasks".
---

# Feature Spec Planning

Systematic 5-step workflow for planning new feature implementations.
Produces 3 artifacts in `docs/spec/{slug}/`.

## Outputs

- `discovery-report.md` — Patterns, constraints, references from codebase analysis
- `analysis-report.md` — Approach evaluation with 9-criteria scoring
- `spec.md` — Implementation tasks with dependency graph + acceptance criteria

## Workflow Overview

| Step | Name | Mode | Description |
|------|------|------|-------------|
| 1 | Requirements | Interactive | Gather goals, outcomes, scope from user |
| 2 | Discovery | Auto | Parallel sub-agent codebase analysis |
| 3 | Analysis | Auto + Checkpoint | Route to trivial/pattern-based/multi-approach scoring, then confirm selected approach |
| 4 | Create Spec | Auto | Task breakdown, dependency graph, acceptance criteria |
| 5 | Review | Auto | Sub-agent adversarial review + compact summary |

## Key Principles

- Plan before implementing — understand what exists vs what's needed
- KISS and YAGNI — simpler solutions preferred
- Evaluate existing patterns before proposing new ones
- Minimal changes, reversibility preferred
- Every task must be discrete, dependency-ordered, with specific files and actions

## 9-Criteria Scoring Matrix (used in Step 3B)

1. Simplicity
2. Maintainability
3. Reusability
4. Efficiency
5. Security
6. Cost-effectiveness
7. User experience
8. Codebase compatibility
9. Tech stack compatibility

## Start

Read `references/step-01-requirements.md` and follow it.

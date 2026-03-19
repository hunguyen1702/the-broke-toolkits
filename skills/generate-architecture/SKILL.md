---
name: generate-architecture
description: >-
  Generate a high-level Architecture Document from PRD and codebase analysis.
  Use this skill whenever the user wants to document system architecture,
  analyze codebase structure, create high-level technical docs, map features
  to code patterns, or understand how a project is organized. Triggers on
  phrases like "document the architecture", "architecture doc", "system
  overview", "codebase analysis", "technical documentation", "how is this
  project structured", "tech stack overview", "system design doc", "create
  a technical overview", "map features to code", or "help me understand
  this codebase". Even if the user doesn't say "architecture" explicitly,
  use this skill when they want a comprehensive technical overview of a
  project.
---

# Generate Architecture

Create a comprehensive Architecture Document that provides high-level context
for developers and AI agents working with the codebase. Uses search keywords
instead of specific file paths.

## Output

- `docs/architecture.md` — Stack, feature mapping, data models, APIs, patterns, testing

## Prerequisites

Requires a PRD document. The skill searches for it automatically (see Step 1).
If none is found, suggest running `generate-prd` first.

## Critical Principle: HIGH-LEVEL ONLY

| FORBIDDEN | REQUIRED |
|-----------|----------|
| `src/services/auth_service.rb` | `*Service`, `auth`, `authenticate` |
| Code snippets | Pattern names and purposes |
| Implementation details | Search keywords for agents |

**Why?** Agents use keywords to SEARCH the codebase. They don't copy-paste paths.
The architecture document is a "thinking map", not a "code index".

## Workflow Overview

| Step | Name | Mode | Description |
|------|------|------|-------------|
| 1 | Detect PRD | Auto | Search for PRD-like files, validate, gate if missing |
| 2 | Create Draft | Auto | Create `docs/architecture.md` from template |
| 3 | Scan & Fill | Auto | Launch 6 parallel sub-agents, aggregate results |
| 4 | Review | Interactive | Present document, gather feedback, iterate |
| 5 | Finalize | Auto | Mark complete |

## Parallel Scanning (Step 3)

Use the Agent tool to spawn 6 sub-agents simultaneously:

| Agent | Section | Focus |
|-------|---------|-------|
| 1 | High-Level Stack | Backend, DB, Async, Infrastructure |
| 2 | Logic & Feature Mapping | PRD features to search keywords |
| 3 | Data Model Strategy | Domain entities (abstracted) |
| 4 | API Interface Strategy | API types and categories |
| 5 | Coding Patterns | Patterns and search keywords |
| 6 | Testing Strategy | Test stack and conventions |

See `references/sub-agent-missions.md` for detailed agent instructions.

## Key Principles

- HIGH-LEVEL ONLY: search keywords, pattern names — no code, no file paths
- Auto-detect project info — no config files needed
- All examples in templates are illustrative; adapt to the detected language and framework
- Iterate with user until they approve the content
- Thorough analysis — incomplete scans produce architecture docs that miss critical patterns, making them unreliable for agents navigating the codebase

## When to Re-run

Re-generate the architecture document after major refactors, new feature areas, significant dependency changes, or when onboarding to a codebase that has evolved substantially since the last run.

## Start

Read `references/steps.md` and follow it from Step 1.

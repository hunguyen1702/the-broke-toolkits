---
name: generate-prd
description: >-
  Generate a Product Requirements Document (PRD) through codebase analysis and
  user input. Use this skill when creating a PRD, documenting project
  requirements, capturing business goals, or defining target users and features.
  Also triggers on phrases like "create a PRD", "document requirements",
  "project requirements", "what does this project do", or "generate project
  documentation".
---

# Generate PRD

Generate a lightweight PRD that helps developers and AI agents understand
the project context. Focuses on business requirements and user needs, NOT
code or technical implementation details.

## Output

- `docs/prd.md` (default, user can choose a different path) — Project overview, target users, scope, user stories, features, success criteria, constraints

## Critical Constraint

This PRD must contain NO code-related or technical information. Keep focus on:
- Business goals and objectives
- User needs and target audience
- Scope boundaries (in/out)
- User stories and workflows
- Features and requirements (from user perspective)
- Success criteria and measurable outcomes
- Constraints and assumptions

## Workflow Overview

| Step | Name | Mode | Description |
|------|------|------|-------------|
| 1 | Check Existing | Auto | Look for existing PRD, offer update/regenerate/view/cancel |
| 2 | Gather Context | Interactive | Read README, ask user about project purpose/users/problem |
| 3 | Detect Project Type | Auto | Greenfield vs brownfield classification |
| 4 | Scan Codebase | Auto (brownfield only) | Identify user-facing features from code |
| 5 | Generate PRD | Auto | Fill template sections with gathered info |
| 6 | Review Cycle | Interactive | Present draft, iterate on user feedback |
| 7 | Finalize | Auto | Save PRD to confirmed path |

## Key Principles

- Business-focused: WHAT and WHO, never HOW (technically)
- Auto-detect project info from README, package.json, etc.
- Brownfield projects get codebase scanning for user-facing features; greenfield relies on user input
- Scale depth to project complexity — small tools get concise PRDs
- Iterate with user until they approve the content
- No persona, no config files needed — sensible defaults throughout

## Start

Read `references/steps.md` and follow it from Step 1.

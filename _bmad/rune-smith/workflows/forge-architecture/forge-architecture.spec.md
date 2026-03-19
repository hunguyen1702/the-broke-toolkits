# Forge Architecture Workflow Specification

## Overview

**Name:** forge-architecture
**Module:** rune-smith
**Agent:** Mimir (God of Wisdom)
**Type:** Single-session, Create-only, Document-producing

## Purpose

Generate a high-level Architecture Document that provides context for agents working with the codebase. The document uses **search keywords** instead of specific file paths, serving as a "thinking map" rather than a "code index".

## Prerequisites

- PRD document must exist (auto-detected or user-provided)
- If no PRD exists, user should run `forge-prd` workflow first

## Inputs

| Input | Required | Source |
|-------|----------|--------|
| PRD document | Yes | `{saga_folder}/prd.md` or user-provided path |

## Output

| Output | Location | Format |
|--------|----------|--------|
| Architecture Document | `{saga_folder}/architecture.md` | Structured (6 sections) |

## Workflow Steps

| Step | Name | Purpose | Menu |
|------|------|---------|------|
| 01 | detect-prd | Find and validate PRD document | Auto/Gate |
| 02 | create-draft | Create architecture.md with template | Auto-proceed |
| 03 | scan-and-fill | 6 sub-agents scan codebase and fill sections | C only |
| 04 | review | User review with A/P/C options | A/P/C Loop |
| 05 | finalize | Update status to complete | None |

## Critical Principles

### HIGH-LEVEL ONLY

- ❌ **FORBIDDEN:** Code snippets, specific file paths, implementation details
- ✅ **REQUIRED:** High-level concepts, search keywords, pattern names, responsibility descriptions

### Sub-Agent Strategy (Step 3)

6 parallel sub-agents, one per section:
1. High-Level Stack
2. Logic & Feature Mapping
3. Data Model Strategy
4. API Interface Strategy
5. Coding Patterns & Search Strategy
6. Testing Strategy & Tech Stack

## Architecture Document Sections

1. **High-Level Stack** - Backend, Database, Async, Infrastructure
2. **Logic & Feature Mapping** - PRD features → search keywords table
3. **Data Model Strategy** - Core domain entities
4. **API Interface Strategy** - API types and purposes
5. **Coding Patterns & Search Strategy** - Patterns with search keywords
6. **Testing Strategy & Tech Stack** - Test framework and conventions

## Success Criteria

- [ ] Architecture document complete with all 6 sections
- [ ] Feature mapping uses search keywords (not file paths)
- [ ] Coding patterns identified with correct search terms
- [ ] Other agents can use document to navigate codebase

# Mimir Sidecar — Tool Usage Instructions

When acting as Mimir (Context Keeper), follow these tool guidelines for every task.

## Code finding, editing and discovery to understand the context:

- **Serena MCP** — Use for all code editing and code discovery:
  - Edit code via Serena’s symbolic or file-based editing tools.
  - Find code by names, symbols, and patterns (e.g. `find_symbol`, `get_symbols_overview`, `search_for_pattern`).
  - Prefer Serena over raw file reads when navigating or changing the codebase.

## After code changes

- **Knowledge-graph `index_project`** — After any code update:
  - Call the knowledge-graph **index_project** (or equivalent) tool so the graph stays in sync with the codebase.
  - Do this as part of your post-edit workflow so future lookups remain accurate.

## Quick codebase understanding

- **Knowledge-graph repo-map** — When you need a fast, high-level picture:
  - Use the knowledge-graph **repo-map** (or equivalent) to grasp structure and relationships quickly.
  - Use it at the start of saga work or when switching context to a new area of the codebase.

---

Keep these instructions in mind for every saga and documentation task. When in doubt, use the knowledge-graph for code understanding and Serena for editing; after edits, refresh the knowledge-graph with index_project.

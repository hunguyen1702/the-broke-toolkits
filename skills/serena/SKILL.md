---
name: serena
description: >-
  How to use Serena MCP tools for semantic code navigation, symbol lookup, pattern search, and code editing.
  Use this skill whenever you need to explore a codebase using Serena, find symbols or references,
  search for code patterns, read or edit files through Serena's MCP tools, or when the user mentions
  Serena, semantic code tools, or language-server-powered code navigation. Also use this when you're
  unsure which Serena tool to pick for a code exploration or editing task, when you want to do a
  semantic rename across a project, find all callers of a function, trace symbol references,
  or need to switch between Serena's editing and planning modes.
---

# Serena Code Navigation & Editing

Serena provides language-server-powered tools for navigating and editing code semantically. These tools understand your code's structure — classes, functions, methods, references — rather than treating files as plain text.

## Deciding Which Tool to Use

Use this decision tree based on what you know and what you need:

```
What do you need?
│
├─ Find or understand a symbol (class, function, method, variable)?
│  ├─ Know the symbol name (or part of it)? → find_symbol
│  ├─ Want all symbols in a file at a glance? → get_symbols_overview
│  └─ Want to see what references/calls a symbol? → find_referencing_symbols
│
├─ Search for a pattern or string in the codebase?
│  └─ search_for_pattern (regex-powered, flexible file filtering)
│
├─ Find a file by name?
│  └─ find_file
│
├─ Browse directory contents?
│  └─ list_dir
│
├─ Read file contents?
│  └─ read_file (but prefer symbolic tools when looking for specific code)
│
├─ Edit code?
│  ├─ Replace an entire symbol definition? → replace_symbol_body
│  ├─ Insert code before/after a symbol? → insert_before_symbol / insert_after_symbol
│  ├─ Rename a symbol across the codebase? → rename_symbol
│  ├─ Change a few lines within a symbol? → replace_content (regex-based)
│  └─ Create a new file? → create_text_file
│
├─ Run a shell command? → execute_shell_command
│
└─ Change Serena's operating mode? → switch_modes
```

## Symbol Tools

These tools use the language server to understand code structure. They are more precise and efficient than reading raw files because they work with parsed symbols, not text.

### find_symbol

Search for a symbol globally or within a specific file. This is your primary tool for locating code.

**Parameters:**
- `name_path` (required): A `/`-separated path identifying the symbol. Supports substring matching. Examples:
  - `"Foo"` — find a class/function named Foo
  - `"Foo/bar"` — find method `bar` inside class `Foo`
  - `"Foo/__init__"` — find the constructor of class `Foo`
- `relative_path` (optional): Restrict search to a specific file
- `include_body` (default: false): Whether to return the full source code of the symbol. Set to `true` only when you need to read or edit the implementation.
- `depth` (optional): How many levels of children to include. Use `depth=1` to see a class's methods without loading their bodies.

**Best practices:**
- Start with `include_body=false` to discover symbols, then selectively load bodies you need. This avoids pulling large amounts of code into context unnecessarily.
- Use `depth=1` on a class to see its methods before deciding which ones to read in full.
- If you're unsure about the exact name, use a substring — `find_symbol` does substring matching on the name_path.

### get_symbols_overview

Get a high-level view of all top-level symbols in a file. Returns symbol names, types, and locations without source code.

**Parameters:**
- `relative_path` (required): Path to the file to analyze

**When to use:** When you want to understand a file's structure at a glance — what classes, functions, and constants it defines — before diving deeper with `find_symbol`.

### find_referencing_symbols

Find all places in the codebase that reference a given symbol. Returns code snippets around each reference along with symbolic information.

**Parameters:**
- `name_path` (required): The symbol to find references for (same format as `find_symbol`)
- `relative_path` (required): The file containing the symbol

**When to use:** When you need to understand how a symbol is used, check if it's safe to modify, or find all callers of a function. This is essential before editing a symbol — it tells you whether your change is backward-compatible or if you need to update references.

### replace_symbol_body

Replace the entire definition of a symbol with new code.

**Parameters:**
- `name_path` (required): Identifies the symbol to replace
- `relative_path` (required): File containing the symbol
- `body` (required): The new symbol body, including the signature line. Does NOT include preceding docstrings/comments or imports.

**When to use:** When you need to rewrite a function, method, or class entirely. First retrieve the current body with `find_symbol` (with `include_body=true`) so you know exactly what you're replacing.

**Important:** Always check references with `find_referencing_symbols` before replacing a symbol to ensure your change doesn't break callers, unless the change is explicitly backward-compatible.

### insert_before_symbol / insert_after_symbol

Insert new code immediately before or after a symbol's definition.

**Parameters:**
- `name_path` (required): The reference symbol
- `relative_path` (required): File containing the symbol
- `content` (required): The code to insert

**When to use:**
- `insert_after_symbol` with the last top-level symbol in a file to append code at the end
- `insert_before_symbol` with the first top-level symbol in a file to prepend code at the beginning
- Adding a new method near related methods in a class

### rename_symbol

Rename a symbol across the entire codebase — updates the definition and all references.

**Parameters:**
- `name_path` (required): The symbol to rename
- `relative_path` (required): File containing the symbol
- `new_name` (required): The new name

**When to use:** When refactoring names. This is a language-server-powered rename, so it's much safer than find-and-replace — it only renames the actual symbol, not string coincidences.

## File Tools

These tools work at the file level rather than the symbol level. Use them when you need to work with file contents directly, find files, or make targeted edits that don't map to whole symbols.

### search_for_pattern

Regex-powered search across the codebase. The most flexible discovery tool — searches file contents with powerful filtering.

**Parameters:**
- `substring_pattern` (required): Regex pattern. Compiled with DOTALL (dot matches newlines). Use non-greedy quantifiers (`.*?`) to avoid over-matching.
- `relative_path` (optional): Restrict search to a directory or file
- `paths_include_glob` (optional): Glob to include specific files (e.g., `"*.py"`, `"src/**/*.ts"`)
- `paths_exclude_glob` (optional): Glob to exclude files (e.g., `"*test*"`, `"**/*_generated.py"`)
- `restrict_search_to_code_files` (default: false): Set `true` to only search files the language server can analyze
- `context_lines_before` / `context_lines_after` (default: 0): Lines of context around matches

**Best practices:**
- Don't start or end patterns with `.*` — it's already a substring search
- Use `restrict_search_to_code_files=true` when looking for code symbols
- Combine `relative_path` with glob patterns for highly targeted searches
- If results are too large, make the query stricter rather than increasing `max_answer_chars`

**When to use instead of symbol tools:** When searching for patterns that aren't symbols (string literals, comments, configuration values, HTML attributes), or when you don't know the symbol name and need to discover it from a code pattern.

### read_file

Read a file's contents, optionally a specific line range.

**Parameters:**
- `relative_path` (required): Path to the file
- `start_line` (default: 0): 0-based first line to read
- `end_line` (optional): 0-based last line to read (inclusive)

**When to use:** When you need the full text of a file (config files, non-code files) or a specific line range. For code files, prefer `find_symbol` or `get_symbols_overview` first — they give you structured information without loading entire files.

### find_file

Find files by name or pattern.

**Parameters:**
- `file_name` (required): Name or pattern to search for
- `relative_path` (optional): Restrict search to a directory

**When to use:** When you know (part of) a filename but not its location.

### list_dir

List files and directories.

**Parameters:**
- `relative_path` (required): Directory to list (use `"."` for project root)
- `recursive` (required): Whether to scan subdirectories
- `skip_ignored_files` (default: false): Whether to skip gitignored files

**When to use:** When exploring project structure or checking what files exist in a directory.

### create_text_file

Create a new file or overwrite an existing one.

**Parameters:**
- `relative_path` (required): Path for the new file
- `content` (required): File contents

### replace_content

Regex-based find-and-replace within a file. Your primary tool for small, targeted edits — changing a few lines without replacing an entire symbol.

**Parameters:**
- `relative_path` (required): File to edit
- `needle` (required): The string or regex pattern to search for. In `"literal"` mode it matches exactly; in `"regex"` mode it's a Python regex with DOTALL and MULTILINE enabled.
- `repl` (required): The replacement string. In regex mode, use `$!1`, `$!2`, etc. for backreferences to captured groups.
- `mode` (required): Either `"literal"` or `"regex"`.
- `allow_multiple_occurrences` (default: false): If false and the needle matches more than once, the tool returns an error instead of replacing — this protects against unintended bulk edits.

**Best practices:**
- Prefer regex mode with wildcards like `beginning.*?end` to avoid quoting large blocks of code verbatim. This is faster and less error-prone than literal matching for multi-line edits.
- If a regex unexpectedly matches multiple locations, you'll get a safe error — just tighten the pattern and retry.
- Use literal mode for simple, unambiguous single-line replacements where regex overhead isn't needed.

**When to use:** When you need to change a few lines within a larger function or class, where `replace_symbol_body` would be overkill. Also useful for non-code files (config, markdown, etc.).

## Session Tools

These tools manage Serena's operating state rather than navigating or editing code directly.

### switch_modes

Change Serena's operating modes. Serena has two axis of modes that can be combined:

- **Interaction**: `"interactive"` (ask questions, explain reasoning) vs `"one-shot"` (execute silently)
- **Capability**: `"editing"` (can modify files) vs `"planning"` (read-only, for analysis and design)

**Parameters:**
- `modes` (required): Array of mode names to activate, e.g. `["editing", "interactive"]` or `["planning", "one-shot"]`

**When to use:** Switch to `"planning"` mode when you need to analyze architecture or design changes without risk of accidental edits. Switch back to `"editing"` when ready to make changes. Use `"one-shot"` for batch operations where interactive confirmation would slow things down.

### execute_shell_command

Run a shell command and return its output. The command runs in the project root by default.

**Parameters:**
- `command` (required): The shell command to execute
- `cwd` (optional): Working directory (defaults to project root)
- `capture_stderr` (default: true): Whether to include stderr in the output
- `max_answer_chars` (default: -1): Output length limit; -1 uses the default. Only increase as a last resort.

**When to use:** For running build commands, test suites, linters, git operations, or any other shell task during a Serena session. Do not use for long-running processes (servers) or interactive commands.

## Workflow Examples

### Exploring Unfamiliar Code

A typical workflow for understanding a new area of the codebase:

1. **Orient** — `list_dir` to see project structure, then `get_symbols_overview` on key files
2. **Discover** — `find_symbol` with partial names or `search_for_pattern` to locate relevant code
3. **Understand** — `find_symbol` with `include_body=true` on specific symbols, `find_referencing_symbols` to trace usage
4. **Edit** — `replace_symbol_body` for full rewrites, `replace_content` for surgical changes, `rename_symbol` for refactoring

### Safely Renaming a Method

1. Find the method: `find_symbol` with `name_path="MyClass/old_name"`, `include_body=false`
2. Check all callers: `find_referencing_symbols` with the same name_path and relative_path
3. Rename: `rename_symbol` with `new_name="new_name"` — this updates the definition and every reference in one step

### Surgical Edit Inside a Large Function

1. Read the function body: `find_symbol` with `name_path="process_data"`, `include_body=true`
2. Make a targeted change with `replace_content`:
   - `mode="regex"`, `needle="timeout=30.*?retries=3"`, `repl="timeout=60, retries=5"`
   - If the pattern matches in multiple places, you'll get a safe error — tighten the regex and retry

### Adding a New Function to an Existing File

1. Check the file structure: `get_symbols_overview` to find the last top-level symbol
2. Insert after it: `insert_after_symbol` with the last symbol's name_path and your new function code

## Troubleshooting

**`find_symbol` returns no results:**
- The name might not match — try a shorter substring or use `search_for_pattern` as a fallback to locate the code by content, then use the file path with `find_symbol`.
- The file might not be a language the language server supports. Fall back to `read_file` and `replace_content`.

**`replace_symbol_body` fails:**
- The symbol's body may have changed since you last read it. Re-read with `find_symbol` (`include_body=true`) and try again with the current state.

**`replace_content` regex matches too many locations:**
- This is by design — with `allow_multiple_occurrences=false`, you're protected from accidental bulk edits. Add more context to the needle pattern to make it unique, or set `allow_multiple_occurrences=true` if you genuinely want to replace all matches.

**Edits aren't being applied:**
- Serena may be in `"planning"` mode (read-only). Use `switch_modes` to switch to `["editing", "interactive"]`.

## Key Principles

- **Prefer symbolic tools over raw file reads.** `find_symbol` and `get_symbols_overview` give structured results without flooding context with irrelevant code.
- **Load incrementally.** Start with overviews (`include_body=false`, `depth=1`), then drill into what you need. Reading entire files should be a last resort for code files.
- **Check references before editing.** Use `find_referencing_symbols` before modifying any symbol to understand the impact.
- **Use the right granularity.** `replace_symbol_body` for whole symbols, `replace_content` for lines within symbols, `rename_symbol` for cross-codebase name changes.
- **Use regex wildcards in replace_content.** Patterns like `start.*?end` avoid quoting large code blocks and are less brittle than literal matching.

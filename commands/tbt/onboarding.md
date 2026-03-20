---
description: Set up and onboard a project with Serena for semantic code navigation. Use when you need to initialize Serena in a new project or re-index an existing one.
---

# Serena Project Onboarding

Guide the user through setting up Serena for semantic code navigation in the current project. Follow these steps in order.

## Step 1: Check onboarding status

Call `mcp__plugin_serena_serena__check_onboarding_performed` to determine the current state.

Interpret the result:

- **If the tool returns an error or indicates no project is configured** — go to Step 2 (Project Creation).
- **If the project exists but onboarding was NOT performed** — go to Step 3 (Index & Onboard).
- **If onboarding was already performed** — go to Step 4 (Already Onboarded).

## Step 2: Project Creation

The project is not registered with Serena yet. Tell the user you are creating a Serena project for this directory.

Run this command via the Bash tool:

```bash
uvx --from git+https://github.com/oraios/serena serena project create
```

This is an **interactive command** — it will ask for the project path, name, and language server configuration. Let it run and allow the user to interact with the prompts.

After creation completes, activate the project:

1. Call `mcp__plugin_serena_serena__activate_project` with the current working directory path as the `project` parameter.
2. If activation succeeds, proceed to Step 3.
3. If activation fails, report the error and ask the user to check their Serena configuration.

## Step 3: Index & Onboard

The project exists but needs indexing and onboarding.

1. Run the index command via Bash to build/rebuild the code index:

```bash
uvx --from git+https://github.com/oraios/serena serena project index
```

2. After indexing completes, call `mcp__plugin_serena_serena__onboarding` to perform onboarding. This generates the project's onboarding information (architecture overview, key symbols, etc.).

3. Report to the user that onboarding is complete and Serena's semantic code tools are now available.

## Step 4: Already Onboarded

The project is already set up. Inform the user that Serena is ready.

Ask if they want to **re-index** the project (useful after major code changes). If yes, run:

```bash
uvx --from git+https://github.com/oraios/serena serena project index
```

Then confirm the index is up to date.

## Troubleshooting

- If `uvx` is not found, tell the user to install it: `pip install uv` or `brew install uv`
- If the language server fails to start, suggest checking that the project's language tooling is installed (e.g., `pyright` for Python, `typescript-language-server` for TypeScript)
- If activation fails with "project not found", the project name in Serena's config may not match — suggest running `serena project list` to see registered projects

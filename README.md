# the-broke-toolkits

Personal productivity toolkits for Claude Code.

## Local Skills

| Skill | Purpose |
|-------|---------|
| `brainstorming` | Structured ideation sessions with 30+ idea techniques |
| `codex-dispatch` | Delegate tasks to OpenAI Codex via codex-mcp |
| `generate-architecture` | Generate architecture docs from PRD + codebase analysis |
| `generate-prd` | Generate PRD through codebase scan + user input |
| `new-spec` | 5-step feature planning: discovery → analysis → spec |
| `serena` | Guide for Serena MCP semantic code navigation & editing |

## External Skills

Installed via `skills-lock.json`.

| Skill | Source | Purpose |
|-------|--------|---------|
| `beads` | `steveyegge/beads` | Dolt-powered issue tracker for multi-session work |
| `plugin-forge` | `softaworks/agent-toolkit` | Create and publish Claude Code plugins |
| `skill-creator` | `anthropics/skills` | Create, eval, and benchmark skills |

## Local Agents

| Agent | Model | Purpose |
|-------|-------|---------|
| `code-implementation` | sonnet | Disciplined implementation — exact, minimal changes |
| `exploration-agent` | haiku | Read-only codebase exploration |
| `cross-reviewer` | — | Code review with cross-model perspective |

## Dependencies

| Dependency | Purpose |
|------------|---------|
| **Serena** | Language-server-powered semantic code navigation (`plugin:serena`) |
| **Codex CLI** | OpenAI Codex via `mcp__codex-mcp__codex` tool |
| **Beads** | Dolt-powered issue tracker (auto-installed as external skill) |

## External Workflow Plugins

- **GSD (Get Shit Done)** — project roadmap + phased execution workflow

## Installation

```bash
/plugin install hunguyen1702/the-broke-toolkits
```

See [AGENTS.md](./AGENTS.md) for beads usage guide.

## License

MIT

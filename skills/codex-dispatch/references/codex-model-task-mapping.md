# Codex Model → Task Mapping

Use effort level to pick a model. When in doubt, prefer the medium-effort model.

| Effort | Model | Suitable tasks |
|--------|-------|----------------|
| **low** | `gpt-5.1-codex-mini` | Quick patches, boilerplate, simple test updates, small focused edits where speed and cost matter |
| **medium** | `gpt-5.4-mini` | Typical feature work, routine debugging, writing tests, editing scripts, fast iteration |
| **high** | `gpt-5.4` | Multi-file refactors, architecture changes, hard bugs, end-to-end features, high-risk code review |

Specialty models:

| Model | Best for |
|-------|----------|
| `gpt-5.3-codex` | Agentic coding workflows, repo-wide edits, autonomous bug fixing, terminal-heavy tasks |
| `gpt-5.2-codex` | Long-running multi-step plans, difficult debugging, coordinated changes across modules |
| `gpt-5.2` | Mixed coding and analysis, technical planning, long-horizon workflows beyond pure coding |
| `gpt-5.1-codex-max` | Deep reasoning on codebases, performance investigations, solving hard bugs with strong coding focus |

> If the user specifies a model, pass it directly via `model:` and omit `effort:`.

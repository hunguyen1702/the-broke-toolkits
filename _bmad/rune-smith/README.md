# RMTN Developer Suite

A 'Senior Developer in a Box' for elite solo developers.

Automates context management and enforces a 'Plan -> Execute' workflow.

---

## Overview

A "Senior Developer in a Box" that automates context-keeping and planning overhead, allowing a solo developer to move with the speed and quality of a full team. The "Standard of Excellence for Solo Devs" enforces a "Plan → Execute" discipline with automated context management.

---

## Installation

```bash
bmad install rune-smith
```

---

## Quick Start

1.  **Onboard:** Run `[FP] Forge PRD` then `[FA] Forge Architecture` with Mimir to generate your Saga (PRD/Arch).
2.  **Plan:** Use `[NQ] New Quest` with Thor to plan your first feature.
3.  **Execute:** Run `[EX] Execute Quest` to implement the plan.

**For detailed documentation, see [docs/](docs/).**

---

## Components

### Agents

- **Mimir (The Sage):** Context Keeper, Analyst.
- **Thor (The Builder):** Implementation, Execution.

### Workflows

- **Forge PRD:** Generate PRD document from codebase analysis and user input.
- **Forge Architecture:** Generate Architecture document from PRD and codebase.
- **New Quest:** Plans a new feature (Approach scoring + Tech Spec).
- **Execute Quest:** Implements a planned Quest step-by-step.
- **Update Saga:** Updates Saga based on completed Quests.
- **Quick Fix:** Rapidly fixes bugs without full Quest ceremony.

---

## Configuration

The module supports these configuration options (set during installation):

- `saga_folder`: Where should the Saga (Context/Arch) be stored?
- `quests_folder`: Where should Quests be stored?

---

## Module Structure

```
rune-smith/
├── module.yaml
├── README.md
├── TODO.md
├── docs/
│   ├── getting-started.md
│   ├── agents.md
│   ├── workflows.md
│   └── examples.md
├── agents/
│   ├── mimir.agent.yaml
│   ├── thor.agent.yaml
│   ├── thor-sidecar/
│   ├── mimir.spec.md
│   └── thor.spec.md
├── workflows/
│   ├── forge-prd/        (workflow.md + steps/)
│   ├── forge-architecture/
│   ├── new-quest/
│   ├── execute-quest/
│   ├── update-saga/
│   └── quick-fix/
└── _module-installer/
```

---

## Documentation

For detailed user guides and documentation, see the **[docs/](docs/)** folder:
- [Getting Started](docs/getting-started.md)
- [Agents Reference](docs/agents.md)
- [Workflows Reference](docs/workflows.md)
- [Examples](docs/examples.md)

---

## Development Status

This module has core components built and is ready for installation testing:

- [x] Agents: 2 agents (Mimir, Thor) — in `agents/*.agent.yaml`
- [x] Workflows: 6 workflows (forge-prd, forge-architecture, new-quest, execute-quest, update-saga, quick-fix) — in `workflows/*/workflow.md` and `workflows/*/steps/`

See TODO.md for detailed status and next steps (installation testing, docs).

---

## Author

Created via BMAD Module workflow

---

## License

Part of the BMAD framework.

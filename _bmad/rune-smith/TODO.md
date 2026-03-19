# TODO: RMTN Developer Suite

Development roadmap for rune-smith module.

---

## Agents to Build

- [x] Mimir (Context Keeper)
  - Use: `bmad:bmb:agents:agent-builder`
  - Spec: `agents/mimir.spec.md`
  - Built: `agents/mimir.agent.yaml`
- [x] Thor (Implementation Lead)
  - Use: `bmad:bmb:agents:agent-builder`
  - Spec: `agents/thor.spec.md`
  - Built: `agents/thor.agent.yaml`, `agents/thor-sidecar/`

---

## Workflows to Build

- [x] forge-prd
  - Use: `bmad:bmb:workflows:workflow` or `/workflow`
  - Spec: `workflows/forge-prd/forge-prd.spec.md`
  - Built: `workflows/forge-prd/workflow.md`, `workflows/forge-prd/steps/`
- [x] forge-architecture
  - Use: `bmad:bmb:workflows:workflow` or `/workflow`
  - Spec: `workflows/forge-architecture/forge-architecture.spec.md`
  - Built: `workflows/forge-architecture/workflow.md`, `workflows/forge-architecture/steps/`
- [x] new-quest
  - Use: `bmad:bmb:workflows:workflow` or `/workflow`
  - Spec: `workflows/new-quest/new-quest.spec.md`
  - Built: `workflows/new-quest/workflow.md`, `workflows/new-quest/steps/`
- [x] execute-quest
  - Use: `bmad:bmb:workflows:workflow` or `/workflow`
  - Spec: `workflows/execute-quest/execute-quest.spec.md`
  - Built: `workflows/execute-quest/workflow.md`, `workflows/execute-quest/steps/`
- [x] update-saga
  - Use: `bmad:bmb:workflows:workflow` or `/workflow`
  - Spec: `workflows/update-saga/update-saga.spec.md`
  - Built: `workflows/update-saga/workflow.md`, `workflows/update-saga/steps/`
- [x] quick-fix
  - Use: `bmad:bmb:workflows:workflow` or `/workflow`
  - Spec: `workflows/quick-fix/quick-fix.spec.md`
  - Built: `workflows/quick-fix/workflow.md`, `workflows/quick-fix/steps/`

---

## Installation Testing

- [ ] Test installation with `bmad install`
- [ ] Verify module.yaml prompts work correctly
- [ ] Test installer.js (if present)
- [ ] Test IDE-specific handlers (if present)

---

## Documentation

- [ ] Complete README.md with usage examples
- [ ] Enhance docs/ folder with more guides
- [ ] Add troubleshooting section
- [ ] Document configuration options

---

## Next Steps

1. ~~Build agents using create-agent workflow~~ (done: agents in `agents/*.agent.yaml`)
2. ~~Build workflows using create-workflow workflow~~ (done: 6 workflows with steps)
3. Test installation and functionality (`bmad install rune-smith`)
4. Iterate based on testing

---

_Last updated: 2026-01-30_

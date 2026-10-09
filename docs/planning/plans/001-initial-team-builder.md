## Plan: Initial public Nexus team builder and sharing workflow

Build a compact public tournament utility with immutable official data, custom browser drafts, targeted swaps, share URLs and Discord exports. Bootstrap durable repository planning modeled on papis-power-pull's feature/relic-optimizer-v2 branch. Publish through Sites with GitHub as authoritative source and Pages as a secondary deployment.

**Branch Context**
- Repo: JustinMass/nexus-team-builder
- Base Branch: main
- Working Branch: main
- Tracking Branch: origin/main
- Current checkpoint/base SHA: new repository, no base commit

**Phase Checklist**
- [x] Phase 1: Scaffold and canonical model
- [x] Phase 2: Official and inactive behavior
- [x] Phase 3: Moves, swaps, reorder and history
- [x] Phase 4: Persistence and sharing
- [x] Phase 5: Exports and responsive working UI
- [ ] Phase 6: Validation, documentation and publication

**Phases**
1. **Phase 1: Scaffold and canonical model**
   - **Objective:** Establish Vite/React/TypeScript, centralized T5 config, 30 players and validated source definitions.
   - **Files/Functions to Modify/Create:** package/config, src/config, src/data, domain/validation.
   - **Tests to Write:** totals, compositions, class mapping/colors, invalid canonical data.
   - **Tasks:**
      - [x] Implement and validate canonical source.
   - **Status:** Complete
   - **Review/Validation:** PASS. Canonical/move/history slice 28/28; persistence/export slice 15/15; UI slice 8/8. Full suite 51/51, strict typecheck and build pass. Implementation SHA recorded at publication checkpoint.
2. **Phase 2: Official and inactive behavior**
   - **Objective:** Clone official state; top-active generation skips inactive players generically.
   - **Files/Functions to Modify/Create:** domain/lineup, calculations.
   - **Tests to Write:** inactive reserve, 16th active, immutable official state/reset.
   - **Tasks:**
      - [x] Implement official/default behavior and tests.
   - **Status:** Complete
   - **Review/Validation:** PASS. Canonical/move/history slice 28/28; persistence/export slice 15/15; UI slice 8/8. Full suite 51/51, strict typecheck and build pass. Implementation SHA recorded at publication checkpoint.
3. **Phase 3: Moves, swaps, reorder and history**
   - **Objective:** Safe mouse/touch DnD and selectors, targeted full-team swap, undo/redo/reset.
   - **Files/Functions to Modify/Create:** domain/lineup, hooks/useLineup, components.
   - **Tests to Write:** all move directions, swaps, full rejection, reorder, history.
   - **Tasks:**
      - [x] Implement transitions and history; run focused tests.
   - **Status:** Complete
   - **Review/Validation:** PASS. Canonical/move/history slice 28/28; persistence/export slice 15/15; UI slice 8/8. Full suite 51/51, strict typecheck and build pass. Implementation SHA recorded at publication checkpoint.
4. **Phase 4: Persistence and sharing**
   - **Objective:** Validate versioned local drafts and deterministic URL hashes without player facts.
   - **Files/Functions to Modify/Create:** domain/serialization, hooks/useLineup.
   - **Tests to Write:** round trips, invalid input fallbacks, reset/discard, shared precedence.
   - **Tasks:**
      - [x] Implement storage/share flows and tests.
   - **Status:** Complete
   - **Review/Validation:** PASS. Canonical/move/history slice 28/28; persistence/export slice 15/15; UI slice 8/8. Full suite 51/51, strict typecheck and build pass. Implementation SHA recorded at publication checkpoint.
5. **Phase 5: Exports and responsive working UI**
   - **Objective:** Dense two-column desktop/one-column mobile teams, reserve pool, totals/classes and export utilities.
   - **Files/Functions to Modify/Create:** components, App/style, discordExport.
   - **Tests to Write:** current-state export totals/classes/inactive grammar, UI actions.
   - **Tasks:**
      - [x] Implement exports and responsive accessible controls.
   - **Status:** Complete
   - **Review/Validation:** PASS. Canonical/move/history slice 28/28; persistence/export slice 15/15; UI slice 8/8. Full suite 51/51, strict typecheck and build pass. Implementation SHA recorded at publication checkpoint.
6. **Phase 6: Validation, documentation and publication**
   - **Objective:** Document maintenance and finish public deployment from verified source.
   - **Files/Functions to Modify/Create:** README, .github/workflows, .openai/hosting, this plan and roadmap.
   - **Tests to Write:** full suite, typecheck, canonical build checks, diff/status.
   - **Tasks:**
      - [ ] Run full validation, document actual results, commit/push, publish and verify.
   - **Status:** In progress
   - **Review/Validation:** Pending

**Open Questions**
- Hosting adaptation resolved by user: normal Sites hosting is accepted; GitHub remains source of truth. Preserve a secondary Pages workflow.

**Lessons**
- The Sites installer could not resolve npm on Windows -> invoke the installed npm CLI explicitly. Focused tests need subprocess permissions in this environment.
- Dependency audit found advisories in the initially selected test runner -> upgraded to Vitest 5.0.3; zero vulnerabilities remain.

**Final Summary**
- Overall result: In progress
- Final validation: Pending
- Remaining blockers: none known

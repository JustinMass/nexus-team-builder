## Plan: Initial public Nexus team builder and sharing workflow

Build a compact public tournament utility with immutable official data, custom browser drafts, targeted swaps, share URLs and Discord exports. Bootstrap durable repository planning modeled on papis-power-pull's feature/relic-optimizer-v2 branch. Publish through Sites with GitHub as authoritative source and Pages as a secondary deployment.

Historical completed Plan 001: the original Sites publication below records what was delivered at that checkpoint. Current hosting is superseded by [the roadmap's hosting authority](../NEXUS-ROADMAP.md): Cloudflare Pages is canonical, GitHub Pages is secondary, and the preserved ChatGPT Sites project is retired/private. Do not republish it during normal updates.

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
- [x] Phase 6: Validation, documentation and publication

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
      - [x] Run full validation, document actual results, commit/push, publish and verify.
   - **Status:** Complete
   - **Review/Validation:** PASS. 51 tests passed, 0 failed; npm run typecheck, npm run build (including canonical validation), git diff --check passed. No lint configured. Dependency audit zero vulnerabilities. Local preview HTTP 200; desktop/mobile layout inspected with no horizontal overflow. GitHub origin verified and initial commit df3a0ac0d810c2e46ee6365551d675faab08c539 pushed. GitHub Pages workflow 37869259364 succeeded. Public Sites version 1 deployed successfully from the same source SHA; completion checkpoint mirrors the final source and updated records.

**Open Questions**
- Hosting adaptation resolved by user: normal Sites hosting is accepted; GitHub remains source of truth. Preserve a secondary Pages workflow.

**Lessons**
- The Sites installer could not resolve npm on Windows -> invoke the installed npm CLI explicitly. Focused tests need subprocess permissions in this environment.
- Dependency audit found advisories in the initially selected test runner -> upgraded to Vitest 5.0.3; zero vulnerabilities remain.
- The bundled packager first lacked Bash, then interpreted a Windows drive letter as a remote archive -> supply Git Bash on PATH and TAR_OPTIONS=--force-local; validated packaging and publication succeeded. Expired Sites credentials were renewed for the same project, without creating another Site.
- DnD exposes its own accessibility status region -> scope interface feedback assertions by accessible name. Strict TypeScript caught collision-container lookup and action-union narrowing; corrected before full validation.

**Final Summary**
- Overall result: Complete. Requested canonical data, immutable official assignment, custom moves/swaps/history, inactive handling, local drafts, sharing, Discord/JSON export, responsive UI, durable planning, public repository and both deployments delivered. No Plan 002 created or executed.
- Final validation: 51 passing / 0 failing tests; strict typecheck, canonical validation, production build and git diff --check PASS. Lint not configured. No private screenshots, credentials or temporary artifacts tracked. Initial implementation SHA df3a0ac0d810c2e46ee6365551d675faab08c539; completion checkpoint is the commit containing this update (full SHA reported in handoff).
- Remaining blockers at Plan-001 completion: none. The then-current Sites deployment mirror was subsequently retired/private in the scoped hosting cleanup. Future updates follow the roadmap's current Cloudflare/GitHub Pages hosting authority, not the historical Sites workflow.

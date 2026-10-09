# Nexus Team Builder Roadmap

## Current checkpoint
- Repo: JustinMass/nexus-team-builder
- Base/working branch: main
- Tracking branch: origin/main
- Current implementation checkpoint: df3a0ac0d810c2e46ee6365551d675faab08c539 (initial implementation); final publication/continuity checkpoint is the commit containing this Plan-001 completion update. Resolve the latest full SHA with git rev-parse HEAD rather than storing a self-referential commit hash.
- Last completed plan: [001-initial-team-builder.md](plans/001-initial-team-builder.md)
- Active plan: none; Plan 001 complete
- Next expected work: STOP; await explicit user scope. No Plan 002 created or executed.
- Last validation: 51 tests passed / 0 failed; typecheck, canonical validation, production build and whitespace checks PASS. Lint not configured. Dependency audit zero vulnerabilities.
- Deployment URL/status: public Sites https://nexus-team-builder.jmass1991.chatgpt.site verified succeeded; GitHub Pages https://justinmass.github.io/nexus-team-builder/ deployed successfully by workflow 37869259364 from the initial implementation SHA. Both are republished from the completion checkpoint.

## Planning workflow
Automatically read roadmap and active plan before substantive work. Code/tests/data are executable truth; roadmap is scope/history/continuity truth. Important context lives in the repository, not only chat. One plan is one logical chunk; update it instead of replacing it. Commit planning and implementation together when practical. Stop before the next plan.

## Product invariants
Sword x Staff Nexus Tournament: four teams of at most four players, with all other players in ordered reserves. Official teams are initially the 16 highest-power active players. Morganna remains rank 16, 29.8M, Templar, inactive, initially in reserves; SeukuMiyadora is the 16th active player. Manual inactive assignment is allowed with a persistent badge. Initial totals: 175.7M, 135.0M, 125.5M, 120.2M, computed at runtime.

Official imported assignment is immutable. Browser custom/shared state never publishes an official change. Full-team player-target drops swap; full-team background drops reject. Versioned validated local drafts and URL hashes encode IDs/ordering only, never player facts. Discord export reflects visible state and inactive status. No backend/database/authentication for v1.

## Canonical sources
- src/config/season.ts: current T5 classes, prior T4 mapping, canonical colors and Discord emojis. Templar #FD8805, Ravager #FF6162, Magister #658BFA, Prophet #44D1AB.
- src/data/players.ts: supplied current 30 player IDs/ranks/names/power in millions/class/status.
- src/data/officialLineup.ts: separate official assignments and version/date.
- Source prompt: user-supplied current rankings and requirements, 2026-10-08. No raw screenshots are tracked.

## Completed / planned chunks
001 — initial team builder, sharing, exports, planning and publication (complete). Four team panels and reserves; safe DnD with full-team targeted swaps; mouse/touch/keyboard and selectors; official/custom/shared labels; undo/redo/reset; validated storage; deterministic share hashes; Discord and maintainer exports; source data and planning; public Sites and automatic Pages deployment.

## Deferred / possible future work
Official history, admin/editor workflow, Discord login, community lineups/voting, additional seasons and historical mappings are deferred, not planned. Do not invent a Plan 002.

## Project lessons
- Windows publication requires Git Bash on PATH and TAR_OPTIONS=--force-local so drive letters are interpreted as local paths. The Sites package helper and workflow then succeeded without modifying plugin code.
- The Sites dependency installer could not locate npm on this host; direct system npm CLI was used. Test/build subprocesses require the host's network/subprocess permission context.
- Audit the initial toolchain before handoff: Vitest was upgraded to 5.0.3 to remove reported advisories.

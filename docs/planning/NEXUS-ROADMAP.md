# Nexus Team Builder Roadmap

## Current checkpoint
- Repo: JustinMass/nexus-team-builder
- Base/working branch: main
- Tracking branch: origin/main
- Current checkpoint: the commit on main containing official version 2026-11-05.2 (parent baseline bc1e3a6434ce9014607ac07ab237435d205e564e). Resolve the checkpoint SHA with git log -1 --format=%H -- src/data/officialLineup.ts.
- Last completed plan: [001-initial-team-builder.md](plans/001-initial-team-builder.md)
- Active plan: none; Plan 001 complete
- Next expected work: STOP; await explicit user scope. No Plan 002 created or executed.
- Last validation (official lineup and draft capacity update): 52 tests passed; typecheck, production build, canonical data validation, and git diff --check passed. Lint is not configured.
- Deployment URL/status: canonical production https://nexus-team-builder.pages.dev/ (HTTP 200 verified); secondary/fallback https://justinmass.github.io/nexus-team-builder/. ChatGPT Sites is retired/private: owner-only custom access verified, no viewer groups or external visitors; unauthenticated old-URL request returned HTTP 401. Existing project preserved, no replacement or republication.

## Hosting authority
GitHub origin https://github.com/JustinMass/nexus-team-builder is authoritative. Cloudflare Pages deploys the canonical public website from main; use https://nexus-team-builder.pages.dev/ for normal users. GitHub Pages remains a secondary/fallback automatic deployment at https://justinmass.github.io/nexus-team-builder/. Normal updates validate source, commit and push main; the configured deployments handle publication.

Retired ChatGPT Sites hostname (management/history only, not a public destination): nexus-team-builder.jmass1991.chatgpt.site. Private access was verified through the authenticated Sites API and anonymous HTTP 401. The old project MUST NOT be republished without an explicit future user request, and normal app updates must not create another ChatGPT Site. `.openai/hosting.json` is retained unchanged because its exact project ID is useful for managing the retired project; it is not an active deployment target. Cloudflare and GitHub Pages settings were not changed during this scoped task. Plan 001 remains complete; no Plan 002 created or executed.

## Planning workflow
Automatically read roadmap and active plan before substantive work. Code/tests/data are executable truth; roadmap is scope/history/continuity truth. Important context lives in the repository, not only chat. One plan is one logical chunk; update it instead of replacing it. Commit planning and implementation together when practical. Stop before the next plan.

## Product invariants
Sword x Staff Nexus Tournament: four teams and ordered reserves. Official lineups and exported configurations allow at most four players per team; local drafts may temporarily exceed that limit. Official assignments are maintained separately from rankings and may be chosen manually by the maintainer. The initial Plan-001 lineup used the 16 highest-power active players; the optional top-active generator still skips inactive players generically. The current roster has 38 ranked active players; Morganna was removed after leaving the game.

Current official version 2026-11-05.2 (November 5, 2026) uses the approved assignments:
- Team 1: PapiJ, Flowzirrah, MidnightAria, Marisze — 364.6M.
- Team 2: Mookie, MrButtLips, SeukuMiyadora, Creggers — 345.9M.
- Team 3: AmeliaKitty, Sypher, KeresChar, KitKat — 309.7M.
- Team 4: Maciel, Serfenox, critify, Kevon — 276.0M.
- Reserves: remaining ranked players in order, with JFG placed last as requested.

All totals are computed at runtime. Historical initial Plan-001 totals were 175.7M, 135.0M, 125.5M and 120.2M. Drafts and shared links with the current roster retain their assignments. Drafts or links containing removed roster IDs are rejected safely; Reset to Official loads the current official lineup.

Official imported assignment is immutable. Browser custom/shared state never publishes an official change. Full-team player-target drops swap; selectors and background drops can add extra players. Local storage preserves oversized drafts. Discord copy, share links, and JSON export are blocked until teams are within the limit. Versioned validated local drafts and URL hashes encode IDs/ordering only, never player facts. Discord export reflects visible state and inactive status. No backend/database/authentication for v1.

## Canonical sources
- src/config/season.ts: current T5 classes, prior T4 mapping, canonical colors and Discord emojis. Templar #FD8805, Ravager #FF6162, Magister #658BFA, Prophet #44D1AB.
- src/data/players.ts: 38 current ranked players, with stable IDs, display names, power in millions, class and status.
- src/data/officialLineup.ts: separate official assignments and version/date.
- Source prompt: user-supplied November 5, 2026 server ranking snapshot; podium classes retained from the previous canonical data. No raw screenshots are tracked.

## Completed / planned chunks
001 — initial team builder, sharing, exports, planning and publication (complete). Four team panels and reserves; safe DnD with full-team targeted swaps; mouse/touch/keyboard and selectors; official/custom/shared labels; undo/redo/reset; validated storage; deterministic share hashes; Discord and maintainer exports; source data and planning; original public Sites and automatic GitHub Pages deployment. The original Sites hosting is historical and superseded by the current hosting authority above.

## Deferred / possible future work
Official history, admin/editor workflow, Discord login, community lineups/voting, additional seasons and historical mappings are deferred, not planned. Do not invent a Plan 002.

## Project lessons
- Windows publication requires Git Bash on PATH and TAR_OPTIONS=--force-local so drive letters are interpreted as local paths. The Sites package helper and workflow then succeeded without modifying plugin code.
- The Sites dependency installer could not locate npm on this host; direct system npm CLI was used. Test/build subprocesses require the host's network/subprocess permission context.
- Audit the initial toolchain before handoff: Vitest was upgraded to 5.0.3 to remove reported advisories.

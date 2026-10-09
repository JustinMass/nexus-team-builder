# Nexus Team Builder Roadmap

## Current checkpoint
- Repo: JustinMass/nexus-team-builder
- Base/working branch: main
- Tracking branch: origin/main
- Current implementation base: 0d4d437304c38869d353dd998d3faeb254f5b63f (hosting retirement); the current scoped official-lineup update is the commit containing version 2026-10-08.2. Resolve the latest full SHA with git rev-parse HEAD rather than storing a self-referential commit hash.
- Last completed plan: [001-initial-team-builder.md](plans/001-initial-team-builder.md)
- Active plan: none; Plan 001 complete
- Next expected work: STOP; await explicit user scope. No Plan 002 created or executed.
- Last validation (official lineup update, 2026-10-08): npm test 52 passed / 0 failed; npm run typecheck, npm run build (including canonical validation) and git diff --check PASS. Approved assignments/reserve ordering have an exact regression; totals, compositions, moves, reset, UI and Discord expectations are current. Rankings/player facts, UI behavior and hosting settings are unchanged. Lint and a separate validate script are not configured. Cloudflare's user-provided production view confirms automatic main deployments enabled and successful deployment of the preceding hosting-cleanup checkpoint.
- Deployment URL/status: canonical production https://nexus-team-builder.pages.dev/ (HTTP 200 verified); secondary/fallback https://justinmass.github.io/nexus-team-builder/. ChatGPT Sites is retired/private: owner-only custom access verified, no viewer groups or external visitors; unauthenticated old-URL request returned HTTP 401. Existing project preserved, no replacement or republication.

## Hosting authority
GitHub origin https://github.com/JustinMass/nexus-team-builder is authoritative. Cloudflare Pages deploys the canonical public website from main; use https://nexus-team-builder.pages.dev/ for normal users. GitHub Pages remains a secondary/fallback automatic deployment at https://justinmass.github.io/nexus-team-builder/. Normal updates validate source, commit and push main; the configured deployments handle publication.

Retired ChatGPT Sites hostname (management/history only, not a public destination): nexus-team-builder.jmass1991.chatgpt.site. Private access was verified through the authenticated Sites API and anonymous HTTP 401. The old project MUST NOT be republished without an explicit future user request, and normal app updates must not create another ChatGPT Site. `.openai/hosting.json` is retained unchanged because its exact project ID is useful for managing the retired project; it is not an active deployment target. Cloudflare and GitHub Pages settings were not changed during this scoped task. Plan 001 remains complete; no Plan 002 created or executed.

## Planning workflow
Automatically read roadmap and active plan before substantive work. Code/tests/data are executable truth; roadmap is scope/history/continuity truth. Important context lives in the repository, not only chat. One plan is one logical chunk; update it instead of replacing it. Commit planning and implementation together when practical. Stop before the next plan.

## Product invariants
Sword x Staff Nexus Tournament: four teams of at most four players, with all other players in ordered reserves. Official assignments are maintained separately from rankings and may be chosen manually by the maintainer. The initial Plan-001 lineup used the 16 highest-power active players; the optional top-active generator still skips inactive players generically. Morganna remains rank 16, 29.8M, Templar, inactive, in official reserves; SeukuMiyadora remains the 16th active player by power but is now an official reserve. Manual inactive assignment in custom drafts is allowed with a persistent badge.

Current official version 2026-10-08.2 (October 8, 2026) matches the user's approved exported assignment and ordering:
- Team 1: PapiJ, Morgause, Flowzirrah, Kevon — 149.9M.
- Team 2: Mookie, MrButtLips, Maciel, Caliman — 147.2M.
- Team 3: Sypher, AmeliaKitty, KeresChar, Lobuz — 124.2M.
- Team 4: KsHa, Creggers, Herbstwind, Anc1ent — 122.4M.
- Reserves: Morganna, Marisze, KitKat, JFG, SeukuMiyadora, Mdnght, Serfenox, CritFricker, aceek, NaChile, Kankudai, Saage, KingRunner, RedGoat.

All totals are computed at runtime. Historical initial Plan-001 totals were 175.7M, 135.0M, 125.5M and 120.2M. Player rankings/power/classes/status are unchanged by this official assignment update. Saved personal drafts and shared links retain their own assignments; Reset to Official loads the current official lineup. No Plan 002 created or executed.

Official imported assignment is immutable. Browser custom/shared state never publishes an official change. Full-team player-target drops swap; full-team background drops reject. Versioned validated local drafts and URL hashes encode IDs/ordering only, never player facts. Discord export reflects visible state and inactive status. No backend/database/authentication for v1.

## Canonical sources
- src/config/season.ts: current T5 classes, prior T4 mapping, canonical colors and Discord emojis. Templar #FD8805, Ravager #FF6162, Magister #658BFA, Prophet #44D1AB.
- src/data/players.ts: supplied current 30 player IDs/ranks/names/power in millions/class/status.
- src/data/officialLineup.ts: separate official assignments and version/date.
- Source prompt: user-supplied current rankings and requirements, 2026-10-08. No raw screenshots are tracked.

## Completed / planned chunks
001 — initial team builder, sharing, exports, planning and publication (complete). Four team panels and reserves; safe DnD with full-team targeted swaps; mouse/touch/keyboard and selectors; official/custom/shared labels; undo/redo/reset; validated storage; deterministic share hashes; Discord and maintainer exports; source data and planning; original public Sites and automatic GitHub Pages deployment. The original Sites hosting is historical and superseded by the current hosting authority above.

## Deferred / possible future work
Official history, admin/editor workflow, Discord login, community lineups/voting, additional seasons and historical mappings are deferred, not planned. Do not invent a Plan 002.

## Project lessons
- Windows publication requires Git Bash on PATH and TAR_OPTIONS=--force-local so drive letters are interpreted as local paths. The Sites package helper and workflow then succeeded without modifying plugin code.
- The Sites dependency installer could not locate npm on this host; direct system npm CLI was used. Test/build subprocesses require the host's network/subprocess permission context.
- Audit the initial toolchain before handoff: Vitest was upgraded to 5.0.3 to remove reported advisories.

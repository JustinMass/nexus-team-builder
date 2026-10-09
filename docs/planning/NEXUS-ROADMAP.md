# Nexus Team Builder Roadmap

## Current checkpoint
- Repo: JustinMass/nexus-team-builder
- Base/working branch: main
- Tracking branch: origin/main
- Current implementation checkpoint: bootstrap, not yet committed
- Last completed plan: none
- Active plan: [001-initial-team-builder.md](plans/001-initial-team-builder.md)
- Next expected work: execute Plan 001 only, then STOP
- Last validation: pending
- Deployment URL/status: Sites registration pending; GitHub Pages secondary

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
001 — initial team builder, sharing, exports, planning and publication (active).

## Deferred / possible future work
Official history, admin/editor workflow, Discord login, community lineups/voting, additional seasons and historical mappings are deferred, not planned. Do not invent a Plan 002.

## Project lessons

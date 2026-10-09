# Nexus repository instructions

Repository: JustinMass/nexus-team-builder. Base/working branch: main; tracking: origin/main. GitHub code/tests/data are executable truth. Verify branch and remote before substantive changes; preserve intentional local changes and ignored data.

## Project continuity
For substantive continuation automatically read docs/planning/NEXUS-ROADMAP.md and its active plan. Read docs/planning/WRITING-PLANS.md when creating/updating plan state. Inspect current code/tests/data; do not trust stale file names. Execute only the active plan unless the user changes scope. Update the SAME plan as tasks, phase state, validation, scope, lessons or blockers evolve; update the roadmap when checkpoint, ordering, active plan or invariants change. Stop before the next numbered plan unless explicitly asked. Tiny scoped fixes need no unrelated roadmap work.

## Quality and data
Use focused behavioral tests and TDD where practical: failing regression, smallest implementation, focused tests, full validation. Never invent player data, rankings, class mappings, activity or game rules. Report source conflicts explicitly. Keep official definitions immutable and browser drafts separate. Current class names/colors/emojis belong only in src/config/season.ts. Player facts belong in src/data/players.ts; official assignment belongs separately in src/data/officialLineup.ts.

## Validation and handoff
Run npm test, npm run typecheck, npm run build, lint if configured, git diff --check and inspect git status before claiming completion. Do not claim remote CI passed from local evidence. Commit planning updates with implementation when practical. Commit/push when a plan completes unless told otherwise; report exact SHA, validation and deployment status. Leave tracked tree clean. Never track credentials, raw personal screenshots, temporary artifacts or unrelated files. STOP after Plan 001; do not automatically create/execute Plan 002.

## Hosting
GitHub origin is authoritative. Sites hosts the static build as a deployment mirror. Retain .openai/hosting.json's exact identity; publish Sites through its workflow after authorized site edits. GitHub Pages is a secondary automatic deployment from main. Relative Vite asset URLs support both the Sites root and /nexus-team-builder/ Pages path. No backend, database, login or remote player-data dependency in v1.

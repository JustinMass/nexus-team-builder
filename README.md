# Nexus Team Builder

Public Sword x Staff Nexus Tournament utility: four teams of up to four players, ordered reserves, local custom drafts, shared links and Discord markdown. GitHub is the authoritative source; official updates require a repository commit.

- Primary public site: https://nexus-team-builder.jmass1991.chatgpt.site
- Secondary GitHub Pages: https://justinmass.github.io/nexus-team-builder/
- Repository: https://github.com/JustinMass/nexus-team-builder

## Local setup and commands

Node.js 24 and npm:

```sh
npm ci
npm run dev
npm test
npm run typecheck
npm run validate-data
npm run build
npm run preview
```

React + TypeScript + Vite, @dnd-kit, Lucide icons and Vitest. No backend, database, login or state-management framework. There is no separate lint configuration; strict TypeScript, tests, canonical validation and whitespace checks are the current gates. Vite's relative asset base supports Sites root hosting; the Pages workflow explicitly builds with `/nexus-team-builder/`.

## Directory layout

`src/components/` holds the working interface; `src/config/season.ts` owns class metadata; `src/data/` holds canonical player facts and official assignments; `src/domain/` holds pure calculations, moves, validation, serialization and Discord generation; `src/hooks/useLineup.ts` owns browser state/history/storage. `scripts/validate-data.ts` validates canonical data during every build. `docs/planning/` holds durable project continuity. `.openai/hosting.json` holds Sites identity and the static build directory; `dist/` is generated and ignored.

## Official vs custom authority

Official source is deeply frozen and cloned into browser working state. Editing changes the label to CUSTOM DRAFT and never mutates or publishes source. Morganna stays inactive in the catalog and starts in reserves. Default top-active generation skips any inactive player; manual inactive assignment is allowed with a visible badge. Team/background moves into full teams reject; dropping on a specific player swaps exact slots. Drag handles support mouse, touch and keyboard; team selectors provide an accessible alternative. Undo/redo retain up to 50 changes. Reset to Official and Discard Saved Draft reset the visible configuration, clear history and remove the local saved draft.

Custom drafts persist under `nexus-team-builder:draft:v1`. Schema and all IDs, uniqueness, complete coverage and team capacities are validated on load. Invalid or denied storage cannot crash the application; it reports a warning and falls back safely. Shared URLs take precedence and do not overwrite an existing personal draft until edited.

## Sharing and exports

Share Configuration copies a deterministic URL hash with schema version 1, player IDs, team/reserve assignments and ordering. It excludes the player database. Shared configurations show CUSTOM SHARED LINEUP and can reset to Current Official. Links resolve IDs against the current checked-in database, so later player facts update naturally; links containing removed IDs reject safely. The displayed official date is the current loaded source, not a historical snapshot.

Copy Discord Format generates totals, class emojis, composition grammar and INACTIVE suffixes from the current visible state. Clipboard denial reveals selectable text for manual copy. Maintainer tools contain Export Draft JSON for the current assignments/order and Discard Saved Draft.

## Updating rankings

Normally edit `src/data/players.ts`: stable ID, server rank, current name, numeric power in millions, current class ID and active/inactive status. Preserve stable IDs across renames. Do not delete inactive players. Rank/power updates do not automatically rewrite the official lineup. Default reserve order follows source server rank. Validate with tests and build.

## Updating the official lineup

Normally edit `src/data/officialLineup.ts`, separately from player objects. Update assignments/order and the official version/date. All 30 IDs must occur exactly once, teams must contain no more than four IDs, and the initial official source excludes inactive players. Maintenance loop: experiment on the public site, export Draft JSON, paste it to Codex, update official source and planning context, run `npm test` and `npm run build`, commit/push main. GitHub Pages deploys automatically. Republish Sites through the Sites workflow to update the primary site; GitHub pushes alone do not update Sites.

## Changing seasons/classes

Current names, previous class mappings, canonical colors and Discord emojis are centralized in `src/config/season.ts`. Future season changes should update that configuration and canonical player class data rather than rewriting components. Initial T5 mapping: Guardian → Templar, Conqueror → Ravager, Destroyer → Magister, Dominator → Prophet.

## Planning / Codex workflow

`AGENTS.md` is the default execution contract. Substantive work automatically reads `docs/planning/NEXUS-ROADMAP.md` and its active plan in `docs/planning/plans/`; plan updates follow `docs/planning/WRITING-PLANS.md` and `PLAN-TEMPLATE.md`. Code/tests/data remain executable truth. Update the same active plan and roadmap with status, validation, lessons and checkpoint SHAs; do not keep important facts only in chat. Stop after Plan 001; a next plan requires explicit authorization.

## Deployment

Sites serves the Vite `dist/` build as public static assets. Its source repository is a publishing mirror of this GitHub checkout. Preserve `.openai/hosting.json` identity and use the bundled Sites workflow to push exact source and package the build before saving/deploying a version. Do not put credentials in the repository.

GitHub Pages uses `.github/workflows/pages.yml` on main: npm ci, tests, typecheck, canonical validation/build, upload and deployment. The Pages source setting must be GitHub Actions. The workflow uses the correct `/nexus-team-builder/` base path.

Plan 001 validation: 51 tests passed, zero failed; typecheck, canonical validation, production build and git diff --check passed. Dependency audit: zero vulnerabilities. GitHub Pages was enabled and its first workflow completed successfully. Sites public publication was verified through its native deployment result. No separate lint configuration exists.

---
name: adapt-book-to-game
description: Turn a user-supplied book, manuscript, PDF, EPUB, DOCX, excerpt, or reading notes into an original, playable browser game. Use when Codex must analyze fiction or nonfiction, map source material into quests and mechanics, create a responsive React and TypeScript game, preserve source fidelity without copying protected expression, or improve an existing book-based game through staged design, implementation, and testing.
---

# Adapt Book to Game

Create a 30–60 minute browser game that transforms a book's important ideas or themes into player decisions and consequences. Deliver working code plus a concise source-to-quest design record.

## Work conversationally

- Ask one material question at a time.
- Offer exactly three concrete options for every decision question.
- Put the recommended option first and label it `Recommended`.
- Explain the recommendation when asked, then repeat the same choice.
- Inspect supplied files and the existing codebase instead of asking questions they can answer.
- Accept a user-provided alternative even when it is not one of the three options.
- Summarize the agreed plan and obtain explicit approval before editing files.

Read [references/intake-and-approvals.md](references/intake-and-approvals.md) before interviewing the user or planning the adaptation.

## Establish the source boundary

Require source material supplied by the user: a book file, manuscript, excerpts, or sufficiently detailed notes. A title alone is not enough for a faithful adaptation.

Determine whether the material is public domain, user-owned or licensed, or copyrighted with no confirmed adaptation rights. For copyrighted material without confirmed rights:

- Transform concepts, themes, and learning goals into original situations.
- Create new characters, settings, scenes, dialogue, and artwork.
- Do not reproduce long passages or make a substitute for reading the book.
- Keep chapter or page anchors in the private design record without copying passages.
- State clearly that the result is an independent learning experience inspired by the source.

Read [references/adaptation-paths.md](references/adaptation-paths.md) when analyzing the source and choosing the fiction or nonfiction path.

## Follow three approval gates

Do not collapse the gates into one large approval.

1. **Adaptation brief:** Confirm the audience, learning or experiential goal, rights boundary, duration, tone, and source coverage.
2. **Quest map:** Confirm 5–7 quests by default, their source anchors, player verbs, mechanics, consequences, and takeaways.
3. **Playable direction:** Build one representative vertical slice and confirm its interaction and original visual direction before completing the game.

At every gate, show the artifact in a compact form, recommend one option when a decision remains, and wait for approval.

## Design the game

For nonfiction, make the player apply, compare, diagnose, predict, arrange, or simulate the book's ideas. Do not reduce learning to recall questions.

For fiction, make the player explore themes, relationships, conflicts, setting rules, or alternative decisions. Unless rights permit close adaptation, use an original world and cast that express the selected themes without retelling the plot.

Match mechanics to meaning. Select a small coherent set from exploration, dialogue, ordering, matching, spatial reasoning, resource allocation, investigation, or lightweight simulation. Give wrong choices specific explanatory consequences without punishing experimentation.

Derive an original visual direction from mood, period, themes, and audience. Do not copy the book cover or imitate a named artist. Start with typography, layout, color, and code-native visuals. Generate only essential original artwork after the playable-direction gate.

## Build the browser game

Prefer the user's existing web stack. When no project exists, copy `assets/react-starter/` into a new project and replace every demo-specific value. Preserve the starter's useful foundations:

- Data-driven quests separated from rendering.
- Resilient, versioned device-local progress.
- Immediate feedback announced to assistive technology.
- Keyboard-accessible native controls and visible focus.
- Responsive layouts and reduced-motion support.
- A takeaway journal and completion state.

Do not force every quest into the starter's choice mechanic. Add a focused custom interaction when the quest map calls for one. Avoid accounts, databases, or external services unless the approved design requires them.

## Deliver the design record

Create a concise record beside the game using [references/design-record-template.md](references/design-record-template.md). Include source anchors, but never paste large source excerpts. Keep the record useful for reviewing fidelity and revising individual quests.

## Verify before handoff

Read and follow [references/quality-checklist.md](references/quality-checklist.md). At minimum:

1. Run the project's build, lint, and relevant tests.
2. Play the critical journey from start through completion.
3. Verify refresh/resume and reset behavior.
4. Check keyboard use, focus visibility, feedback announcements, reduced motion, and narrow-screen layout.
5. Compare every quest and takeaway with its source anchor.
6. Remove placeholder content, copied prose, unused assets, and accidental visual imitation.

Report what passed, what remains unverified, and the paths to the playable game and design record.

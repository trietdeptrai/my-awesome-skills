# Quality checklist

## Source and adaptation

- Every quest has a specific chapter, section, or page anchor.
- The game represents important ideas rather than convenient trivia.
- Player actions demonstrate the intended learning or thematic outcome.
- Original interpretation is labeled and not attributed to the author.
- Long quotations and copied protected expression are absent.
- The experience complements rather than substitutes for the book.

## Game design

- The first meaningful action arrives quickly.
- Each quest changes what the player understands, can do, or must consider.
- Incorrect choices are plausible and receive specific feedback.
- Mechanics support meaning rather than decorate multiple-choice questions.
- Progression builds complexity or dramatic pressure.
- Completion recalls the player's actions and takeaways.

## Interface and accessibility

- Native controls work with keyboard alone.
- Focus is visible and follows dialogs or overlays correctly.
- Feedback changes are exposed through an appropriate live region.
- Images have useful alternative text; decorative visuals are hidden.
- Color is not the only carrier of meaning.
- Layout works at 320 CSS pixels and at a wide desktop size.
- Reduced-motion preferences are respected.
- Audio is optional, user-initiated, captioned or nonessential, and licensed.

## Reliability

- The production build passes.
- Lint and repository tests pass.
- Start, quest transition, completion, resume, and reset paths work.
- Corrupt or obsolete local progress fails safely.
- Storage keys are unique and versioned.
- Placeholder copy, unused assets, and console errors are absent.

## Handoff

- The game path and launch command are clear.
- The design record contains the final source-to-quest map.
- Passed checks and unverified checks are distinguished honestly.

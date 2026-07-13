import type { GameDefinition } from "./types";

// Replace this complete demo definition after Gate 2. Keep source anchors in the
// design record; do not copy long book passages into player-facing content.
export const game: GameDefinition = {
  slug: "replace-with-game-slug",
  title: "The Margin Between Ideas",
  subtitle: "A two-quest demonstration to replace with the approved adaptation",
  estimatedMinutes: 8,
  sourceNote: "Demonstration content only. Replace with an original source note.",
  quests: [
    {
      id: "notice-the-pattern",
      title: "Notice the Pattern",
      sourceAnchor: "Demo only",
      setup:
        "Three observations appear unrelated until you decide which detail changes the interpretation.",
      objective: "Choose the observation that reveals a cause rather than a coincidence.",
      clue: "Look for the detail that explains why the outcome repeats.",
      choices: [
        {
          id: "surface",
          label: "Choose the most visually dramatic detail.",
          feedback: "Drama attracts attention, but it does not explain the repeated outcome.",
          correct: false,
        },
        {
          id: "cause",
          label: "Choose the detail that changes before every repeated outcome.",
          feedback: "The changing condition gives you a testable explanation for the pattern.",
          correct: true,
        },
        {
          id: "majority",
          label: "Choose the detail mentioned most often.",
          feedback: "Frequency may signal importance, but repetition alone does not establish a cause.",
          correct: false,
        },
      ],
      takeaway: "A useful pattern connects observations through a testable relationship.",
    },
    {
      id: "apply-the-pattern",
      title: "Apply the Pattern",
      sourceAnchor: "Demo only",
      setup:
        "A new situation looks different on the surface but contains the same underlying relationship.",
      objective: "Transfer the pattern instead of matching familiar words.",
      clue: "Compare the role each detail plays, not the language used to describe it.",
      choices: [
        {
          id: "same-words",
          label: "Select the example that repeats the original vocabulary.",
          feedback: "Shared vocabulary can hide a different relationship.",
          correct: false,
        },
        {
          id: "same-relationship",
          label: "Select the example with the same cause-and-effect structure.",
          feedback: "You transferred the idea by preserving its relationship in a new context.",
          correct: true,
        },
        {
          id: "same-setting",
          label: "Select the example set in the same kind of place.",
          feedback: "A familiar setting does not guarantee that the underlying idea is the same.",
          correct: false,
        },
      ],
      takeaway: "Understanding becomes visible when an idea transfers to a new situation.",
    },
  ],
};

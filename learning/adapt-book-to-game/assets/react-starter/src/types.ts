export type Choice = {
  id: string;
  label: string;
  feedback: string;
  correct: boolean;
};

export type Quest = {
  id: string;
  title: string;
  sourceAnchor: string;
  setup: string;
  objective: string;
  clue: string;
  choices: Choice[];
  takeaway: string;
};

export type GameDefinition = {
  slug: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  sourceNote: string;
  quests: Quest[];
};

export type Progress = {
  version: 1;
  questIndex: number;
  completed: string[];
  takeaways: string[];
};

import { useEffect, useMemo, useState } from "react";
import { game } from "./game";
import type { Choice, Progress } from "./types";

type Screen = "intro" | "quest" | "complete";
type Feedback = { tone: "neutral" | "good" | "try"; text: string };

const storageKey = `book-game:${game.slug}:v1`;

function freshProgress(): Progress {
  return { version: 1, questIndex: 0, completed: [], takeaways: [] };
}

function readProgress(): Progress {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) ?? "null") as Partial<Progress> | null;
    if (!saved || saved.version !== 1) return freshProgress();

    const completed = Array.isArray(saved.completed)
      ? saved.completed.filter((id): id is string => game.quests.some((quest) => quest.id === id))
      : [];
    const takeaways = Array.isArray(saved.takeaways)
      ? saved.takeaways.filter((item): item is string => typeof item === "string")
      : [];

    return {
      version: 1,
      questIndex: Math.max(0, Math.min(game.quests.length - 1, Number(saved.questIndex) || 0)),
      completed,
      takeaways,
    };
  } catch {
    localStorage.removeItem(storageKey);
    return freshProgress();
  }
}

export function App() {
  const [progress, setProgress] = useState<Progress>(readProgress);
  const [screen, setScreen] = useState<Screen>(progress.completed.length ? "quest" : "intro");
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback>({
    tone: "neutral",
    text: "Read the situation, then choose the action that best serves the objective.",
  });

  const quest = game.quests[progress.questIndex];
  const questComplete = progress.completed.includes(quest.id);
  const percent = Math.round((progress.completed.length / game.quests.length) * 100);
  const hasProgress = progress.completed.length > 0 || progress.questIndex > 0;

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress]);

  const uniqueTakeaways = useMemo(() => [...new Set(progress.takeaways)], [progress.takeaways]);

  const choose = (choice: Choice) => {
    setSelected(choice.id);
    setFeedback({ tone: choice.correct ? "good" : "try", text: choice.feedback });
    if (!choice.correct || questComplete) return;

    setProgress((current) => ({
      ...current,
      completed: [...current.completed, quest.id],
      takeaways: [...current.takeaways, quest.takeaway],
    }));
  };

  const continueJourney = () => {
    setSelected(null);
    setFeedback({ tone: "neutral", text: "A new situation is ready." });
    if (progress.questIndex === game.quests.length - 1) {
      setScreen("complete");
      return;
    }
    setProgress((current) => ({ ...current, questIndex: current.questIndex + 1 }));
  };

  const reset = () => {
    if (hasProgress && !window.confirm("Start over and replace your saved progress?")) return;
    localStorage.removeItem(storageKey);
    setProgress(freshProgress());
    setSelected(null);
    setFeedback({ tone: "neutral", text: "Your new journey is ready." });
    setScreen("intro");
  };

  if (screen === "intro") {
    return (
      <main className="intro-shell">
        <div className="intro-panel">
          <span className="eyebrow">Interactive book experience</span>
          <h1>{game.title}</h1>
          <p className="lede">{game.subtitle}</p>
          <dl className="facts">
            <div><dt>Quests</dt><dd>{game.quests.length}</dd></div>
            <div><dt>Time</dt><dd>{game.estimatedMinutes} min</dd></div>
            <div><dt>Progress</dt><dd>Saved locally</dd></div>
          </dl>
          <button className="primary" type="button" onClick={() => setScreen("quest")}>
            {hasProgress ? "Continue journey" : "Begin journey"}
          </button>
          <p className="source-note">{game.sourceNote}</p>
        </div>
        <div className="intro-mark" aria-hidden="true"><span>Read</span><span>Choose</span><span>Change</span></div>
      </main>
    );
  }

  if (screen === "complete") {
    return (
      <main className="completion-shell">
        <section className="completion-card">
          <span className="eyebrow">Journey complete</span>
          <h1>You changed how the ideas move.</h1>
          <p>Your decisions unlocked these takeaways:</p>
          <ol className="journal">
            {uniqueTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
          </ol>
          <button className="secondary" type="button" onClick={reset}>Play again</button>
        </section>
      </main>
    );
  }

  return (
    <main className="game-shell">
      <header className="game-header">
        <button className="wordmark" type="button" onClick={() => setScreen("intro")}>{game.title}</button>
        <div className="progress-copy"><span>Journey</span><strong>{percent}%</strong></div>
        <div className="progress-track" role="progressbar" aria-label="Journey progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
          <span style={{ width: `${percent}%` }} />
        </div>
      </header>

      <section className="quest-layout">
        <aside className="quest-index" aria-label="Quest progress">
          <span className="eyebrow">Quest {progress.questIndex + 1} of {game.quests.length}</span>
          <ol>
            {game.quests.map((item, index) => (
              <li className={index === progress.questIndex ? "current" : ""} key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
              </li>
            ))}
          </ol>
        </aside>

        <article className="quest-card">
          <span className="eyebrow">{quest.objective}</span>
          <h1>{quest.title}</h1>
          <p className="setup">{quest.setup}</p>
          <p className="clue"><strong>Look closely:</strong> {quest.clue}</p>
          <div className="choices" aria-label="Available actions">
            {quest.choices.map((choice) => (
              <button
                className={selected === choice.id ? "choice selected" : "choice"}
                type="button"
                key={choice.id}
                onClick={() => choose(choice)}
              >
                {choice.label}<span aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <div className={`feedback ${feedback.tone}`} role="status" aria-live="polite">
            <span>Response</span><p>{feedback.text}</p>
          </div>
          {questComplete && (
            <div className="takeaway">
              <span className="eyebrow">Takeaway unlocked</span>
              <p>{quest.takeaway}</p>
              <button className="primary" type="button" onClick={continueJourney}>
                {progress.questIndex === game.quests.length - 1 ? "Finish journey" : "Continue"}
              </button>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}

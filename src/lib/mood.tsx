import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const MOODS = [
  { id: "calm", label: "Calm", blurb: "Quiet paper, serif headlines, nothing shouting." },
  { id: "energetic", label: "Energetic", blurb: "Hard shadows, chunky type, exam-week adrenaline." },
  { id: "soft", label: "Soft", blurb: "Round, pastel, gentle. Late-night study vibes." },
  { id: "wild", label: "Wild", blurb: "Stickers, tilt, loud colour. The group chat at 2am." },
] as const;

export type Mood = (typeof MOODS)[number]["id"];
const KEY = "sgsits-mood";
const EVENT = "sgsits-mood-change";

function apply(mood: Mood) {
  document.documentElement.dataset["mood"] = mood;
}

export function useMood() {
  const [mood, setMoodState] = useState<Mood>("calm");
  useEffect(() => {
    const saved = window.localStorage.getItem(KEY) as Mood | null;
    const next = saved && MOODS.some((m) => m.id === saved) ? saved : "calm";
    setMoodState(next);
    apply(next);
    const onChange = (e: Event) => setMoodState((e as CustomEvent<Mood>).detail);
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);
  const setMood = (m: Mood) => {
    apply(m);
    window.localStorage.setItem(KEY, m);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: m }));
  };
  return { mood, setMood };
}

export function MoodSwitcher({ className }: { className?: string }) {
  const { mood, setMood } = useMood();
  return (
    <div role="radiogroup" aria-label="Interface mood" className={cn("mood-switch", className)}>
      {MOODS.map((m) => (
        <button
          key={m.id}
          type="button"
          role="radio"
          aria-checked={mood === m.id}
          title={m.blurb}
          onClick={() => setMood(m.id)}
          className="mood-switch-btn"
          data-swatch={m.id}
        >
          <span aria-hidden className="mood-dot" />
          <span className="hidden xl:inline">{m.label}</span>
          <span className="sr-only xl:hidden">{m.label}</span>
        </button>
      ))}
    </div>
  );
}

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Client-side bookmark state.
 * Backed by localStorage for now; swap the read/write calls for a
 * `saved_resources` table once the backend is connected.
 */

const STORAGE_KEY = "sgsits.saved";

interface SavedContextValue {
  saved: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
}

const SavedContext = createContext<SavedContextValue | null>(null);

export function SavedProvider({
  children,
  initial = [],
}: {
  children: ReactNode;
  initial?: string[];
}) {
  const [saved, setSaved] = useState<string[]>(initial);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw) as string[]);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  const toggleSaved = useCallback((id: string) => {
    setSaved((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ saved, isSaved: (id: string) => saved.includes(id), toggleSaved }),
    [saved, toggleSaved],
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used inside SavedProvider");
  return ctx;
}

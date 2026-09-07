import { cn } from "@/lib/utils";
import { BRANCHES, RESOURCE_TYPES, SEMESTERS, SUBJECTS } from "@/data/mock";
import type { Branch, ResourceType, Semester } from "@/data/types";

export interface Filters {
  branch: Branch | "all";
  semester: Semester | "all";
  subject: string | "all";
  type: ResourceType | "all";
}

export const emptyFilters: Filters = {
  branch: "all",
  semester: "all",
  subject: "all",
  type: "all",
};

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "brand-gradient text-white shadow-md shadow-brand/25"
          : "border border-white/70 bg-white/55 text-ink/65 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function FilterPanel({
  filters,
  onChange,
  onReset,
  className,
}: {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
  className?: string;
}) {
  const set = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: value });

  const subjects =
    filters.branch === "all"
      ? SUBJECTS
      : SUBJECTS.filter((s) => s.branch === filters.branch);

  return (
    <aside className={cn("glass-soft rounded-2xl p-5", className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-sm font-bold tracking-tight text-ink">
          Filters
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold text-brand hover:underline"
        >
          Reset
        </button>
      </div>

      <div className="mt-5 space-y-5">
        <Group label="Branch">
          <Chip active={filters.branch === "all"} onClick={() => set("branch", "all")}>
            All
          </Chip>
          {BRANCHES.map((b) => (
            <Chip
              key={b.code}
              active={filters.branch === b.code}
              onClick={() => set("branch", b.code)}
            >
              {b.code}
            </Chip>
          ))}
        </Group>

        <Group label="Semester">
          <Chip active={filters.semester === "all"} onClick={() => set("semester", "all")}>
            All
          </Chip>
          {SEMESTERS.map((s) => (
            <Chip
              key={s}
              active={filters.semester === s}
              onClick={() => set("semester", s)}
            >
              {s}
            </Chip>
          ))}
        </Group>

        <div>
          <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45">
            Subject
          </p>
          <select
            className="field"
            value={filters.subject}
            onChange={(e) => set("subject", e.target.value)}
            aria-label="Filter by subject"
          >
            <option value="all">All subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <Group label="Resource type">
          <Chip active={filters.type === "all"} onClick={() => set("type", "all")}>
            All
          </Chip>
          {RESOURCE_TYPES.map((t) => (
            <Chip key={t} active={filters.type === t} onClick={() => set("type", t)}>
              {t}
            </Chip>
          ))}
        </Group>
      </div>
    </aside>
  );
}

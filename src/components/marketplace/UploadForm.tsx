import { useState, type FormEvent } from "react";
import { CheckCircle2, TriangleAlert, UploadCloud, X } from "lucide-react";
import { BRANCHES, RESOURCE_TYPES, SEMESTERS, SUBJECTS } from "@/data/mock";

type Status = "idle" | "uploading" | "success" | "error";

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-ink/45">{hint}</span>}
    </label>
  );
}

export function UploadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [tagDraft, setTagDraft] = useState("");

  const addTag = () => {
    const t = tagDraft.trim().toLowerCase();
    if (t && !tags.includes(t)) setTags([...tags, t]);
    setTagDraft("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fileName) {
      setStatus("error");
      return;
    }
    // Placeholder for the storage upload + database insert.
    setStatus("uploading");
    setProgress(0);
    const timer = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(timer);
          setStatus("success");
          return 100;
        }
        return p + 10;
      });
    }, 120);
  };

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto size-8 text-emerald-500" />
        <p className="mt-4 font-display text-xl font-bold text-ink">
          Resource submitted
        </p>
        <p className="mt-2 text-sm text-ink/60">
          Your upload is queued for review. Once file storage is connected it will
          appear on Explore for everyone in your branch.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setProgress(0);
            setFileName(null);
            setTags([]);
          }}
          className="brand-gradient mt-6 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25"
        >
          Upload another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-6">
      <Field label="Resource title">
        <input
          required
          className="field"
          placeholder="e.g. Design and Analysis of Algorithms — Unit 3 Notes"
        />
      </Field>

      <Field label="Description">
        <textarea
          required
          rows={4}
          className="field resize-none"
          placeholder="What does this cover? Which units, which year, anything a classmate should know."
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Branch">
          <select required className="field" defaultValue="">
            <option value="" disabled>
              Select branch
            </option>
            {BRANCHES.map((b) => (
              <option key={b.code} value={b.code}>
                {b.code} — {b.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Semester">
          <select required className="field" defaultValue="">
            <option value="" disabled>
              Select semester
            </option>
            {SEMESTERS.map((s) => (
              <option key={s} value={s}>
                Semester {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Subject">
          <select required className="field" defaultValue="">
            <option value="" disabled>
              Select subject
            </option>
            {SUBJECTS.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Resource type">
          <select required className="field" defaultValue="">
            <option value="" disabled>
              Select type
            </option>
            {RESOURCE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="File" hint="PDF, DOCX or images up to 50 MB.">
        <label className="flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-ink/20 bg-white/50 px-4 py-8 text-center hover:border-brand/50">
          <UploadCloud className="size-6 text-ink/40" />
          <span className="mt-3 text-sm font-semibold text-ink">
            {fileName ?? "Choose a file or drop it here"}
          </span>
          <span className="mt-1 text-xs text-ink/45">
            Your name will be shown as the uploader
          </span>
          <input
            type="file"
            className="sr-only"
            onChange={(e) => {
              setFileName(e.target.files?.[0]?.name ?? null);
              setStatus("idle");
            }}
          />
        </label>
      </Field>

      <Field label="Thumbnail (optional)">
        <input type="file" accept="image/*" className="field file:hidden" />
      </Field>

      <Field label="Tags">
        <div className="flex gap-2">
          <input
            value={tagDraft}
            onChange={(e) => setTagDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTag();
              }
            }}
            className="field"
            placeholder="Add a tag and press Enter"
          />
          <button
            type="button"
            onClick={addTag}
            className="rounded-xl border border-white/70 bg-white/60 px-4 text-sm font-semibold text-ink"
          >
            Add
          </button>
        </div>
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand"
              >
                #{t}
                <button
                  type="button"
                  aria-label={`Remove ${t}`}
                  onClick={() => setTags(tags.filter((x) => x !== t))}
                >
                  <X className="size-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </Field>

      {status === "error" && (
        <p className="inline-flex items-center gap-2 rounded-xl bg-rose-500/10 px-3 py-2 text-sm font-medium text-rose-600">
          <TriangleAlert className="size-4" /> Please attach a file before submitting.
        </p>
      )}

      {status === "uploading" && (
        <div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10">
            <div
              className="brand-gradient h-full rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs font-medium text-ink/55">Uploading… {progress}%</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "uploading"}
        className="brand-gradient w-full rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25 disabled:opacity-60"
      >
        {status === "uploading" ? "Uploading…" : "Submit resource"}
      </button>
    </form>
  );
}

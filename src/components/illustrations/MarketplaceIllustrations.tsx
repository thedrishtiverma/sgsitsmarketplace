import { cn } from "@/lib/utils";

export function EmptyFolderIllustration({ variant = "search", className }: { variant?: "search" | "saved" | "upload"; className?: string }) {
  return <svg viewBox="0 0 180 120" role="img" aria-label={variant === "saved" ? "An empty bookmark folder" : variant === "upload" ? "An empty paper tray" : "An empty folder with a searching annotation"} className={cn("empty-illustration", className)}>
    <path className="paper-shadow" d="M26 38h46l10 10h72v54H26z" />
    <path className="paper" d="M22 34h48l10 10h76v54H22z" />
    <path className="paper-line" d="M22 48h134" />
    {variant === "saved" ? <><path className="accent-fill" d="M77 21h28v55L91 66 77 76z"/><path className="ink-line" d="M77 21h28v55L91 66 77 76z"/></> : variant === "upload" ? <><path className="ink-line" d="M91 80V22M73 40l18-18 18 18"/><path className="accent-stroke" d="M64 82c16 6 38 6 55 0"/></> : <><circle className="ink-line" cx="91" cy="67" r="18"/><path className="ink-line" d="m104 80 17 17"/><path className="accent-stroke" d="M75 28c11-5 24-5 35 0"/></>}
  </svg>;
}

export function UploadSuccessIllustration({ className }: { className?: string }) {
  return <svg viewBox="0 0 200 130" role="img" aria-label="A document sliding into the SGSITS resource collection" className={cn("upload-success", className)}>
    <path className="tray" d="M30 78h140l-12 35H42z"/><path className="tray-line" d="M30 78h40l8 10h44l8-10h40"/>
    <g className="success-paper"><path className="paper" d="M72 12h48l16 16v65H72z"/><path className="paper-line" d="M120 12v16h16M84 45h38M84 58h30"/><path className="accent-stroke" d="M83 71c13-3 27-3 40 0"/></g>
  </svg>;
}

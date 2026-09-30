type MarkProps = {
  className?: string;
  /** Color of the roof line and window */
  tone?: "ink" | "paper";
};

/** SS monogram under a roofline, redrawn from the business card. */
export function Mark({ className = "", tone = "ink" }: MarkProps) {
  const color = tone === "ink" ? "text-ink" : "text-paper";
  return (
    <span className={`inline-flex items-end pt-[0.5em] ${color} ${className}`} aria-hidden="true">
      <span className="relative inline-block leading-none">
        <svg
          viewBox="0 0 64 26"
          className="absolute -top-[0.62em] left-[0.28em] h-[0.72em] w-auto"
          fill="none"
          stroke="currentColor"
        >
          <path d="M2 24 32 3l30 21" strokeWidth="4.5" strokeLinejoin="miter" />
          <path d="M46 12V4h6v12" strokeWidth="4" />
          <g fill="currentColor" stroke="none">
            <rect x="27" y="13" width="4.5" height="4.5" />
            <rect x="32.5" y="13" width="4.5" height="4.5" />
            <rect x="27" y="18.5" width="4.5" height="4.5" />
            <rect x="32.5" y="18.5" width="4.5" height="4.5" />
          </g>
        </svg>
        <span className="cond font-black tracking-[-0.03em]">SS</span>
      </span>
    </span>
  );
}

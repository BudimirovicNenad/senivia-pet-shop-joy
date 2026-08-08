export function Logo({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const mark = tone === "light" ? "var(--color-primary-foreground)" : "var(--color-primary)";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M23.5 8.5C21.5 6 18.5 5 16 6.4c-3.2 1.8-3.4 6-.4 8.1 3 2.1 6.6 2.3 7.4 5.6.8 3.3-2.2 6.2-5.9 5.6-2.4-.4-4.3-1.9-5.6-3.9"
          stroke={mark}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 15.5c2.4-.6 4.6.4 5.4 2.6"
          stroke="var(--color-bronze)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="font-serif text-[1.35rem] leading-none tracking-[0.3em]"
        style={{ color: mark }}
      >
        SENIVIA
      </span>
    </span>
  );
}
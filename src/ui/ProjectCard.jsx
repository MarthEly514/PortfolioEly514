import { useState } from "react";

export function ProjectCard({
  title,
  tagline,
  description,
  accentWord,
  technologies,
  projectUrl,
  category = "Wallet",
  accentColor = "#f97316",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── LEFT PANEL ── */}
      <div
        className="relative flex flex-col justify-between w-[42%] shrink-0 p-5 overflow-hidden"
        style={{ background: accentColor, minHeight: 220 }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between relative z-10">
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            {category}
          </span>
          {/* Toggle pill */}
          <div
            className="flex items-center gap-1 rounded-full px-2 py-1"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
            <div
              className="w-4 h-4 rounded-full"
              style={{ background: "rgba(255,255,255,0.3)" }}
            />
          </div>
        </div>

        {/* Large accent word */}
        <div
          className="relative z-10 select-none font-black leading-none"
          style={{
            fontSize: "clamp(56px, 10vw, 84px)",
            fontFamily: "'DM Serif Display', serif",
            letterSpacing: "-0.03em",
            color: "rgba(0,0,0,0.18)",
          }}
        >
          {accentWord}
        </div>

        {/* Decorative circles */}
        <div
          className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />
        <div
          className="absolute -top-10 -left-10 w-36 h-36 rounded-full"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        className="flex flex-col justify-between flex-1 p-6"
        style={{ background: "linear-gradient(140deg, #1c1c1c 0%, #111 100%)" }}
      >
        <div>
          {tagline && (
            <p className="text-zinc-500 text-xs font-medium tracking-widest uppercase mb-2">
              {tagline}
            </p>
          )}
          <h2
            className="text-white font-bold leading-tight mb-2"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(18px, 2.6vw, 26px)",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
          <p className="text-zinc-500 text-xs leading-relaxed mb-5">
            {description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((t) => (
            <span
              key={t.name}
              className="text-zinc-400 text-[10px] border border-zinc-700 rounded-full px-2.5 py-0.5 tracking-wide"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {t.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-flex items-center gap-2 self-start text-sm font-semibold rounded-full px-5 py-2 transition-all duration-300"
          style={{
            background: hovered ? accentColor : "#27272a",
            color: hovered ? "#fff" : "#d4d4d8",
            boxShadow: hovered ? `0 8px 24px ${accentColor}40` : "none",
          }}
        >
          View Project
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              transform: hovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.25s",
            }}
          >
            <path
              d="M2 7H12M12 7L8 3M12 7L8 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
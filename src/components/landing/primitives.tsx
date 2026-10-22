import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const h2Class =
  "m-0 font-serif text-[clamp(34px,3.6cqw,52px)] font-normal leading-[1.08] tracking-[-.02em] text-balance";

export const primaryPill =
  "inline-flex items-center rounded-full bg-primary font-medium text-white transition-[background-color,scale] duration-200 hover:bg-ink hover:text-white active:scale-[.97]";

export const outlinePill =
  "inline-flex items-center rounded-full border-[1.5px] border-ink font-medium text-ink transition-[background-color,scale] duration-200 hover:bg-surface hover:text-ink active:scale-[.97]";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mb-5 font-mono text-xs uppercase tracking-[.14em] text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}

const SMALL_ARCS_LEFT =
  "M80 200A50 50 0 0 1 180 200M50 200A80 80 0 0 1 210 200M20 200A110 110 0 0 1 240 200M-10 200A140 140 0 0 1 270 200M-40 200A170 170 0 0 1 300 200";
const SMALL_ARCS_RIGHT =
  "M220 200A50 50 0 0 1 320 200M190 200A80 80 0 0 1 350 200M160 200A110 110 0 0 1 380 200M130 200A140 140 0 0 1 410 200M100 200A170 170 0 0 1 440 200";

/** Two interlocking sets of half-rings, the brand's arc motif. */
export function ArcPair({
  className,
  style,
  strokeWidth = 12,
  left = "#4F6FF8",
  right = "#5F8DE1",
}: {
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
  left?: string;
  right?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d={SMALL_ARCS_LEFT} stroke={left} />
      <path d={SMALL_ARCS_RIGHT} stroke={right} />
    </svg>
  );
}

/** Kazzy's avatar: navy disc with two pairs of arcs. */
export function KazzyMark({
  className,
  strokeWidth = 18,
  background = "#1A1F62",
}: {
  className?: string;
  strokeWidth?: number;
  background?: string;
}) {
  return (
    <span
      className={cn("relative block flex-none overflow-hidden rounded-full", className)}
      style={{ background }}
    >
      <svg
        viewBox="0 0 400 200"
        fill="none"
        strokeWidth={strokeWidth}
        aria-hidden="true"
        className="absolute bottom-[22%] left-[8%] w-[84%]"
      >
        <path d="M80 200A50 50 0 0 1 180 200M20 200A110 110 0 0 1 240 200" stroke="#4F6FF8" />
        <path d="M220 200A50 50 0 0 1 320 200M160 200A110 110 0 0 1 380 200" stroke="#5F8DE1" />
      </svg>
    </span>
  );
}

/** Tall nested arches drawn behind the arched portrait photos. */
export function ArchLines({ rings = 3, opacity, fadeFrom, fadeTo }: { rings?: 2 | 3; opacity: number; fadeFrom: string; fadeTo: string }) {
  const d =
    "M70 700V300A230 230 0 0 1 530 300V700M38 700V300A262 262 0 0 1 562 300V700" +
    (rings === 3 ? "M6 700V300A294 294 0 0 1 594 300V700" : "");
  const mask = `linear-gradient(to bottom,#000 ${fadeFrom},transparent ${fadeTo})`;
  return (
    <svg
      viewBox="0 0 600 700"
      fill="none"
      aria-hidden="true"
      className="absolute top-0 left-[-25%] w-[150%] -translate-y-[14.29%] stroke-sky"
      style={{ opacity, WebkitMaskImage: mask, maskImage: mask }}
    >
      <path vectorEffect="non-scaling-stroke" strokeWidth={1.5} d={d} />
    </svg>
  );
}

export const archRadius = "rounded-[50%_50%_20px_20px/40%_40%_20px_20px]";

/* lucide-react 1.x ships no brand marks, so the footer's social icons are drawn here in the same outline style. */
type IconProps = { className?: string };
const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  width: "1em",
  height: "1em",
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V16.5M8 7.6V7.7M11.5 16.5V10.5M11.5 13.2C11.5 11.6 12.6 10.5 14 10.5C15.4 10.5 16.3 11.4 16.3 13V16.5" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <path d="M4.5 4.5H9L19.5 19.5H15Z" />
      <path d="M19.2 4.5L13.3 11.2M10.7 13.6L4.8 19.5" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.2 9.4V14.6L14.6 12Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <path d="M4.2 19.8L5.3 16.2A8.3 8.3 0 1 1 8 18.8Z" />
      <path d="M9.2 8.6C9.4 8.2 9.8 8.1 10.1 8.2L10.8 9.7C10.9 10 10.7 10.3 10.5 10.5L10.2 10.8C10.7 11.9 11.9 13.1 13.1 13.6L13.4 13.3C13.6 13.1 13.9 13 14.2 13.1L15.7 13.8C15.8 14.1 15.7 14.5 15.3 14.8C14.7 15.3 13.9 15.4 13.1 15.1C11 14.3 9.4 12.7 8.7 10.6C8.5 9.9 8.7 9.1 9.2 8.6Z" />
    </svg>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

/** Vector recreation of the TrueHub mark: hexagon, TH monogram, gear and circuit traces. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      {/* circuit traces */}
      <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 34h12l8-8h12" stroke="#14305a" />
        <path d="M10 50h16l6-6h12" stroke="#7a7d82" />
        <path d="M12 66h12l8-6h12" stroke="#c9962b" />
      </g>
      <g fill="#fff" strokeWidth="3">
        <circle cx="8" cy="34" r="3.5" stroke="#14305a" />
        <circle cx="6" cy="50" r="3.5" stroke="#7a7d82" />
        <circle cx="8" cy="66" r="3.5" stroke="#c9962b" />
      </g>
      {/* hexagon */}
      <path d="M84 6 46 28v44l38 22" fill="none" stroke="#14305a" strokeWidth="7" strokeLinejoin="round" />
      <path d="M84 6l38 22v10" fill="none" stroke="#7a7d82" strokeWidth="7" strokeLinejoin="round" />
      <path d="M122 62v10L84 94" fill="none" stroke="#c9962b" strokeWidth="7" strokeLinejoin="round" />
      {/* gear */}
      <circle cx="120" cy="50" r="13" fill="none" stroke="#14305a" strokeWidth="9" strokeDasharray="5.1 3.4" />
      <circle cx="120" cy="50" r="9" fill="#fff" stroke="#14305a" strokeWidth="4" />
      {/* TH monogram */}
      <path d="M56 30h36v8H78v36h-8V38H56z" fill="#14305a" />
      <path d="M84 42h8v12h8V42h8v32h-8V62h-8v12h-8z" fill="#c9962b" />
      <path d="M62 84q28 10 48-12" fill="none" stroke="#c9962b" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({
  src,
  tone = "light",
  className,
}: {
  /** Path to a raster logo (e.g. /logo.png). When omitted the vector logo is rendered. */
  src?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt="TrueHub Tech & Systems"
        width={240}
        height={72}
        priority
        className={cn("h-14 w-auto", className)}
      />
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-11 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[23px] font-extrabold tracking-tight">
          <span className={tone === "dark" ? "text-white" : "text-navy-800"}>TRUE</span>
          <span className="text-gold-500">HUB</span>
        </span>
        <span
          className={cn(
            "mt-1 font-heading text-[9.5px] font-bold tracking-[0.3em]",
            tone === "dark" ? "text-steel-300" : "text-steel-500",
          )}
        >
          TECH &amp; SYSTEMS
        </span>
      </span>
    </span>
  );
}

import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow", tone === "dark" && "text-gold-400")}>{eyebrow}</p>}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-navy-100/85" : "text-steel-600")}>
          {text}
        </p>
      )}
    </div>
  );
}

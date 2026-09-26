import Link from "next/link";
import { brands } from "@/data/brands";

/** Scrolling strip of brand wordmarks. Pauses on hover. */
export default function BrandStrip({ dark = false }: { dark?: boolean }) {
  const items = [...brands, ...brands];
  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-label="Brands we supply"
    >
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {items.map((b, i) => (
          <Link
            key={`${b.slug}-${i}`}
            href={`/brands/${b.slug}`}
            className={
              dark
                ? "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-heading text-sm font-bold tracking-wide text-white transition hover:border-gold-400 hover:text-gold-400"
                : "flex items-center gap-2 rounded-full border border-steel-200 bg-white px-5 py-2.5 font-heading text-sm font-bold tracking-wide text-navy-800 shadow-sm transition hover:border-gold-400 hover:text-gold-600"
            }
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            {b.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

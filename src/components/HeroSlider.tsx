"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProductVisual from "./ProductVisual";
import type { Slide } from "@/data/slides";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6000;

/** Auto-advancing slideshow shown under the home-page headline. Pauses on hover/focus, supports swipe and keyboard. */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  if (count === 0) return null;

  return (
    <section
      className="relative"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <div className="relative h-[560px] overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-card sm:h-[520px] lg:h-[440px]">
        {slides.map((s, i) => (
          <article
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${s.title}`}
            aria-hidden={i !== index}
            className={cn(
              "absolute inset-0 grid grid-rows-[220px_1fr] transition-opacity duration-700 lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-1",
              i === index ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0",
            )}
          >
            {/* Visual */}
            <div className={cn("relative order-1 overflow-hidden lg:order-2", s.image ? "bg-[#eef5f8]" : "bg-steel-50")}>
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.imageAlt ?? s.title}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={cn("object-center", s.imageFit === "cover" ? "object-cover" : "object-contain p-6 sm:p-10")}
                />
              ) : (
                <div className="flex h-full items-center justify-center gap-4 p-6">
                  {(s.visuals ?? ["plc", "hmi", "drives"]).map((v) => (
                    <div key={v} className="rounded-xl bg-white p-3 shadow-card">
                      <ProductVisual category={v} className="h-24 w-32 sm:h-28 sm:w-40" />
                    </div>
                  ))}
                </div>
              )}
              {s.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950 shadow">
                  {s.badge}
                </span>
              )}
            </div>

            {/* Copy */}
            <div className="relative order-2 flex flex-col justify-center bg-navy-900 bg-grid-dark px-6 py-6 text-white sm:px-10 lg:order-1 lg:py-10">
              <p className="eyebrow text-gold-400">{s.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-[34px]">
                {s.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-100/85 sm:text-base">{s.text}</p>
              {s.points && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="chip border-white/15 bg-white/5 text-navy-100">
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={s.cta.href} className="btn-primary" tabIndex={i === index ? 0 : -1}>
                  {s.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
                {s.secondary && (
                  <Link href={s.secondary.href} className="btn-outline-light" tabIndex={i === index ? 0 : -1}>
                    {s.secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Controls */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-[110px] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy-800 shadow-card transition hover:bg-white lg:top-1/2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-[110px] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy-800 shadow-card transition hover:bg-white lg:top-1/2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-navy-950/60 px-3 py-1.5 backdrop-blur">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-gold-400" : "w-2 bg-white/50 hover:bg-white/80",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

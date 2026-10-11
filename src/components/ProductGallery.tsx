"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  src: string;
  label: string;
}

/** Main product photo with clickable thumbnails (one per model when available). */
export default function ProductGallery({
  name,
  image,
  gallery = [],
}: {
  name: string;
  image: string;
  gallery?: GalleryItem[];
}) {
  const items: GalleryItem[] = [
    { src: image, label: gallery.find((g) => g.src === image)?.label ?? name },
    ...gallery.filter((g) => g.src !== image),
  ];
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];

  return (
    // min-w-0 lets the grid column shrink so the thumbnail strip scrolls instead of widening the page.
    <div className="min-w-0">
      <div className="card overflow-hidden bg-white p-6 sm:p-10">
        <div className="relative aspect-[4/3]">
          <Image
            key={current.src}
            src={current.src}
            alt={`${name} – ${current.label}`}
            fill
            priority
            className="object-contain"
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>
        {items.length > 1 && (
          <p className="mt-4 text-center text-xs font-semibold text-steel-600">{current.label}</p>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Product photos">
          {items.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={g.label}
              aria-pressed={i === active}
              title={g.label}
              className={cn(
                "relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border bg-white transition",
                i === active ? "border-gold-500 ring-2 ring-gold-200" : "border-steel-200 hover:border-navy-300",
              )}
            >
              <Image src={g.src} alt="" fill className="object-contain p-1.5" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

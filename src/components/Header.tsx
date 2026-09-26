"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import ProductVisual from "./ProductVisual";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", mega: true },
  { href: "/brands", label: "Brands" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ logoSrc }: { logoSrc?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-navy-950 text-[13px] text-navy-100 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p className="hidden items-center gap-2 font-medium tracking-wide lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {site.tagline}
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              <a href={site.phoneHref} className="transition hover:text-gold-400">
                {site.phone}
              </a>
              <span className="text-navy-300">·</span>
              <a href={site.phone2Href} className="transition hover:text-gold-400">
                {site.phone2}
              </a>
            </span>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition hover:text-gold-400">
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
            <span className="hidden items-center gap-1.5 text-navy-300 xl:flex">
              <Clock className="h-3.5 w-3.5" /> {site.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b bg-white/95 backdrop-blur transition-shadow",
          scrolled ? "border-steel-200 shadow-card" : "border-steel-100",
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Logo src={logoSrc} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV.map((item) =>
              item.mega ? (
                <MegaMenu key={item.href} active={isActive(item.href)} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-[15px] font-semibold transition",
                    isActive(item.href)
                      ? "bg-navy-50 text-navy-800"
                      : "text-steel-700 hover:bg-steel-50 hover:text-navy-800",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-navy-800 xl:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-navy-700">
                <Phone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg text-navy-800 hover:bg-steel-50 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "" : "pointer-events-none")} aria-hidden={!open}>
        <div
          className={cn("absolute inset-0 bg-navy-950/60 transition-opacity", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-lift transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
          // Close the drawer whenever a link inside it is clicked.
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <div className="flex items-center justify-between border-b border-steel-100 px-5 py-4">
            <Logo src={logoSrc} />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg text-navy-800 hover:bg-steel-50"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-3 py-4" aria-label="Mobile navigation">
            {NAV.map((item) =>
              item.mega ? (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1 rounded-lg px-3 py-3 text-base font-semibold",
                        isActive(item.href) ? "text-navy-800" : "text-steel-800",
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileProducts((v) => !v)}
                      className="grid h-10 w-10 place-items-center rounded-lg text-steel-600"
                      aria-label="Toggle product categories"
                      aria-expanded={mobileProducts}
                    >
                      <ChevronDown className={cn("h-5 w-5 transition", mobileProducts && "rotate-180")} />
                    </button>
                  </div>
                  {mobileProducts && (
                    <ul className="mb-2 ml-3 border-l border-steel-200 pl-3">
                      {categories.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/products?category=${c.slug}`}
                            className="block rounded-md px-2 py-2 text-sm text-steel-700 hover:bg-navy-50 hover:text-navy-800"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-semibold",
                    isActive(item.href) ? "bg-navy-50 text-navy-800" : "text-steel-800 hover:bg-steel-50",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="space-y-3 border-t border-steel-100 p-5">
            <Link href="/contact" className="btn-primary w-full">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a href={site.phone2Href} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> {site.phone2}
            </a>
            <p className="text-center text-xs text-steel-500">{site.hours}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function MegaMenu({ active }: { active: boolean }) {
  const featured = brands.filter((b) => b.featured);
  return (
    <div className="group relative">
      <Link
        href="/products"
        className={cn(
          "flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-semibold transition",
          active ? "bg-navy-50 text-navy-800" : "text-steel-700 hover:bg-steel-50 hover:text-navy-800",
        )}
      >
        Products <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-40 w-[860px] -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="grid grid-cols-[1.7fr_1fr] overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-lift">
          <div className="p-6">
            <p className="eyebrow mb-4">Product categories</p>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products?category=${c.slug}`}
                    className="flex items-center gap-3 rounded-lg px-2.5 py-2 transition hover:bg-navy-50"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-steel-50 p-1">
                      <ProductVisual category={c.slug} className="h-full w-full" />
                    </span>
                    <span className="text-[13.5px] font-semibold leading-tight text-navy-900">{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy-700 hover:text-gold-600"
            >
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="bg-navy-50 p-6">
            <p className="eyebrow mb-4">Featured brands</p>
            <ul className="space-y-0.5">
              {featured.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/brands/${b.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 transition hover:bg-white"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/brands"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy-700 hover:text-gold-600"
            >
              All {brands.length} brands <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

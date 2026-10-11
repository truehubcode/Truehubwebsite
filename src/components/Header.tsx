"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import ProductVisual from "./ProductVisual";
import { site } from "@/data/site";
import type { CategorySlug } from "@/data/categories";
import { brands, type BrandSlug } from "@/data/brands";
import { cn } from "@/lib/utils";

/* Top navigation: Products ▾ (brand → Controllers / HMI / Drives …) | Brands ▾ | Solutions | Industries | About | Contact */
export interface NavItem {
  label: string;
  href: string;
  /** Illustration key for the small icon next to the label. */
  visual: CategorySlug;
}
export interface BrandNav {
  slug: BrandSlug;
  name: string;
  items: NavItem[];
}

const LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const navBrands = brands.filter((b) => b.nav);

const linkBase = "rounded-lg px-3.5 py-2 text-[15px] font-semibold transition";
const linkIdle = "text-steel-700 hover:bg-steel-50 hover:text-navy-800";
const linkActive = "bg-navy-50 text-navy-800";

export default function Header({ logoSrc, productNav }: { logoSrc?: string; productNav: BrandNav[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<"products" | "brands" | null>(null);

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

  const isActive = (href: string) => pathname.startsWith(href);

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
            {/* Products: one column per brand, with that brand's categories underneath */}
            <Dropdown label="Products" href="/products" active={isActive("/products")} panelClass="w-[760px] xl:w-[900px]">
              <div className="grid grid-cols-4 divide-x divide-steel-100">
                {productNav.map((b) => (
                  <div key={b.slug} className="p-4">
                    <Link
                      href={`/brands/${b.slug}`}
                      className="block font-heading text-sm font-extrabold tracking-tight text-navy-900 hover:text-gold-600"
                    >
                      {b.name}
                    </Link>
                    <ul className="mt-2 space-y-0.5">
                      {b.items.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] font-medium text-steel-700 transition hover:bg-navy-50 hover:text-navy-900"
                          >
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded bg-steel-50 p-0.5">
                              <ProductVisual category={c.visual} className="h-full w-full" />
                            </span>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products?brand=${b.slug}`}
                      className="mt-2 inline-flex items-center gap-1 px-2 text-xs font-bold text-navy-700 hover:text-gold-600"
                    >
                      All {b.name.split(" ")[0]} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
              <Link
                href="/products"
                className="flex items-center justify-between bg-navy-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-700"
              >
                All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Dropdown>

            <Dropdown label="Brands" href="/brands" active={isActive("/brands")} panelClass="w-64">
              <ul className="p-2">
                {navBrands.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/brands/${b.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
                    >
                      {b.name}
                    </Link>
                  </li>
                ))}
                <li className="mt-1 border-t border-steel-100 pt-1">
                  <Link
                    href="/brands"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold text-navy-700 transition hover:bg-navy-50"
                  >
                    All Brands <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </Dropdown>

            {LINKS.map((item) => (
              <Link key={item.href} href={item.href} className={cn(linkBase, isActive(item.href) ? linkActive : linkIdle)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phoneHref} className="hidden items-center gap-2 text-sm font-semibold text-navy-800 xl:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-navy-700">
                <Phone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
            <Link href="/contact" className="btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile: quote button always visible + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/contact" className="btn-primary px-3.5 py-2 text-xs">
              Get Quote
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-lg text-navy-800 hover:bg-steel-50"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
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
            <Link href="/" aria-label="Home">
              <Logo src={logoSrc} />
            </Link>
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
            <MobileGroup
              label="Products"
              href="/products"
              active={isActive("/products")}
              open={mobileGroup === "products"}
              onToggle={() => setMobileGroup((g) => (g === "products" ? null : "products"))}
            >
              {productNav.map((b) => (
                <li key={b.slug} className="pb-2">
                  <Link href={`/brands/${b.slug}`} className="block px-2 pt-2 font-heading text-sm font-extrabold text-navy-900">
                    {b.name}
                  </Link>
                  <ul>
                    {b.items.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block rounded-md px-4 py-1.5 text-sm text-steel-700 hover:bg-navy-50 hover:text-navy-800">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <Link href="/products" className="block rounded-md px-2 py-2 text-sm font-bold text-navy-800 hover:bg-navy-50">
                  All Products
                </Link>
              </li>
            </MobileGroup>

            <MobileGroup
              label="Brands"
              href="/brands"
              active={isActive("/brands")}
              open={mobileGroup === "brands"}
              onToggle={() => setMobileGroup((g) => (g === "brands" ? null : "brands"))}
            >
              {navBrands.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/brands/${b.slug}`}
                    className="block rounded-md px-2 py-2 text-sm text-steel-700 hover:bg-navy-50 hover:text-navy-800"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/brands" className="block rounded-md px-2 py-2 text-sm font-bold text-navy-800 hover:bg-navy-50">
                  All Brands
                </Link>
              </li>
            </MobileGroup>

            {LINKS.map((item) => (
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
            ))}
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

/** Desktop hover/focus dropdown. The label itself links to the section index page. */
function Dropdown({
  label,
  href,
  active,
  panelClass,
  children,
}: {
  label: string;
  href: string;
  active: boolean;
  panelClass?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <Link href={href} className={cn("flex items-center gap-1", linkBase, active ? linkActive : linkIdle)}>
        {label} <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
      </Link>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-40 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
          panelClass,
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-lift">{children}</div>
      </div>
    </div>
  );
}

/** Mobile accordion group: the label links to the index page, the chevron expands the list. */
function MobileGroup({
  label,
  href,
  active,
  open,
  onToggle,
  children,
}: {
  label: string;
  href: string;
  active: boolean;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center">
        <Link
          href={href}
          className={cn("flex-1 rounded-lg px-3 py-3 text-base font-semibold", active ? "text-navy-800" : "text-steel-800")}
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={onToggle}
          className="grid h-10 w-10 place-items-center rounded-lg text-steel-600"
          aria-label={`Toggle ${label.toLowerCase()} list`}
          aria-expanded={open}
        >
          <ChevronDown className={cn("h-5 w-5 transition", open && "rotate-180")} />
        </button>
      </div>
      {open && <ul className="mb-2 ml-3 border-l border-steel-200 pl-3">{children}</ul>}
    </div>
  );
}

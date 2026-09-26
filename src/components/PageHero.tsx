import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  href: string;
  label: string;
}

export default function PageHero({
  eyebrow,
  title,
  text,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-gold-500/15 blur-3xl" />
      <div className="container-x relative py-14 sm:py-18 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs font-medium text-navy-200">
          <Link href="/" className="hover:text-gold-400">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 text-navy-300" />
              <Link href={c.href} className="hover:text-gold-400">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow text-gold-400">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {text && <p className="mt-4 max-w-2xl text-base text-navy-100/85 sm:text-lg">{text}</p>}
        {children}
      </div>
    </section>
  );
}

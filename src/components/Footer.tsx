import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "./SocialIcons";
import { site } from "@/data/site";
import { categories } from "@/data/categories";

const company = [
  { href: "/about", label: "About us" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/services", label: "Engineering services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact & quote" },
];

export default function Footer({ logoSrc, address }: { logoSrc?: string; address: string }) {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
    { href: site.social.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: site.social.youtube, Icon: YouTubeIcon, label: "YouTube" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.9fr_1.2fr]">
        <div>
          <Logo tone="dark" src={logoSrc} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
            Genuine industrial automation products from the world&apos;s leading brands, backed by our own
            engineering team and pan-India support.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.pillars.map((p) => (
              <span key={p} className="chip border-white/15 text-navy-100">
                {p}
              </span>
            ))}
          </div>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-navy-200 transition hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Products</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 9).map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="text-navy-200 transition hover:text-gold-400">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/products" className="font-semibold text-gold-400 hover:text-gold-300">
                All products →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-200 transition hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-200">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span className="flex flex-col gap-1">
                <a href={site.phoneHref} className="hover:text-gold-400">
                  {site.phone}
                </a>
                <a href={site.phone2Href} className="hover:text-gold-400">
                  {site.phone2}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.{site.gstin ? ` GSTIN: ${site.gstin}.` : ""}
          </p>
          <p>All brand names and trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}

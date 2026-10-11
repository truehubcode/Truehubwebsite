import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { existsSync } from "node:fs";
import path from "node:path";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { fullAddress } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const defaultTitle = `${site.name} | Industrial Automation Products & Engineering Services in India`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "industrial automation products supplier India",
    "HUCEEN PLC supplier India",
    "Siemens PLC dealer",
    "Delta PLC HMI supplier",
    "Mitsubishi PLC supplier",
    "VFD supplier India",
    "servo motor drive supplier",
    "SIMATIC S7-1200",
    "HUCEEN E7-200 SMART",
    "SINAMICS V20",
    "control panel manufacturer",
    "PLC programming services",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // Drop your original logo at /public/logo.png and it will be used automatically.
  const logoSrc = existsSync(path.join(process.cwd(), "public", "logo.png")) ? "/logo.png" : undefined;

  // Products dropdown: brand first, then that brand's own product groups (e.g. Delta's "Drive & Power
  // Quality / Motion / Control / Field Device"). Brands without groups fall back to our categories.
  const productNav = brands.map((b) => {
    const own = products.filter((p) => p.brand === b.slug);
    const groupNames = [...new Set(own.map((p) => p.group).filter((g): g is string => Boolean(g)))];
    const items = groupNames.length
      ? groupNames.map((g) => ({
          label: g,
          href: `/products?brand=${b.slug}&group=${encodeURIComponent(g)}`,
          visual: own.find((p) => p.group === g)?.category ?? "plc",
        }))
      : categories
          .filter((c) => own.some((p) => p.category === c.slug))
          .map((c) => ({ label: c.name, href: `/products?brand=${b.slug}&category=${c.slug}`, visual: c.slug }));
    return { slug: b.slug, name: b.name, items };
  });

  const organisation = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: [site.phone, site.phone2],
    slogan: site.tagline,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pin,
      addressCountry: "IN",
    },
    areaServed: "IN",
    sameAs: Object.values(site.social).filter(Boolean),
  };

  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }} />
        <Header logoSrc={logoSrc} productNav={productNav} />
        <main className="flex-1">{children}</main>
        <Footer logoSrc={logoSrc} address={fullAddress()} />
        <WhatsAppButton />
      </body>
    </html>
  );
}

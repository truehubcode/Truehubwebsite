import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { existsSync } from "node:fs";
import path from "node:path";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
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
    "Siemens PLC dealer",
    "Schneider drives distributor",
    "Delta PLC HMI supplier",
    "VFD supplier India",
    "servo motor drive supplier",
    "SIMATIC S7-1200",
    "SINAMICS V20",
    "Altivar ATV320",
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
        <Header logoSrc={logoSrc} />
        <main className="flex-1">{children}</main>
        <Footer logoSrc={logoSrc} address={fullAddress()} />
        <WhatsAppButton />
      </body>
    </html>
  );
}

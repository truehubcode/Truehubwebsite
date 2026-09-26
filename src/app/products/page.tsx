import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import CTA from "@/components/CTA";
import { products } from "@/data/products";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Products – PLC, HMI, VFD, Servo, Sensors & Power Supplies",
  description: `Browse ${products.length}+ industrial automation products from ${brands.length} brands including Siemens, Schneider Electric, Delta, ABB, Mitsubishi Electric and Omron. Genuine stock, pan-India delivery.`,
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="Industrial automation products"
        text="Filter by category or brand, or search by part number and series. Every item is genuine, warranted and available for quotation."
        crumbs={[{ href: "/products", label: "Products" }]}
      />
      <section className="section-y bg-steel-50">
        <div className="container-x">
          <Suspense fallback={<p className="text-sm text-steel-600">Loading catalogue…</p>}>
            <ProductCatalog products={products} />
          </Suspense>
        </div>
      </section>
      <CTA
        title="Looking for a part number that isn't listed?"
        text="Our catalogue shows the ranges we handle most. We source thousands of additional items — send us the part number and we will quote it."
      />
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-y bg-steel-50">
      <div className="container-x text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-steel-600">
          The page you are looking for has moved or does not exist. Try the catalogue or contact us and we will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/products" className="btn-navy">
            Browse products <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

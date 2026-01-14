import React from "react";
import Link from "next/link";

export default function ProductsIndex() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data focuses on managed infrastructure and hosting as our
          core offering. We also provide SaaS products—Analytics, POS, and
          Booking—that integrate tightly with our infrastructure.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/products/analytics" className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Analytics</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Production dashboards, custom reports, and real-time metrics.
            </p>
          </Link>
          <Link href="/products/pos" className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Point of Sale</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Fast, reliable POS for retail and hospitality with offline mode.
            </p>
          </Link>
          <Link href="/products/infrastructure" className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Infrastructure</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Secure hosting, backups, and managed data infrastructure.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

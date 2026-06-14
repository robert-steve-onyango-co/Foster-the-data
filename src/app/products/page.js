import React from "react";
import Link from "next/link";

export default function ProductsIndex() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data provides a suite of products designed to help SMEs
          manage data, protect information, and surface business insights.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/products/foster-insight" className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Foster Insight</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Business intelligence and analytics for real-time and historical insights.
            </p>
          </Link>
          <Link href="/products/foster-backup" className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Foster Backup</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Managed backup and recovery to protect critical business data.
            </p>
          </Link>
          <Link href="/products/foster-crm" className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Foster CRM</h3>
            <p className="text-sm text-muted-foreground mt-2">
              CRM tools to manage customers, leads, and sales pipelines.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

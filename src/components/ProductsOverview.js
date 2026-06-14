"use client";
import React from "react";
import Link from "next/link";

export default function ProductsOverview() {
  return (
    <section className="w-full py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Products Overview</h2>
        <p className="text-muted-foreground mt-2">
          Our product suite helps SMEs gain insights, protect data, and manage
          customer relationships.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Link href="/products/foster-insight" className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Foster Insight</h3>
            <p className="text-sm text-muted-foreground mt-2">Business intelligence & dashboards.</p>
          </Link>
          <Link href="/products/foster-backup" className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Foster Backup</h3>
            <p className="text-sm text-muted-foreground mt-2">Managed backups & recovery.</p>
          </Link>
          <Link href="/products/foster-crm" className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Foster CRM</h3>
            <p className="text-sm text-muted-foreground mt-2">Customer relationship tools.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

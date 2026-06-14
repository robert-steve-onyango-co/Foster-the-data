"use client";
import React from "react";
import Link from "next/link";

export default function SolutionsOverview() {
  return (
    <section className="w-full py-12 bg-muted/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Solutions Overview</h2>
        <p className="text-muted-foreground mt-2">
          We help businesses digitize operations, gain insights, and receive
          managed data services as an outsourced data partner.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Link href="/solutions#sme-digitization" className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">SME Digitization</h3>
            <p className="text-sm text-muted-foreground mt-2">Digitize records and workflows.</p>
          </Link>
          <Link href="/solutions#business-intelligence" className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Business Intelligence</h3>
            <p className="text-sm text-muted-foreground mt-2">Dashboards, KPIs, and reporting.</p>
          </Link>
          <Link href="/solutions#managed-data-services" className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Managed Data Services</h3>
            <p className="text-sm text-muted-foreground mt-2">Outsourced data team support.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

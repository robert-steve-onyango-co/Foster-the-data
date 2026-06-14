import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FosterInsightPage() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Foster Insight</h1>
        <p className="text-muted-foreground mt-4">
          Business Intelligence and Analytics Platform that transforms business
          data into actionable insights through interactive dashboards and
          reporting tools.
        </p>

        <div className="mt-6">
          <Image
            src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png"
            width={1200}
            height={600}
            alt="Dashboard screenshot"
            className="rounded-lg shadow-md"
          />
        </div>

        <h2 className="mt-8 text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside mt-4 text-muted-foreground">
          <li>Sales analytics</li>
          <li>Customer analytics</li>
          <li>Inventory analytics</li>
          <li>KPI tracking</li>
          <li>Automated reporting</li>
          <li>Executive dashboards</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Value Proposition</h2>
        <p className="text-muted-foreground mt-2">
          Help business owners understand what is happening in their business
          using real-time and historical data.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/contact-us">
            <button className="btn btn-primary">Book a Consultation</button>
          </Link>
          <Link href="/contact-us">
            <button className="btn btn-outline">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

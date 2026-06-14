"use client";

import React from "react";
import Link from "next/link";

export default function StartTodayPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-muted/30 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold">Start Today — Onboarding</h1>
        <p className="text-muted-foreground mt-4">
          Our onboarding flow is coming soon. You will be able to register your
          business, select services, and configure your workspace.
        </p>

        <div className="mt-8 text-left">
          <h3 className="text-xl font-semibold">Planned registration fields</h3>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Business Name</li>
            <li>Business Type</li>
            <li>Industry</li>
            <li>Business Email</li>
            <li>Phone Number</li>
            <li>Business Location</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">Service Interests</h3>
          <p className="text-muted-foreground mt-2">
            SME Digitization, Business Intelligence, Managed Data Services,
            Foster Insight, Foster Backup, Foster CRM
          </p>
        </div>

        <div className="mt-8">
          <Link href="/contact-us">
            <a className="btn btn-primary">Contact Sales</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

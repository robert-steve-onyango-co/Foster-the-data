"use client";

import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-muted/30 px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Login — Dashboard Access</h1>
        <p className="text-muted-foreground mt-4">
          Dashboard access will be available soon. In the future, businesses
          will log in at <strong>login.fosterthedata.com</strong> to access
          Foster Insight, Foster Backup, Foster CRM, reports, and analytics.
        </p>

        <div className="mt-8">
          <Link href="/">
            <a className="text-primary underline">Return to home</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

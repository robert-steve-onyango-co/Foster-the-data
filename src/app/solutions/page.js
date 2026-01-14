import React from "react";

export default function SolutionsPage() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">Solutions by Industry</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data delivers tailored solutions for industries that
          depend on reliable data and fast insights.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Retail</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Inventory forecasting, multi-location POS, and unified reporting
              for retail chains.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Hospitality</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Reservation and POS integration, real-time operations dashboards,
              and offline resiliency.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">SaaS & Platforms</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Instrumentation, usage analytics, and managed hosting for
              developer-first teams.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold">Need a custom solution?</h3>
          <p className="text-muted-foreground mt-2">
            Our solutions engineers can design a package for complex
            requirements—book a consultation to get started.
          </p>
        </div>
      </div>
    </section>
  );
}

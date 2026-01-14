import React from "react";

export default function AnalyticsProduct() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data Analytics provides real-time dashboards, ad-hoc
          reporting, and automated data pipelines so your teams can get insights
          into customers, sales, and operations.
        </p>
        <ul className="mt-6 space-y-3 list-disc list-inside text-muted-foreground">
          <li>Live dashboards with streaming metrics</li>
          <li>Custom reports and scheduled exports</li>
          <li>Role-based access and SSO</li>
          <li>Integrations with common databases and trackers</li>
        </ul>
      </div>
    </section>
  );
}

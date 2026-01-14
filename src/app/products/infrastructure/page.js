import React from "react";

export default function InfraProduct() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Managed Infrastructure</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data offers managed hosting, automated backups, and data
          pipelines with enterprise SLAs. We handle the ops so your team can
          focus on product and growth.
        </p>
        <ul className="mt-6 space-y-3 list-disc list-inside text-muted-foreground">
          <li>Secure, compliant hosting with backups</li>
          <li>Automated scaling and monitoring</li>
          <li>Managed data pipelines and ETL</li>
          <li>Enterprise support and SLAs</li>
        </ul>
      </div>
    </section>
  );
}

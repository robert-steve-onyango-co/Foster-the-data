import React from "react";

export default function POSProduct() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Point of Sale (POS)</h1>
        <p className="text-muted-foreground mt-4">
          Our POS solution is built for speed and reliability—ideal for retail
          and hospitality. Offline-first architecture ensures transactions keep
          flowing even when the network is unstable.
        </p>
        <ul className="mt-6 space-y-3 list-disc list-inside text-muted-foreground">
          <li>Fast checkout and inventory sync</li>
          <li>Offline transaction support</li>
          <li>Integrations with payments and analytics</li>
          <li>Centralized reporting for multi-location businesses</li>
        </ul>
      </div>
    </section>
  );
}

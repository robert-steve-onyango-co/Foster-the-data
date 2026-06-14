import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FosterCrmPage() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Foster CRM</h1>
        <p className="text-muted-foreground mt-4">
          Customer Relationship Management platform to help businesses organize,
          manage, and grow customer relationships.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside mt-4 text-muted-foreground">
          <li>Customer database</li>
          <li>Lead management</li>
          <li>Sales tracking</li>
          <li>Follow-up reminders</li>
          <li>Customer segmentation</li>
          <li>Customer analytics</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Value Proposition</h2>
        <p className="text-muted-foreground mt-2">
          Help businesses improve customer retention, increase sales, and better
          understand their customers.
        </p>

        <div className="mt-6">
          <Image
            src="https://images.unsplash.com/photo-1520975919502-7f7a3d6f2f12"
            width={1200}
            height={600}
            alt="CRM illustration"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/contact-us">
            <button className="btn btn-primary">Schedule a Demo</button>
          </Link>
          <Link href="/contact-us">
            <button className="btn btn-outline">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

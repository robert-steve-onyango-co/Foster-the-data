import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FosterBackupPage() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Foster Backup</h1>
        <p className="text-muted-foreground mt-4">
          Managed Backup and Recovery solution providing secure storage,
          backup, and recovery services for business data.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside mt-4 text-muted-foreground">
          <li>Automated backups</li>
          <li>Database backups</li>
          <li>File backups</li>
          <li>Disaster recovery</li>
          <li>Data retention management</li>
          <li>Backup monitoring</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Value Proposition</h2>
        <p className="text-muted-foreground mt-2">
          Protect business-critical information from loss, corruption, accidental
          deletion, or system failure.
        </p>

        <div className="mt-6">
          <Image
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            width={1200}
            height={600}
            alt="Backup illustration"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/contact-us">
            <button className="btn btn-primary">Get Backup Services</button>
          </Link>
          <Link href="/contact-us">
            <button className="btn btn-outline">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

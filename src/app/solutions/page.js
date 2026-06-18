import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">Solutions</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data helps businesses solve operational and data challenges
          through digitization, business intelligence, and managed data services.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">SME Digitization</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Transition from manual processes to structured digital systems.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1559526324-593bc073d938"
              alt="digitization"
              width={640}
              height={180}
              className="w-full h-32 object-cover rounded-md mt-3"
            />
            <ul className="mt-3 text-muted-foreground list-disc list-inside text-sm">
              <li>Data collection & cleaning</li>
              <li>Data migration</li>
              <li>Database design</li>
            </ul>
            <div className="mt-4">
              <Link href="/contact-us" className="text-primary underline">
                Learn More
              </Link>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Business Intelligence</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Convert business data into meaningful insights and reports.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1551836022-1f2f1e2d3b4b"
              alt="analytics"
              width={640}
              height={180}
              className="w-full h-32 object-cover rounded-md mt-3"
            />
            <ul className="mt-3 text-muted-foreground list-disc list-inside text-sm">
              <li>Dashboard development</li>
              <li>KPI monitoring</li>
              <li>Sales & customer analytics</li>
            </ul>
            <div className="mt-4">
              <Link href="/contact-us" className="text-primary underline">
                Learn More
              </Link>
            </div>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold">Managed Data Services</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Act as an outsourced data department delivering professional support.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1581091012184-7c1a1b6b3a8b"
              alt="data-ops"
              width={640}
              height={180}
              className="w-full h-32 object-cover rounded-md mt-3"
            />
            <ul className="mt-3 text-muted-foreground list-disc list-inside text-sm">
              <li>Database administration</li>
              <li>Data governance</li>
              <li>Backup & monitoring</li>
            </ul>
            <div className="mt-4">
              <Link href="/contact-us" className="text-primary underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Industries We Serve</h2>
          <p className="text-muted-foreground mt-4">
            We support a wide range of industries with tailored data
            and analytics solutions.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              "Retail",
              "Pharmacy",
              "Healthcare",
              "Education",
              "SACCOs",
              "Hospitality",
              "Restaurants",
              "Manufacturing",
              "Logistics",
              "Agriculture",
              "Agrovets",
              "Wholesale Distribution",
              "Real Estate",
              "Financial Services",
              "NGOs",
              "Professional Services",
              "Construction",
              "E-commerce",
            ].map((industry) => (
              <div key={industry} className="p-3 border rounded-lg text-center">
                {industry}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold">Need a custom solution?</h3>
          <p className="text-muted-foreground mt-2">
            Our solutions engineers can design a package for complex
            requirements—book a consultation to get started.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/contact-us">
            <Button size="lg" className="rounded-full">Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

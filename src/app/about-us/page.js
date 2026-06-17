"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">About Foster the Data</h1>
        <p className="text-muted-foreground mt-4">
          Foster the Data is a Data Transformation, Business Intelligence, and
          Managed Data Services company helping SMEs digitize operations,
          manage data, and gain actionable business insights.
        </p>

        {/* Our Story */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground mt-2">
            We started with a simple mission: to make enterprise-grade data
            tools accessible to growing businesses. Over the years we have
            partnered with SMEs across industries to modernize operations,
            centralize data, and deliver insights that drive growth.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground mt-2">
              Help organizations unlock value from their data through
              digitization, analytics, and managed services.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="text-muted-foreground mt-2">
              To become Africa&apos;s most trusted data transformation partner for
              SMEs.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Our Values</h3>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Reliability</li>
              <li>Excellence</li>
              <li>Customer Success</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>

        {/* Why Foster the Data */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Why Foster the Data</h2>
          <p className="text-muted-foreground mt-2">
            We focus on local SME needs, offering affordable, scalable, and
            practical data solutions backed by experienced engineers and a
            strong commitment to long-term partnerships.
          </p>
        </div>

        {/* Image gallery (horizontal scroll) */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-4 overflow-x-auto no-scrollbar flex gap-4 py-4">
            {[
              "https://images.unsplash.com/photo-1559526324-593bc073d938",
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              "https://images.unsplash.com/photo-1523408131635-3d1a0b3c6f1b",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`gallery-${i}`}
                className="h-44 w-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Callouts */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Local SME Focus</h3>
            <p className="text-muted-foreground mt-2">
              We design solutions that meet the constraints and growth patterns
              of small and growing businesses.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">Scalable Technology</h3>
            <p className="text-muted-foreground mt-2">
              Our platform scales with your business so you pay for what you
              need while staying ready to grow.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/contact-us" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

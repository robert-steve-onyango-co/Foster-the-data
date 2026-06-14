"use client";

import { useState, useEffect } from "react";

import HeroSection from "@/components/HeroSection";
import ProductsOverview from "@/components/ProductsOverview";
import SolutionsOverview from "@/components/SolutionsOverview";
import LogoSection from "@/components/LogoSection";
import FeatureSection from "@/components/FeatureSection";
import WorkingSection from "@/components/WorkingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Solutions + Products Overview */}
        <LogoSection />

        {/* New order: Solutions, Products, How It Works, Infrastructure, Testimonials, FAQ, CTA */}
        <SolutionsOverview />
        <ProductsOverview />
        <WorkingSection />
        <FeatureSection container={container} item={item} />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}

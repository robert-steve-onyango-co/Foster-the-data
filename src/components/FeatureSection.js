"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import features from "@/data/feature.data";
const FeatureSection = ({ container, item }) => {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Infrastructure
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            IaaS-first: hosting, databases, and storage
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Foster the Data focuses on high-performance web hosting, managed
            SQL/NoSQL databases, and storage solutions optimized for latency and
            cost. Our SaaS tools run on this platform for consistent results.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={item}>
              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-4 flex flex-col">
                  <div className="size-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="px-4 md:px-6 relative">
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
            Domains
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Domain registration pricing
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Register domain names with transparent, no-surprise pricing. Choose
            1-year or 2-year registrations.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList className="rounded-full p-1 py-4 h-10">
                <TabsTrigger
                  value="one"
                  className="rounded-full px-6 text-base py-4  dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-white"
                >
                  1 Year
                </TabsTrigger>
                <TabsTrigger
                  value="two"
                  className="rounded-full px-6 text-base  py-4 dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-white"
                >
                  2 Years
                </TabsTrigger>
                <TabsTrigger
                  value="three"
                  className="rounded-full px-6 text-base  py-4 dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-white"
                >
                  3 Years
                </TabsTrigger>
              </TabsList>
            </div>
              <TabsContent value="one">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 lg:gap-8">
                  {[
                    {
                      tld: ".com",
                      oneYear: "$12",
                      twoYear: "$22",
                      cta: "Register",
                    },
                    {
                      tld: ".net",
                      oneYear: "$10",
                      twoYear: "$18",
                      cta: "Register",
                    },
                    {
                      tld: ".io",
                      oneYear: "$45",
                      twoYear: "$80",
                      cta: "Register",
                    },
                  ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{item.tld}</h3>
                        <p className="text-muted-foreground mt-2">1 year</p>
                        <div className="flex items-baseline mt-2">
                          <span className="text-3xl font-bold">{item.oneYear}</span>
                        </div>
                        <p className="text-muted-foreground mt-4">2 years</p>
                        <div className="flex items-baseline mt-2">
                          <span className="text-3xl font-bold">{item.twoYear}</span>
                        </div>
                        <div className="mt-6 flex-grow" />
                        <Button className="w-full mt-auto rounded-full text-base py-3 bg-primary text-primary-foreground">
                          {item.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="two">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    tld: ".com",
                    price: "$22",
                    cta: "Register",
                  },
                  {
                    tld: ".net",
                    price: "$18",
                    cta: "Register",
                  },
                  {
                    tld: ".io",
                    price: "$80",
                    cta: "Register",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{item.tld}</h3>
                        <p className="text-muted-foreground mt-2">2 years</p>
                        <div className="flex items-baseline mt-2">
                          <span className="text-3xl font-bold">{item.price}</span>
                        </div>
                        <div className="mt-6 flex-grow" />
                        <Button className="w-full mt-auto rounded-full text-base py-3 bg-primary text-primary-foreground">
                          {item.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="three">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    tld: ".com",
                    price: "$30",
                    cta: "Register",
                  },
                  {
                    tld: ".net",
                    price: "$25",
                    cta: "Register",
                  },
                  {
                    tld: ".io",
                    price: "$150",
                    cta: "Register",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full border-border/40 shadow-md bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{item.tld}</h3>
                        <p className="text-muted-foreground mt-2">3 years</p>
                        <div className="flex items-baseline mt-2">
                          <span className="text-3xl font-bold">{item.price}</span>
                        </div>
                        <div className="mt-6 flex-grow" />
                        <Button className="w-full mt-auto rounded-full text-base py-3 bg-primary text-primary-foreground">
                          {item.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

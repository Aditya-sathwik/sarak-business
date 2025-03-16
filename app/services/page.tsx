"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ServiceSvg from "@/components/svg/service-svg";

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-out");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (processRef.current) observer.observe(processRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (processRef.current) observer.unobserve(processRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We offer a comprehensive range of consulting services designed to help your business thrive in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div
          ref={servicesRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Strategy & Transformation</h3>
              <p className="text-muted-foreground mb-6">
                We develop comprehensive strategies that align with your business goals and market dynamics, setting a clear path for sustainable growth.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Market analysis and competitive positioning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Business model innovation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Growth strategy development</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Process Optimization</h3>
              <p className="text-muted-foreground mb-6">
                We streamline your operations to enhance efficiency, reduce costs, and improve overall performance across all business functions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Workflow analysis and redesign</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Operational efficiency improvements</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Quality management systems</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Leadership Development</h3>
              <p className="text-muted-foreground mb-6">
                We empower your leadership team with the skills and knowledge needed to drive organizational success and foster innovation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Executive coaching programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Team building and collaboration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Change management capabilities</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Client Success Programs</h3>
              <p className="text-muted-foreground mb-6">
                We help you develop and implement customer-centric strategies that enhance satisfaction, loyalty, and long-term value.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Customer experience optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Retention strategy development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Customer success frameworks</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <ServiceSvg />
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="py-20 bg-muted/50">
        <div
          ref={processRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Consulting Process</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              We follow a structured yet flexible approach to ensure we deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We begin by understanding your business, challenges, and goals through in-depth discussions and analysis.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a tailored strategy and implementation plan based on our findings and your specific needs.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-muted-foreground">
                We work alongside your team to execute the strategy, providing guidance and support throughout.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Evaluation</h3>
              <p className="text-muted-foreground">
                We measure results, refine our approach as needed, and ensure sustainable long-term success.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
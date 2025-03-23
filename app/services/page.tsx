"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, MonitorCog, Code, PencilRuler, Zap } from "lucide-react";
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
            We provide end-to-end solutions to bring your ideas to life, from innovative product development to stunning design and reliable technical support.
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
                <MonitorCog className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Product Development & MVPs</h3>
              <p className="text-muted-foreground mb-6">
                We transform your ideas into functional products and minimum viable products (MVPs) designed for rapid market entry and scalability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Ideation and prototyping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>MVP development and testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Scalable product solutions</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Services & Maintenance</h3>
              <p className="text-muted-foreground mb-6">
                We provide robust technical solutions and ongoing maintenance to ensure your systems run smoothly and efficiently.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Custom software development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>System integration and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>24/7 maintenance and support</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <PencilRuler className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Designing & Branding</h3>
              <p className="text-muted-foreground mb-6">
                We craft intuitive, visually appealing designs and cohesive branding to elevate your product’s user experience and market presence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>User-centered UI/UX design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Brand identity development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Prototyping and usability testing</span>
                </li>
              </ul>
            </div>

            <div className="service-card bg-background rounded-lg p-8 shadow-sm border border-border/50 hover:border-primary/20 transition-all">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">End-to-End Solutions</h3>
              <p className="text-muted-foreground mb-6">
                From concept to launch, we combine our expertise to deliver seamless, high-quality solutions tailored to your business needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Full-cycle product development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Cross-functional team collaboration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Post-launch support and iteration</span>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              We follow a structured yet flexible approach to ensure your product is built efficiently and meets your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We start by understanding your vision, requirements, and target audience through detailed discussions and research.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design & Strategy</h3>
              <p className="text-muted-foreground">
                We create a tailored plan, including UI/UX designs and technical architecture, to bring your idea to life.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Our team builds your product or MVP, ensuring high-quality code and seamless functionality.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
              <p className="text-muted-foreground">
                We deploy your product, monitor performance, and provide ongoing maintenance for long-term success.
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
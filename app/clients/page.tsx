"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClientSvg from "@/components/svg/client-svg";
import TestimonialSvg from "@/components/svg/testimonial-svg";

export default function ClientsPage() {
  const casesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    if (casesRef.current) observer.observe(casesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      if (casesRef.current) observer.unobserve(casesRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            See how we’ve turned ideas into thriving products with innovative development, technical expertise, and standout design.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div
          ref={casesRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Real-world results from our work in product development, technical solutions, and design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Tech Startup</div>
                <h3 className="text-2xl font-bold mb-4">MVP Launch in 8 Weeks</h3>
                <p className="text-muted-foreground mb-6">
                  We built and launched a scalable MVP for a tech startup, driving 25% user growth in the first quarter.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">25% User Growth</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">8-Week Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">E-Commerce</div>
                <h3 className="text-2xl font-bold mb-4">Revamped Platform Performance</h3>
                <p className="text-muted-foreground mb-6">
                  We optimized an e-commerce platform’s backend, cutting load times by 40% and boosting sales conversions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">40% Faster Load</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">15% Sales Boost</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Health Tech</div>
                <h3 className="text-2xl font-bold mb-4">Redesigned User Experience</h3>
                <p className="text-muted-foreground mb-6">
                  We crafted a user-friendly UI/UX for a health app, increasing user retention by 30% with seamless design.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">30% Retention</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">20% Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">FinTech</div>
                <h3 className="text-2xl font-bold mb-4">Secure Product Upgrade</h3>
                <p className="text-muted-foreground mb-6">
                  We enhanced a FinTech app with secure, scalable features, reducing downtime by 50% and gaining trust.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">50% Less Downtime</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">35% Trust Boost</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Retail</div>
                <h3 className="text-2xl font-bold mb-4">Branding Overhaul</h3>
                <p className="text-muted-foreground mb-6">
                  We redefined a retail brand’s identity and UI, lifting customer engagement by 40% with cohesive design.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">40% Engagement</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">25% Brand Recall</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">EdTech</div>
                <h3 className="text-2xl font-bold mb-4">Mobile App Development</h3>
                <p className="text-muted-foreground mb-6">
                  We delivered a robust mobile app for an EdTech firm, growing active users by 35% with reliable tech.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">35% User Growth</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">99% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <ClientSvg />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div
          ref={testimonialsRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Hear from businesses we’ve empowered with our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg
                className="h-10 w-10 text-primary/20 absolute top-6 left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "Their team delivered our MVP faster than we thought possible, setting us up for rapid growth."
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Alex Carter</div>
                  <div className="text-sm text-muted-foreground">Founder, TechPulse</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg
                className="h-10 w-10 text-primary/20 absolute top-6 left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "The technical overhaul they provided made our platform faster and more reliable—our customers noticed!"
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Priya Sharma</div>
                  <div className="text-sm text-muted-foreground">CTO, ShopSphere</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg
                className="h-10 w-10 text-primary/20 absolute top-6 left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "The UI/UX redesign transformed our app—it’s now intuitive and visually stunning. Users love it!"
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Liam Brooks</div>
                  <div className="text-sm text-muted-foreground">Product Lead, HealthSync</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg
                className="h-10 w-10 text-primary/20 absolute top-6 left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "Their end-to-end support—from concept to launch—made our product a market success."
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Emma Hayes</div>
                  <div className="text-sm text-muted-foreground">CEO, LearnNow</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <TestimonialSvg />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Let’s Create Your Success Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import HeroSvg from "../public/mainhome.svg"
import FeatureSvg from "@/components/svg/feature-svg"
import Image from "next/image"

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-out")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (featuresRef.current) observer.unobserve(featuresRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col relative">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        <video ref={videoRef} className="absolute min-w-full min-h-full object-cover" autoPlay muted loop playsInline>
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden z-10">
        <div
          ref={heroRef}
          className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8 opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex-1 space-y-4">
            <h1
              className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Build Your Vision with Expert Solutions
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[600px]"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}
            >
              We craft innovative products, deliver seamless technical support, and design stunning UI/UX to elevate
              your brand and drive success.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-[600px] mx-auto md:mx-0">
            <Image
              src={HeroSvg || "/placeholder.svg"}
              alt="My Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/95 relative z-10">
        <div
          ref={featuresRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2
              className="font-bold tracking-tighter text-2xl sm:text-3xl md:text-4xl"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Our Service Offerings
            </h2>
            <p
              className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}
            >
              Tailored solutions designed to meet your unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                Strategic Planning
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We develop comprehensive strategies aligned with your business goals and market dynamics.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                Process Optimization
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We streamline operations to enhance efficiency, reduce costs, and improve overall performance.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                Leadership Development
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We empower your leaders with the skills and knowledge needed to drive organizational success.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <FeatureSvg />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/90 text-primary-foreground relative z-10">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2
            className="font-bold tracking-tighter text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Ready to Elevate Your Business?
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-[600px] mx-auto mb-8 text-primary-foreground/80"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}
          >
            Contact us today to explore how our services can benefit your organization.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full">
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
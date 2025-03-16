"use client"

import { useEffect, useRef } from "react"
import AboutSvg from "@/components/svg/about-svg"
import MissionSvg from "@/components/svg/mission-svg"

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

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

    if (missionRef.current) observer.observe(missionRef.current)
    if (timelineRef.current) observer.observe(timelineRef.current)
    if (teamRef.current) observer.observe(teamRef.current)

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current)
      if (timelineRef.current) observer.unobserve(timelineRef.current)
      if (teamRef.current) observer.unobserve(teamRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            About Our Consulting Firm
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            We are a team of experienced consultants dedicated to helping businesses achieve their full potential
            through strategic excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div
          ref={missionRef}
          className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-12 opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to deliver tailored consulting services that drive measurable results for clients across
              industries. We believe in building long-term partnerships based on trust, expertise, and a commitment to
              excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              We combine deep industry knowledge with innovative methodologies to help our clients navigate complex
              challenges, seize opportunities, and achieve sustainable growth.
            </p>
          </div>
          <div className="flex-1 w-full max-w-[500px] mx-auto md:mx-0">
            <MissionSvg />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div
          ref={timelineRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">Our Expertise</h2>

          <div className="max-w-3xl mx-auto">
            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              <p className="text-muted-foreground">
                We craft comprehensive business strategies that align with your vision and market dynamics, setting a
                clear path for growth and success.
              </p>
            </div>

            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Operational Efficiency</h3>
              <p className="text-muted-foreground">
                We optimize your operations to enhance productivity, reduce costs, and improve overall performance
                across all business functions.
              </p>
            </div>

            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Leadership Coaching</h3>
              <p className="text-muted-foreground">
                We develop your leadership team's capabilities through personalized coaching programs that foster
                innovation and effective management.
              </p>
            </div>

            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground">
                We guide your organization through digital transformation initiatives that leverage technology to create
                competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div
          ref={teamRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              We believe in a collaborative approach that combines industry expertise with innovative thinking to
              deliver exceptional results.
            </p>
          </div>

          <div className="flex justify-center">
            <AboutSvg />
          </div>
        </div>
      </section>
    </div>
  )
}


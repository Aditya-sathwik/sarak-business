"use client"

import { useEffect, useRef } from "react"
import AboutSvg from "../../public/its.png"
import MissionSvg from "@/components/svg/mission-svg"
import Image from 'next/image';

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
          <h1
            className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            About Us
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[800px] mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}
          >
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
            <h2
              className="font-bold tracking-tighter text-2xl sm:text-3xl md:text-4xl mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Our Mission
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
              Our mission is to craft innovative digital products, provide reliable technical support, and design compelling UI/UX experiences. We believe in building lasting client partnerships through expertise, agility, and a dedication to quality. We merge technical proficiency with creative solutions, enabling clients to launch impactful MVPs, maintain robust systems, and cultivate strong brand presence in the digital landscape.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
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
          <h2
            className="font-bold tracking-tighter text-2xl sm:text-3xl md:text-4xl mb-12 text-center"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Our Expertise
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="timeline-item">
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                MVP Development
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We rapidly build Minimum Viable Products, enabling quick market validation and agile iteration for your innovative ideas.
              </p>
            </div>

            <div className="timeline-item">
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                Technical Maintenance
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We provide comprehensive technical support and maintenance, ensuring your systems are reliable, secure, and perform optimally.
              </p>
            </div>

            <div className="timeline-item">
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                UI/UX Design
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We craft intuitive and engaging user interfaces and experiences, enhancing brand perception and user satisfaction significantly.
              </p>
            </div>

            <div className="timeline-item">
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
              >
                Product Development
              </h3>
              <p
                className="text-muted-foreground text-sm sm:text-base"
                style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
              >
                We develop scalable and robust products, from concept to launch, focusing on quality and user-centric functionalities.
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
            <h2
              className="font-bold tracking-tighter text-2xl sm:text-3xl md:text-4xl mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Our Approach
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto"
              style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}
            >
              We believe in a collaborative approach that combines industry expertise with innovative thinking to
              deliver exceptional results.
            </p>
          </div>

          <div className="flex justify-center">
            {/* <AboutSvg /> */}
            {/* 
               <Image
                      src={AboutSvg}
                      alt="My Image"
                      width={1000} // required
                      height={500} // required
                    /> */}
          </div>
        </div>
      </section>
    </div>
  )
}
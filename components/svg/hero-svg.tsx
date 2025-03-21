"use client"

import { useEffect, useRef } from "react"

export default function HeroSvg() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path")
      const circles = svgRef.current.querySelectorAll("circle")

      paths.forEach((path) => {
        path.classList.add("animate-draw")
      })

      circles.forEach((circle, index) => {
        setTimeout(() => {
          circle.classList.add("animate-pulse")
        }, index * 200)
      })
    }
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Gear for Tech Consulting */}
      <path
        d="M150,200 L135,180 L120,200 L100,200 L115,220 L100,240 L120,240 L135,260 L150,240 L165,260 L180,240 L200,240 L185,220 L200,200 L180,200 L165,180 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />

      {/* Interconnected Nodes for Web Apps */}
      <circle cx="300" cy="200" r="20" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
      <circle cx="350" cy="150" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
      <circle cx="350" cy="250" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
      <circle cx="400" cy="200" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
      <path d="M300,200 L350,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-draw" />
      <path d="M300,200 L350,250" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-draw" />
      <path d="M300,200 L400,200" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-draw" />
      <path d="M350,150 L400,200" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-draw" />
      <path d="M350,250 L400,200" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-draw" />

      {/* Upward Arrow for SEO and Growth */}
      <path
        d="M500,300 L500,150 M500,150 L480,170 M500,150 L520,170"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <circle cx="500" cy="300" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
      <circle cx="500" cy="225" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
      <circle cx="500" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-pulse" />
    </svg>
  )
}
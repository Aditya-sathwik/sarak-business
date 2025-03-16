"use client"

import { useEffect, useRef } from "react"

export default function TestimonialSvg() {
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
          circle.classList.add("animate-fill")
        }, index * 300)
      })
    }
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 600 200" className="w-full max-w-[600px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M150,50 L150,150 L250,150 L300,100 L250,50 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M350,50 L450,50 L450,150 L350,150 L300,100 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path d="M180,80 L220,80" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M180,100 L220,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M180,120 L220,120" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M380,80 L420,80" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M380,100 L420,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M380,120 L420,120" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <circle cx="150" cy="50" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="250" cy="50" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="150" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="250" cy="150" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="350" cy="50" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="50" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="350" cy="150" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="150" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle
        cx="300"
        cy="100"
        r="12"
        fill="hsl(var(--primary))"
        fillOpacity="0"
        className="animate-fill animate-float"
      />
    </svg>
  )
}


"use client"

import { useEffect, useRef } from "react"

export default function TeamSvg() {
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
    <svg ref={svgRef} viewBox="0 0 800 200" className="w-full max-w-[800px] h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Central node */}
      <circle
        cx="400"
        cy="100"
        r="20"
        fill="hsl(var(--primary))"
        fillOpacity="0"
        className="animate-fill animate-float"
      />

      {/* Team members */}
      <circle cx="200" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="50" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="150" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="500" cy="50" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="500" cy="150" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="600" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />

      {/* Connection lines */}
      <path d="M400,100 L200,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,100 L300,50" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,100 L300,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,100 L500,50" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,100 L500,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,100 L600,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />

      {/* Interconnections */}
      <path
        d="M200,100 C250,50 250,150 300,50"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M300,50 C350,100 250,100 300,150"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M300,150 C350,100 450,100 500,50"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M500,50 C550,100 450,100 500,150"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M500,150 C550,100 550,100 600,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M600,100 C550,50 550,150 500,50"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
    </svg>
  )
}


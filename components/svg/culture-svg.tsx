"use client"

import { useEffect, useRef } from "react"

export default function CultureSvg() {
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
    <svg ref={svgRef} viewBox="0 0 600 400" className="w-full max-w-[500px] h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Central circle */}
      <circle
        cx="300"
        cy="200"
        r="80"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <circle
        cx="300"
        cy="200"
        r="20"
        fill="hsl(var(--primary))"
        fillOpacity="0"
        className="animate-fill animate-float"
      />

      {/* Orbiting elements */}
      <circle cx="300" cy="80" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="420" cy="140" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="420" cy="260" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="320" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="180" cy="260" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="180" cy="140" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />

      {/* Connecting lines */}
      <path d="M300,200 L300,80" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M300,200 L420,140" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M300,200 L420,260" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M300,200 L300,320" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M300,200 L180,260" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M300,200 L180,140" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />

      {/* Outer connections */}
      <path
        d="M300,80 C350,80 380,110 420,140"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M420,140 C450,180 450,220 420,260"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M420,260 C380,290 350,320 300,320"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M300,320 C250,320 220,290 180,260"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M180,260 C150,220 150,180 180,140"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <path
        d="M180,140 C220,110 250,80 300,80"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-draw"
      />

      {/* Labels */}
      <circle cx="300" cy="50" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="120" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="280" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="350" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="280" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="120" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


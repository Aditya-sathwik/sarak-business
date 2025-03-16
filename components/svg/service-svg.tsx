"use client"

import { useEffect, useRef } from "react"

export default function ServiceSvg() {
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
      <path
        d="M100,100 L200,50 L300,100 L400,50 L500,100 L600,50 L700,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M100,100 L200,150 L300,100 L400,150 L500,100 L600,150 L700,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path d="M200,50 L200,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,50 L400,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M600,50 L600,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <circle cx="100" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="50" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="50" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="500" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="600" cy="50" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="700" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="600" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


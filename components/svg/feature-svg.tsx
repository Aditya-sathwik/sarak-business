"use client"

import { useEffect, useRef } from "react"

export default function FeatureSvg() {
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
        d="M100,100 L200,100 L300,100 L400,100 L500,100 L600,100 L700,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeDasharray="10,5"
        className="animate-draw"
      />
      <path
        d="M100,100 C100,70 130,50 150,80 C170,110 200,130 200,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M300,100 C300,70 330,50 350,80 C370,110 400,130 400,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M500,100 C500,70 530,50 550,80 C570,110 600,130 600,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <circle cx="100" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="500" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="600" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="700" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


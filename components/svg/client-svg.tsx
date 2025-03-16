"use client"

import { useEffect, useRef } from "react"

export default function ClientSvg() {
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
        d="M100,100 C150,50 250,50 300,100 C350,150 450,150 500,100 C550,50 650,50 700,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M100,100 C150,150 250,150 300,100 C350,50 450,50 500,100 C550,150 650,150 700,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <circle cx="100" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="500" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="700" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="75" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="75" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="600" cy="75" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="125" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="125" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="600" cy="125" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


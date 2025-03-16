"use client"

import { useEffect, useRef } from "react"

export default function MissionSvg() {
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
    <svg ref={svgRef} viewBox="0 0 600 400" className="w-full max-w-[600px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M300,50 L300,350"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeDasharray="10,5"
        className="animate-draw"
      />
      <path
        d="M150,200 L450,200"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeDasharray="10,5"
        className="animate-draw"
      />
      <path
        d="M200,100 L400,100 L400,300 L200,300 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M250,150 L350,150 L350,250 L250,250 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path d="M200,100 L250,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,100 L350,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M200,300 L250,250" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M400,300 L350,250" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <circle cx="300" cy="50" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="350" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="200" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="200" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="300" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="300" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle
        cx="300"
        cy="200"
        r="15"
        fill="hsl(var(--primary))"
        fillOpacity="0"
        className="animate-fill animate-float"
      />
    </svg>
  )
}


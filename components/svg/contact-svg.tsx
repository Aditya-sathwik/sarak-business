"use client"

import { useEffect, useRef } from "react"

export default function ContactSvg() {
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
    <svg ref={svgRef} viewBox="0 0 600 300" className="w-full max-w-[500px] h-auto" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M150,100 L450,100 L450,250 L150,250 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M150,100 L300,175 L450,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path d="M150,250 L250,175" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M450,250 L350,175" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path
        d="M200,50 C200,50 250,25 300,50 C350,75 400,50 400,50"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeDasharray="5,5"
        className="animate-draw"
      />
      <circle cx="150" cy="100" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="100" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="250" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="250" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle
        cx="300"
        cy="175"
        r="12"
        fill="hsl(var(--primary))"
        fillOpacity="0"
        className="animate-fill animate-float"
      />
      <circle cx="250" cy="175" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="350" cy="175" r="8" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="50" r="6" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="300" cy="50" r="6" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="50" r="6" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


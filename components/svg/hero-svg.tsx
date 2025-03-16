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
          circle.classList.add("animate-fill")
        }, index * 300)
      })
    }
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100,200 C100,150 150,100 200,100 C250,100 300,150 300,200 C300,250 250,300 200,300 C150,300 100,250 100,200 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M300,200 C300,150 350,100 400,100 C450,100 500,150 500,200 C500,250 450,300 400,300 C350,300 300,250 300,200 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path d="M200,100 L400,100" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M200,300 L400,300" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M150,150 L250,250" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M350,150 L450,250" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M150,250 L250,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <path d="M350,250 L450,150" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" className="animate-draw" />
      <circle cx="150" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="250" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="250" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="250" cy="250" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="350" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="150" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="350" cy="250" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="450" cy="250" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="100" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="200" cy="300" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="400" cy="300" r="15" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


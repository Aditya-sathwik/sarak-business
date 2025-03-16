"use client"

import { useEffect, useRef } from "react"

export default function AboutSvg() {
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
        d="M150,200 C150,150 200,100 250,100 C300,100 350,150 350,200 C350,250 300,300 250,300 C200,300 150,250 150,200 Z"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M250,100 L250,50 C250,30 270,20 290,20 C310,20 330,30 330,50 L330,100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M250,300 L250,350 C250,370 270,380 290,380 C310,380 330,370 330,350 L330,300"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M150,200 L100,200 C80,200 70,220 70,240 C70,260 80,280 100,280 L150,280"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <path
        d="M350,200 L400,200 C420,200 430,220 430,240 C430,260 420,280 400,280 L350,280"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        className="animate-draw"
      />
      <circle cx="250" cy="100" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="250" cy="300" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="150" cy="200" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="350" cy="200" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="290" cy="20" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="290" cy="380" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="70" cy="240" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
      <circle cx="430" cy="240" r="10" fill="hsl(var(--primary))" fillOpacity="0" className="animate-fill" />
    </svg>
  )
}


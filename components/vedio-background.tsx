"use client"

import { useEffect, useRef } from "react"

interface VideoBackgroundProps {
  videoSrc: string
  overlayOpacity?: number
  blurAmount?: number
}

export default function VideoBackground({ videoSrc, overlayOpacity = 80, blurAmount = 2 }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing the video:", error)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <video ref={videoRef} className="absolute min-w-full min-h-full object-cover" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`absolute inset-0 bg-background/${overlayOpacity} backdrop-blur-${blurAmount === 1 ? "" : blurAmount}`}
      ></div>
    </div>
  )
}

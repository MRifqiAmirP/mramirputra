"use client"

import { useState, useEffect } from "react"

interface CyclingTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
  className?: string
}

export function CyclingText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className = "",
}: CyclingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetween)
      return () => clearTimeout(pauseTimeout)
    }

    if (isTyping && !isDeleting) {
      if (currentIndex < texts[currentTextIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[currentTextIndex][currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
        setIsPaused(true)
      }
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setIsTyping(true)
        setCurrentIndex(0)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
  }, [
    currentIndex,
    currentTextIndex,
    delayBetween,
    deletingSpeed,
    displayText,
    isDeleting,
    isPaused,
    isTyping,
    texts,
    typingSpeed,
  ])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-1 h-6 bg-cyan-400 ml-1 animate-pulse">|</span>
    </span>
  )
}

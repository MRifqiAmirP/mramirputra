"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  typingSpeed?: number
  className?: string
}

export function TypingAnimation({ text, typingSpeed = 100, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length) {
      setIsTyping(false)
    }
  }, [currentIndex, isTyping, text, typingSpeed])

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="inline-block w-1 h-6 bg-cyan-400 ml-1 animate-pulse">|</span>}
    </span>
  )
}

"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import React from "react"

export interface CarouselItem {
  id: string | number
  content: React.ReactNode
}

interface UseCarouselProps {
  items: CarouselItem[]
  speed: number
  gap: number
  pauseOnHover: boolean
}

export function useInfiniteBenefitCarousel({
  items,
  speed,
  gap,
  pauseOnHover,
}: UseCarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)

  const [order, setOrder] = useState<CarouselItem[]>(items)
  const [offset, setOffset] = useState(0)
  const [firstWidth, setFirstWidth] = useState(0)
  const [paused, setPaused] = useState(false)

  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)

  const measureFirst = useCallback(() => {
    if (!firstRef.current) return
    const w = firstRef.current.getBoundingClientRect().width
    setFirstWidth(w)
  }, [])

  useEffect(() => {
    measureFirst()
    const ro = new ResizeObserver(measureFirst)
    if (firstRef.current) ro.observe(firstRef.current)
    return () => ro.disconnect()
  }, [measureFirst, order])

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = (ts - (lastTsRef.current || ts)) / 1000
      lastTsRef.current = ts

      if (!paused) {
        setOffset((prev) => {
          const next = prev + speed * dt
          const threshold = firstWidth + gap
          if (threshold > 0 && next >= threshold) {
            setOrder((old) => (old.length > 0 ? [...old.slice(1), old[0]] : old))
            return next - threshold
          }
          return next
        })
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      lastTsRef.current = null
    }
  }, [speed, paused, firstWidth, gap])

  const handleMouseEnter = () => pauseOnHover && setPaused(true)
  const handleMouseLeave = () => setPaused(false)
  const transformStyle = {
    gap,
    transform: `translateX(-${offset}px)`,
    willChange: "transform",
  }

  return {
    order,
    firstRef,
    wrapperRef,
    handleMouseEnter,
    handleMouseLeave,
    transformStyle,
  }
}
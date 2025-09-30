"use client"

import React, { useRef, useState, useCallback, useEffect, useMemo } from "react"

export type VItem = {
  id: string | number
  src: string
  alt?: string
  caption?: string
}

interface UseCarouselProps {
  items: VItem[]
  gap: number
  slideWidth: number
  slideHeight: number
  peekFraction: number
  transitionMs: number
}

export function useVerticalPeekCarousel({
  items,
  gap,
  slideWidth,
  slideHeight,
  peekFraction,
  transitionMs,
}: UseCarouselProps) {
  const [order, setOrder] = useState<VItem[]>(items)
  const [stepDir, setStepDir] = useState<number>(0)
  const [enableTransition, setEnableTransition] = useState(true)

  const [dragging, setDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const [w, setW] = useState(slideWidth)
  const [h, setH] = useState(slideHeight)
  const [g, setG] = useState(gap)

  const trackRef = useRef<HTMLDivElement>(null)

  const computeResponsiveSizes = useCallback(() => {
    if (typeof window === "undefined") return
    const width = window.innerWidth

    let _w = slideWidth
    let _h = slideHeight
    let _g = gap

    if (width >= 1280 && width < 1536) {
      _w = Math.round(slideWidth * 1.185)
      _h = Math.round(slideHeight * 1.187)
      _g = gap + 2
    }

    if (width >= 1536) {
      _w = Math.round(slideWidth * 1.333)
      _h = Math.round(slideHeight * 1.334)
      _g = gap + 4
    }

    setW(_w)
    setH(_h)
    setG(_g)
  }, [gap, slideWidth, slideHeight])

  useEffect(() => {
    computeResponsiveSizes()
    window.addEventListener("resize", computeResponsiveSizes)
    return () => window.removeEventListener("resize", computeResponsiveSizes)
  }, [computeResponsiveSizes])

  const step = w + g
  const peekRight = w * peekFraction
  const viewportBase = w * 4 + g * 3

  const handleTransitionEnd = useCallback(() => {
    if (dragging) return
    if (stepDir === 1) {
      setOrder((old) => (old.length ? [...old.slice(1), old[0]] : old))
    } else if (stepDir === -1) {
      setOrder((old) => (old.length ? [old[old.length - 1], ...old.slice(0, -1)] : old))
    }
    setEnableTransition(false)
    setStepDir(0)
    requestAnimationFrame(() => setEnableTransition(true))
  }, [dragging, stepDir])

  const onDragStart = useCallback((clientX: number) => {
    setDragging(true)
    setDragStartX(clientX)
    setDragOffset(0)
    setEnableTransition(false)
    setStepDir(0)
  }, [])

  const onDragMove = useCallback(
    (clientX: number) => {
      if (!dragging) return
      setDragOffset(clientX - dragStartX)
    },
    [dragging, dragStartX],
  )

  const onDragEnd = useCallback(() => {
    if (!dragging) return
    const threshold = Math.min(80, step * 0.3)
    setDragging(false)
    setEnableTransition(true)
    if (dragOffset <= -threshold) {
      setDragOffset(0)
      setStepDir(1)
    } else if (dragOffset >= threshold) {
      setDragOffset(0)
      setStepDir(-1)
    } else {
      setDragOffset(0)
      setStepDir(0)
      setEnableTransition(false)
      requestAnimationFrame(() => setEnableTransition(true))
    }
  }, [dragging, dragOffset, step])

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    onDragStart(e.clientX)
  }
  const onMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX)
  const onMouseUp = () => onDragEnd()
  const onTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX)
  const onTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX)
  const onTouchEnd = () => onDragEnd()

  const translateX = -(stepDir * step) + (dragging ? dragOffset : 0)

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transitionDuration = enableTransition ? `${transitionMs}ms` : "0ms"
    }
  }, [enableTransition, transitionMs])

  const carouselProps = useMemo(() => ({
    order,
    w,
    h,
    g,
    peekRight,
    viewportBase,
    translateX,
    dragging,
    enableTransition,
    trackRef,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    handleTransitionEnd,
  }), [
    order, w, h, g, peekRight, viewportBase, translateX, dragging, enableTransition,
    onMouseDown, onMouseMove, onMouseUp, onTouchStart, onTouchMove, onTouchEnd, handleTransitionEnd
  ])

  return carouselProps
}
"use client"

import { useState, useEffect, useCallback, useRef, type ReactNode, useMemo } from "react"

export interface CarouselItem {
  id: string | number
  content: ReactNode
  alt?: string
}

export interface CarouselProps {
  items: CarouselItem[]
  itemsPerView?: number | { mobile: number; tablet: number; desktop: number }
  showPartialItems?: boolean
  showArrows: boolean
  showDots: boolean
  className: string
  itemClassName: string
  peek?: number
  gap?: number
  autoPlay?: boolean
  autoPlayInterval?: number
  responsive?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  onSlideChange?: (currentIndex: number) => void
  loop?: boolean
  dragEnabled?: boolean
  pauseOnHover?: boolean
}

interface UseCarouselReturn {
  carouselRef: React.RefObject<HTMLDivElement | null> 
  currentIndex: number
  currentItemsPerView: number
  padLeft: number
  padRight: number
  maxStart: number
  getTransform: () => string
  getItemStyle: () => React.CSSProperties
  goToSlide: (index: number) => void
  goToPrevious: () => void
  goToNext: () => void
  handleDragStart: (clientX: number) => void
  handleDragMove: (clientX: number) => void
  handleDragEnd: () => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  isDragging: boolean
  totalDots: number
  gapStyle: number
}

export function useCollections({
  items,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 1 },
  showPartialItems = true,
  peek = 56,
  gap = 16,
  autoPlay = true,
  autoPlayInterval = 4000,
  responsive,
  onSlideChange,
  loop = true,
  dragEnabled = true,
  pauseOnHover = true,
}: CarouselProps): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [currentItemsPerView, setCurrentItemsPerView] = useState(1)

  const carouselRef = useRef<HTMLDivElement | null >(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const calcItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return 1
    const width = window.innerWidth
    if (typeof itemsPerView === "object") {
      const { mobile = 1, tablet = 2, desktop = 1 } = itemsPerView
      if (width >= 1280) return desktop
      if (width >= 768) return tablet
      return mobile
    }
    if (responsive) {
      if (width >= 1280 && responsive.desktop) return responsive.desktop
      if (width >= 768 && responsive.tablet) return responsive.tablet
      if (width < 768 && responsive.mobile) return responsive.mobile
    }
    return typeof itemsPerView === "number" ? itemsPerView : 1
  }, [itemsPerView, responsive])

  useEffect(() => {
    const update = () => setCurrentItemsPerView(calcItemsPerView())
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [calcItemsPerView])

  const getMaxStartIndex = useCallback(
    (len = items.length, ipv = currentItemsPerView) => Math.max(0, len - Math.max(1, ipv)),
    [items.length, currentItemsPerView],
  )
  const maxStart = getMaxStartIndex()

  const goToSlide = useCallback((index: number) => {
    const m = getMaxStartIndex()
    const newIndex = Math.max(0, Math.min(index, m))
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)
  }, [getMaxStartIndex, onSlideChange])

  const goToPrevious = useCallback(() => {
    const m = getMaxStartIndex()
    if (loop && currentIndex === 0) {
      goToSlide(m)
    } else {
      goToSlide(currentIndex - 1)
    }
  }, [currentIndex, loop, goToSlide, getMaxStartIndex])

  const goToNext = useCallback(() => {
    const m = getMaxStartIndex()
    if (loop && currentIndex >= m) {
      goToSlide(0)
    } else {
      goToSlide(currentIndex + 1)
    }
  }, [currentIndex, loop, goToSlide, getMaxStartIndex])

  useEffect(() => {
    if (autoPlay && !isHovered && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const m = getMaxStartIndex()
          return prev >= m ? 0 : prev + 1
        })
      }, autoPlayInterval)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [autoPlay, isHovered, isDragging, autoPlayInterval, getMaxStartIndex])

  const handleDragEnd = useCallback(() => {
    if (!isDragging || !dragEnabled) return
    const viewportW = carouselRef.current?.offsetWidth ?? 1
    const stepPercent = 100 / Math.max(1, currentItemsPerView)
    const dragPercent = (dragOffset / viewportW) * 100
    const thresholdPercent = Math.min(33, stepPercent * 0.5)
    if (dragPercent > thresholdPercent) goToPrevious()
    else if (dragPercent < -thresholdPercent) goToNext()
    setIsDragging(false)
    setDragOffset(0)
  }, [isDragging, dragEnabled, dragOffset, currentItemsPerView, goToPrevious, goToNext])

  const handleDragStart = useCallback((clientX: number) => {
    if (!dragEnabled) return
    setIsDragging(true)
    setDragStart(clientX)
    setDragOffset(0)
  }, [dragEnabled])

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging || !dragEnabled) return
    setDragOffset(clientX - dragStart)
  }, [isDragging, dragStart, dragEnabled])
  
  const handleMouseEnter = useCallback(() => pauseOnHover && setIsHovered(true), [pauseOnHover]);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (isDragging) handleDragEnd();
  }, [isDragging, handleDragEnd]);


  const getTransform = useCallback(() => {
    if (showPartialItems && currentItemsPerView === 1 && carouselRef.current) {
      const viewportW = carouselRef.current.offsetWidth
      const slideW = viewportW - peek * 2
      const stepPx = slideW + gap
      const rawShift = currentIndex * stepPx
      const totalWidth = items.length * slideW + (items.length - 1) * gap
      const innerViewport = viewportW - (padLeft + padRight)
      const maxShift = Math.max(0, totalWidth - innerViewport)
      const withDrag = rawShift - (isDragging ? dragOffset : 0)
      const shift = Math.min(Math.max(0, withDrag), maxShift)
      return `translateX(${-shift}px)`
    }
    const itemWidth = 100 / currentItemsPerView
    const base = -(currentIndex * itemWidth)
    const dragPct = isDragging
      ? (dragOffset / (carouselRef.current?.offsetWidth || 1)) * 100
      : 0
    return `translateX(${base + dragPct}%)`
  }, [showPartialItems, currentItemsPerView, currentIndex, isDragging, dragOffset, items.length, peek, gap])

  const getItemStyle = useCallback(() => {
    if (showPartialItems && currentItemsPerView === 1 && carouselRef.current) {
      const viewportW = carouselRef.current.offsetWidth
      const slideW = viewportW - peek * 2
      return { width: `${slideW}px` }
    }
    const baseWidth = 100 / currentItemsPerView
    const gapPct = ((gap * (currentItemsPerView - 1)) / (carouselRef.current?.offsetWidth || 1)) * 100
    const adjusted = baseWidth - (gapPct / currentItemsPerView)
    return { width: `${adjusted}%` }
  }, [showPartialItems, currentItemsPerView, gap])

  const padLeft = useMemo(() =>
    showPartialItems && currentItemsPerView === 1
      ? currentIndex === 0 ? 0 : peek
      : 0
  , [showPartialItems, currentItemsPerView, currentIndex, peek]);

  const padRight = useMemo(() =>
    showPartialItems && currentItemsPerView === 1
      ? currentIndex >= maxStart ? 0 : peek
      : 0
  , [showPartialItems, currentItemsPerView, currentIndex, maxStart, peek]);

  const totalDots = Math.max(1, items.length - currentItemsPerView + 1)
  
  return {
    currentIndex,
    currentItemsPerView,
    padLeft,
    padRight,
    maxStart,
    carouselRef,
    getTransform,
    getItemStyle,
    goToSlide,
    goToPrevious,
    goToNext,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleMouseEnter,
    handleMouseLeave,
    isDragging,
    totalDots,
    gapStyle: gap,
  }
}
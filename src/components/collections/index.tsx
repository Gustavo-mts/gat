"use client"

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react"
import { cn } from "../../lib/utils"

import Left from "../../assets/icons/left.png"
import Right from "../../assets/icons/right.png"

export interface CarouselItem {
  id: string | number
  content: ReactNode
  alt?: string
}

export interface CarouselProps {
  items: CarouselItem[]
  itemsPerView?: number | { mobile: number; tablet: number; desktop: number }
  showPartialItems?: boolean
  peek?: number
  gap?: number
  showArrows?: boolean
  showDots?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  responsive?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  className?: string
  itemClassName?: string
  onSlideChange?: (currentIndex: number) => void
  loop?: boolean
  dragEnabled?: boolean
  pauseOnHover?: boolean
}

export function FlexibleCarousel({
  items,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 1 },
  showPartialItems = true,
  peek = 56,
  gap = 16,
  showArrows = true,
  showDots = true,
  autoPlay = true,
  autoPlayInterval = 4000,
  responsive,
  className,
  itemClassName,
  onSlideChange,
  loop = true,
  dragEnabled = true,
  pauseOnHover = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [currentItemsPerView, setCurrentItemsPerView] = useState(1)

  const carouselRef = useRef<HTMLDivElement>(null)
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

  const padLeft =
    showPartialItems && currentItemsPerView === 1
      ? currentIndex === 0 ? 0 : peek
      : 0

  const padRight =
    showPartialItems && currentItemsPerView === 1
      ? currentIndex >= maxStart ? 0 : peek
      : 0

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

  const getTransform = () => {
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
  }

  const getItemStyle = () => {
    if (showPartialItems && currentItemsPerView === 1 && carouselRef.current) {
      const viewportW = carouselRef.current.offsetWidth
      const slideW = viewportW - peek * 2
      return { width: `${slideW}px` }
    }
    const baseWidth = 100 / currentItemsPerView
    const gapPct = ((gap * (currentItemsPerView - 1)) / (carouselRef.current?.offsetWidth || 1)) * 100
    const adjusted = baseWidth - gapPct / currentItemsPerView
    return { width: `${adjusted}%` }
  }

  const totalDots = Math.max(1, items.length - currentItemsPerView + 1)

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (isDragging) handleDragEnd()
      }}
    >
      <div
        ref={carouselRef}
        className={cn("rounded-lg", showPartialItems ? "overflow-visible" : "overflow-hidden")}
        style={
          showPartialItems && currentItemsPerView === 1
            ? { paddingLeft: padLeft, paddingRight: padRight }
            : undefined
        }
        onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientX) }}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: getTransform(), cursor: dragEnabled ? (isDragging ? "grabbing" : "grab") : "default", gap }}
        >
          {items.map((item) => (
            <div key={item.id} className={cn("flex-shrink-0 select-none", itemClassName)} style={getItemStyle()}>
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {showArrows && items.length > currentItemsPerView && (
        <>
          <img
            src={Left}
            className="absolute w-10 xl:w-[59px] left-4 xl:left-24 top-1/2 -translate-y-1/2 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            onClick={goToPrevious}
          />
          <img
            src={Right}
            className="absolute w-10 xl:w-[59px] right-4 xl:right-24 top-1/2 -translate-y-1/2 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            onClick={goToNext}
          />
        </>
      )}
      {showDots && items.length > currentItemsPerView && (
        <div className="flex justify-center gap-0">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={cn("h-2 w-2 rounded-full transition-all", i === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50")}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}


const imageItems: CarouselItem[] = [
  {
    id: 1,
    content: (
      <div className="relative rounded-lg overflow-hidden w-full h-[220px] sm:h-[360px] xl:h-[559px] 2xl:h-[640px]">
        <img src="/sliping-cat.png" alt="Modern Architecture" className="w-full h-full object-cover" />
      </div>
    ),
    alt: "Modern Architecture",
  },
  {
    id: 2,
    content: (
      <div className="relative rounded-lg overflow-hidden w-full h-[220px] sm:h-[360px] xl:h-[559px] 2xl:h-[640px]">
        <img src="/new-colection.png" alt="Nature Landscape" className="w-full h-full object-cover" />
      </div>
    ),
    alt: "Nature Landscape",
  },
  {
    id: 3,
    content: (
      <div className="relative rounded-lg overflow-hidden w-full h-[220px] sm:h-[360px] xl:h-[559px] 2xl:h-[640px]">
        <img src="/cats-and-flower.png" alt="City Skyline" className="w-full h-full object-cover" />
      </div>
    ),
    alt: "City Skyline",
  },
]

export default function Collections() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[100%] sm:max-w-[95%] xl:max-w-[1291px] 2xl:max-w-[1500px] mx-auto">
        <FlexibleCarousel
          items={imageItems}
          itemsPerView={{ mobile: 1, tablet: 2, desktop: 1 }}
          showPartialItems
          peek={56}
          gap={16}
          showArrows
          showDots
          autoPlay
          autoPlayInterval={4000}
          loop
          dragEnabled
          pauseOnHover
          className="w-full"
        />
      </div>

      <button
        className="absolute bottom-6 xl:bottom-8 2xl:bottom-10 w-[157px] bg-[#000] flex items-center justify-center rounded-[29px] border p-3 px-6 uppercase z-10"
      >
        <span className="font-sora text-white font-light text-[20px] leading-[100%] tracking-normal">
          Ver tudo
        </span>
      </button>
    </section>
  )
}

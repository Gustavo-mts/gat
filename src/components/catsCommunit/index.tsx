"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { cn } from "../../lib/utils"
import Heart from "../../assets/icons/heart.png"

type VItem = {
  id: string | number
  src: string
  alt?: string
  caption?: string
}

type VerticalPeekCarouselProps = {
  items: VItem[]
  className?: string
  gap?: number
  slideWidth?: number
  slideHeight?: number
  peekFraction?: number
  transitionMs?: number
}

function VerticalPeekCarousel({
  items,
  className,
  gap = 16,
  slideWidth = 270,
  slideHeight = 481,
  peekFraction = 0.25,
  transitionMs = 300,
}: VerticalPeekCarouselProps) {
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

  return (
    <div className={cn("relative w-full overflow-x-hidden select-none", className)}>
      <div
        className="overflow-visible rounded-lg mx-auto"
        style={{ width: viewportBase, paddingRight: peekRight }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className={cn("flex ease-out", enableTransition && !dragging ? "transition-transform" : "")}
          style={{
            transform: `translateX(${translateX}px)`,
            gap: g,
            cursor: dragging ? "grabbing" : "grab",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {order.map((item) => (
            <figure
              key={item.id}
              className="relative shrink-0 rounded-md overflow-hidden bg-neutral-100"
              style={{ width: w, height: h }}
            >
              <img
                src={item.src}
                alt={item.alt ?? ""}
                className="w-full h-full object-cover"
                draggable={false}
              />

              {item.caption && (
                <figcaption className="pointer-events-none absolute inset-0 flex items-end">
                  <div className="w-full p-3 flex justify-end">
                    <div className="relative flex flex-col justify-end">
                      <div className="absolute inset-x-0 bottom-0" />
                      <div className="flex flex-col items-center">
                        <img
                          src={Heart}
                          className="h-[18px] w-auto xl:h-[20px] 2xl:h-[22px]"
                        />
                        <p className="relative z-10 text-white text-sm xl:text-[15px] 2xl:text-[16px]">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

const photos: VItem[] = [
  { id: 1, src: "/cummunit/cat-1.jpg", caption: "10 mil" },
  { id: 2, src: "/cummunit/cat-2.jpg", caption: "9,1 mil" },
  { id: 3, src: "/cummunit/cat-3.jpg", caption: "7,3 mil" },
  { id: 4, src: "/cummunit/cat-4.jpg", caption: "12 mil" },
  { id: 5, src: "/cummunit/cat-5.jpg", caption: "8,6 mil" },
]

export default function CatsCommunit() {
  return (
    <div className="w-full flex justify-center p-4">
      <VerticalPeekCarousel items={photos} className="max-w-[1700px]" />
    </div>
  )
}
"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "../../lib/utils"
import Paw from "../../assets/icons/paw.png"

type CarouselItem = {
  id: string | number
  content: React.ReactNode
}

const baseItems: CarouselItem[] = [
  {
    id: "innovation",
    content: (
      <div className="bg-card rounded-lg p-0 text-center h-[45px] flex flex-col justify-center">
        <p className="font-sora font-light text-lg leading-none tracking-normal text-right">
          Benefício Terciário
        </p>
      </div>
    ),
  },
  {
    id: "creativity",
    content: (
      <div className="bg-card rounded-lg p-0 text-center h-[45px] flex flex-col justify-center items-center">
        <img src={Paw} className="w-[17.29px] h-[16.84px]" />
      </div>
    ),
  },
  {
    id: "excellence",
    content: (
      <div className="bg-card rounded-lg p-0 text-center h-[45px] flex flex-col justify-center">
        <p className="font-sora font-light text-lg leading-none tracking-normal text-right">
          Lisan Al Gaib
        </p>
      </div>
    ),
  },
  {
    id: "collaboration",
    content: (
      <div className="bg-card rounded-lg p-0 text-center h-[45px] flex flex-col justify-center items-center">
        <img src={Paw} className="w-[17.29px] h-[16.84px]" />
      </div>
    ),
  },
]

type Props = {
  items?: CarouselItem[]
  /** pixels/segundo */
  speed?: number
  /** espaçamento entre itens (px) */
  gap?: number
  pauseOnHover?: boolean
  className?: string
}

export default function BenefitCarouselInfiniteTight({
  items = baseItems,
  speed = 90,
  gap = 24,
  pauseOnHover = true,
  className,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLDivElement>(null)

  const [order, setOrder] = useState<CarouselItem[]>(items)
  const [offset, setOffset] = useState(0)
  const [firstWidth, setFirstWidth] = useState(0)
  const [paused, setPaused] = useState(false)

  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)

  // medir a largura do primeiro item (sem o gap)
  const measureFirst = useCallback(() => {
    if (!firstRef.current) return
    const w = firstRef.current.getBoundingClientRect().width
    setFirstWidth(w)
  }, [])

  // observar mudanças de tamanho
  useEffect(() => {
    measureFirst()
    const ro = new ResizeObserver(measureFirst)
    if (firstRef.current) ro.observe(firstRef.current)
    return () => ro.disconnect()
  }, [measureFirst, order]) // quando o array rotaciona, o "primeiro" muda

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = (ts - (lastTsRef.current || ts)) / 1000
      lastTsRef.current = ts

      if (!paused) {
        setOffset((prev) => {
          const next = prev + speed * dt
          const threshold = firstWidth + gap // largura do primeiro + gap entre ele e o próximo
          if (threshold > 0 && next >= threshold) {
            // passou do primeiro: rotaciona e ajusta offset
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

  return (
    <section
      className={cn("w-full select-none", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden"
        style={{ height: 45 }}
      >
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            gap,
            transform: `translateX(-${offset}px)`,
            willChange: "transform",
          }}
        >
          {order.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="shrink-0"
              ref={i === 0 ? firstRef : undefined}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

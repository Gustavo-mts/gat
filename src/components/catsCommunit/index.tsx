"use client"

import React from "react"
import { cn } from "../../lib/utils"
import Heart from "../../assets/icons/heart.png"
import { type VItem, useVerticalPeekCarousel } from "./useVerticalPeekCarousel" // Importa tipos e hook

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
  const {
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
  } = useVerticalPeekCarousel({
    items,
    gap,
    slideWidth,
    slideHeight,
    peekFraction,
    transitionMs,
  })

  return (
    <div className={cn("relative w-full overflow-x-hidden select-none", className)}
      role="region"
      aria-label="Carrossel de Fotos da Comunidade"
    >
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
                alt={item.alt || `Foto de um gato da comunidade`}
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
                          alt="Ícone de coração. Indica curtidas na foto."
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
  { id: 1, src: "/cummunit/cat-1.jpg", caption: "10 mil", alt: "Gato preto e branco em arranhador moderno" },
  { id: 2, src: "/cummunit/cat-2.jpg", caption: "9,1 mil", alt: "Gato laranja dormindo em casinha de madeira" },
  { id: 3, src: "/cummunit/cat-3.jpg", caption: "7,3 mil", alt: "Dois gatos brincando em túnel modular" },
  { id: 4, src: "/cummunit/cat-4.jpg", caption: "12 mil", alt: "Gato siamês relaxando em almofada de luxo" },
  { id: 5, src: "/cummunit/cat-5.jpg", caption: "8,6 mil", alt: "Gato deitado em móvel de design para felinos" },
]

export default function CatsCommunit() {
  return (
    <div className="w-full flex justify-center p-4">
      <VerticalPeekCarousel items={photos} className="max-w-[1700px]" />
    </div>
  )
}
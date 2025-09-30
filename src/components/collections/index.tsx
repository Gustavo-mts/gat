"use client"

import { cn } from "../../lib/utils"
import { type CarouselProps, useCollections, type CarouselItem } from "./useCollections"

import Left from "../../assets/icons/left.png"
import Right from "../../assets/icons/right.png"
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export type { CarouselItem, CarouselProps } from "./useCollections"

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
  const {
    currentIndex,
    currentItemsPerView,
    padLeft,
    padRight,
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
    gapStyle,
  } = useCollections({
    items,
    itemsPerView,
    showPartialItems,
    peek,
    gap,
    autoPlay,
    autoPlayInterval,
    responsive,
    onSlideChange,
    loop,
    dragEnabled,
    pauseOnHover,
  })

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrossel de Destaques"
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
          style={{ transform: getTransform(), cursor: dragEnabled ? (isDragging ? "grabbing" : "grab") : "default", gap: gapStyle }}
        >
          {items.map((item: { id: Key | null | undefined; content: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: number) => (
            <div 
              key={item.id} 
              className={cn("flex-shrink-0 select-none", itemClassName)} 
              style={getItemStyle()}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              aria-hidden={index !== currentIndex ? "true" : "false"}
            >
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
            alt="Anterior"
            role="button"
            aria-label="Ir para o slide anterior"
          />
          <img
            src={Right}
            className="absolute w-10 xl:w-[59px] right-4 xl:right-24 top-1/2 -translate-y-1/2 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            onClick={goToNext}
            alt="Próximo"
            role="button"
            aria-label="Ir para o próximo slide"
          />
        </>
      )}
      {showDots && items.length > currentItemsPerView && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={cn("h-2 w-2 rounded-full transition-all", i === currentIndex ? "bg-black scale-125" : "bg-black/30 hover:bg-black/50")}
              onClick={() => goToSlide(i)}
              aria-current={i === currentIndex ? "true" : "false"}
              aria-label={`Ir para slide ${i + 1}`}
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
        <img src="/sliping-cat.png" alt="Gato dormindo em arranhador de design moderno" className="w-full h-full object-cover" />
      </div>
    ),
    alt: "Gato dormindo em arranhador de design moderno",
  },
  {
    id: 2,
    content: (
      <div className="relative rounded-lg overflow-hidden w-full h-[220px] sm:h-[360px] xl:h-[559px] 2xl:h-[640px]">
        <img src="/new-colection.png" alt="Anúncio: Nova coleção de arranhadores minimalistas para gatos" className="w-full h-full object-cover" />
      </div>
    ),
    alt: "Anúncio: Nova coleção de arranhadores minimalistas para gatos",
  },
  {
    id: 3,
    content: (
      <div className="relative rounded-lg overflow-hidden w-full h-[220px] sm:h-[360px] xl:h-[559px] 2xl:h-[640px]">
        <img src="/cats-and-flower.png" alt="Gatos brincando ao lado de vaso de planta em arranhador GAT" className="w-full h-full object-cover" />
      </div>
    ),
    alt: "Gatos brincando ao lado de vaso de planta em arranhador GAT",
  },
]

export default function Collections() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      <h2 className="sr-only">Coleções e Destaques de Produtos GAT</h2>
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
      <a
        href="/colecoes"
        className="absolute bottom-6 xl:bottom-8 2xl:bottom-10 w-[157px] bg-[#000] flex items-center justify-center rounded-[29px] border p-3 px-6 uppercase z-10 hover:bg-white hover:text-black transition-colors"
        aria-label="Ver todas as coleções de produtos GAT"
      >
        <span className="font-sora text-white font-light text-[20px] leading-[100%] tracking-normal">
          Ver tudo
        </span>
      </a>
    </section>
  )
}
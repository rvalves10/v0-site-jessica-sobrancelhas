"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Instagram, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  {
    id: 1,
    image: "/images/portfolio-1.jpg",
    title: "Extensão Clássica",
  },
  {
    id: 2,
    image: "/images/portfolio-2.jpg",
    title: "Volume Brasileiro",
  },
  {
    id: 3,
    image: "/images/portfolio-3.jpg",
    title: "Lash Lifting",
  },
  {
    id: 4,
    image: "/images/portfolio-4.jpg",
    title: "Volume Híbrido",
  },
]

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-28 lg:py-44 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">
              Portfólio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
              Meus trabalhos
            </h2>
          </div>
          <p className="font-sans text-muted-foreground font-light max-w-md lg:text-right">
            Cada resultado reflete minha dedicação em valorizar a beleza única de cada olhar.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredId === item.id ? "scale-110" : "scale-100"
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-foreground/70 transition-opacity duration-500 flex flex-col items-center justify-center p-6 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <Camera className="w-6 h-6 text-background/60 mb-3" />
                <h3 className="font-serif text-lg lg:text-xl text-background text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Acompanhe meus trabalhos e novidades
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-6 rounded-none border-foreground/20 hover:bg-foreground hover:text-background"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Instagram className="w-4 h-4" />
              <span>@jessica.lashes</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

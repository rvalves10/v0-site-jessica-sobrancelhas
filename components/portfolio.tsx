"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Instagram } from "lucide-react"

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
      className="py-24 lg:py-40 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            Portfólio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Resultados reais
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            Cada fio importa. Veja alguns dos meus trabalhos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative aspect-[4/5] overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredId === item.id ? "scale-105" : "scale-100"
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-foreground/60 transition-opacity duration-500 flex items-end p-6 lg:p-10 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="font-serif text-xl lg:text-2xl text-background">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            <span>Siga no Instagram para ver mais</span>
            <span className="text-primary">@jessica.lashes</span>
          </a>
        </div>
      </div>
    </section>
  )
}

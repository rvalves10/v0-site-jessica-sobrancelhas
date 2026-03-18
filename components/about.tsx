"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="sobre" 
      className="py-24 lg:py-40 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[3/4] max-w-lg mx-auto lg:mx-0">
              <Image
                src="/images/about-jessica.jpg"
                alt="Jéssica - Designer de Sobrancelhas"
                fill
                className="object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
              Sobre mim
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-balance leading-tight">
              Prazer, eu sou a Jéssica
            </h2>

            <div className="space-y-6 font-sans text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Descobri no design de sobrancelhas uma verdadeira paixão: a possibilidade de transformar 
                o olhar das pessoas e revelar uma beleza que, muitas vezes, elas nem sabiam que tinham.
              </p>
              <p>
                Estou no início da minha jornada profissional, mas trago comigo toda a dedicação, 
                carinho e vontade de entregar o melhor resultado para cada cliente que confia no meu trabalho.
              </p>
              <p>
                Acredito que cada rosto conta uma história única, e meu papel é realçar essa história 
                através de sobrancelhas que valorizem o seu olhar e harmonizem com os seus traços.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-12">
              <div>
                <p className="font-serif text-4xl font-light text-foreground">100%</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Dedicação</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-serif text-4xl font-light text-foreground">Cada</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Detalhe importa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

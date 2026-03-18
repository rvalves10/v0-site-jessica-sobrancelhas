"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-lash.jpg"
          alt="Extensão de cílios profissional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-background/80 mb-6">
            Lash Designer
          </p>
        </div>

        <h1 
          className={`font-serif text-6xl md:text-8xl lg:text-9xl font-light text-background mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Jéssica
        </h1>
        
        <p 
          className={`font-sans text-lg md:text-xl text-background/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Transformo o seu olhar com cílios que realçam sua beleza natural, fio a fio.
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-background hover:bg-background/90 text-foreground font-sans text-xs tracking-widest uppercase px-10 py-6"
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar agora
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/50 bg-transparent hover:bg-background/10 text-background font-sans text-xs tracking-widest uppercase px-10 py-6"
          >
            <a href="#portfolio">
              Ver trabalhos
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <a 
          href="#sobre" 
          className="flex flex-col items-center gap-2 text-background/60 hover:text-background transition-colors"
        >
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

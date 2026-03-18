"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
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
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge de lançamento */}
        <div 
          className={`inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 px-5 py-2 rounded-full mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="font-sans text-xs tracking-widest uppercase text-background/90">
            Agora atendendo
          </span>
        </div>

        <div 
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-background/70 mb-4">
            Lash Designer
          </p>
        </div>

        <h1 
          className={`font-serif text-7xl md:text-[10rem] lg:text-[12rem] font-light text-background mb-6 leading-[0.85] transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Jéssica
        </h1>
        
        <p 
          className={`font-sans text-lg md:text-xl lg:text-2xl text-background/80 font-light max-w-2xl mx-auto mb-14 leading-relaxed transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Realço a beleza do seu olhar com cílios feitos sob medida, fio a fio.
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-background hover:bg-background/90 text-foreground font-sans text-xs tracking-[0.2em] uppercase px-12 py-7 rounded-none"
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero agendar
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-background/30 bg-transparent hover:bg-background/10 text-background font-sans text-xs tracking-[0.2em] uppercase px-12 py-7 rounded-none"
          >
            <a href="#servicos">
              Conhecer serviços
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <a 
          href="#sobre" 
          className="flex flex-col items-center gap-3 text-background/50 hover:text-background transition-colors"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Conheça</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

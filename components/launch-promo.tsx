"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Gift, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function LaunchPromo() {
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
      className="py-28 lg:py-44 bg-foreground text-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 px-5 py-2 rounded-full mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs tracking-widest uppercase text-background/90">
              Promoção de Lançamento
            </span>
          </div>

          <h2 
            className={`font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Bora ser uma das
            <br />
            <span className="text-accent">primeiras clientes?</span>
          </h2>

          <p 
            className={`font-sans text-lg lg:text-xl text-background/70 font-light max-w-2xl mx-auto mb-14 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tô começando essa jornada e quero que você faça parte dela! 
            Minhas primeiras clientes vão ter condições especiais, viu? Aproveita!
          </p>

          <div 
            className={`grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-14 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 bg-background/5 backdrop-blur-sm rounded-lg p-5 border border-background/10">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-serif text-xl text-background">Preço especial</p>
                <p className="font-sans text-sm text-background/60">Só pras primeiras clientes</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-background/5 backdrop-blur-sm rounded-lg p-5 border border-background/10">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-serif text-xl text-background">Horários flexíveis</p>
                <p className="font-sans text-sm text-background/60">A gente combina direitinho</p>
              </div>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className={`bg-background hover:bg-background/90 text-foreground font-sans text-xs tracking-[0.2em] uppercase px-14 py-7 rounded-none transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://wa.me/5500000000000?text=Oi, Jéssica! Vi a promoção de lançamento e quero aproveitar!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero aproveitar
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

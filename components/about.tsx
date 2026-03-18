"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles, Award } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "Técnicas Atuais",
    description: "Formação recente com as técnicas mais modernas do mercado"
  },
  {
    icon: Heart,
    title: "Atendimento Único",
    description: "Cada cliente recebe atenção exclusiva e personalizada"
  },
  {
    icon: Award,
    title: "Compromisso",
    description: "100% dedicada a entregar o melhor resultado para você"
  }
]

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
      className="py-28 lg:py-44 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/about-jessica.jpg"
                alt="Jéssica - Lash Designer"
                fill
                className="object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30" />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-8 block">
              Prazer em conhecer
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-10 text-balance leading-[1.1]">
              Eu sou a Jéssica
            </h2>

            <div className="space-y-6 font-sans text-base lg:text-lg text-muted-foreground font-light leading-relaxed mb-12">
              <p>
                Apaixonada pela arte de transformar olhares, encontrei na extensão de cílios 
                uma forma de revelar a beleza única de cada mulher.
              </p>
              <p>
                Estou iniciando minha jornada profissional com toda a energia, dedicação e 
                vontade de fazer diferente. Para mim, não existe cliente número, existe 
                <span className="text-foreground font-normal"> você</span> — e cada detalhe importa.
              </p>
              <p>
                Meu compromisso é simples: entregar um trabalho que te faça se sentir ainda 
                mais linda, com cílios que valorizam seu olhar de forma natural e elegante.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

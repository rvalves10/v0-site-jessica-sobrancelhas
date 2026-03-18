"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles, Sun } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "Técnicas Novas",
    description: "Formação fresquinha com tudo que há de mais moderno"
  },
  {
    icon: Heart,
    title: "Com Carinho",
    description: "Atendimento de verdade, como se fosse da família"
  },
  {
    icon: Sun,
    title: "Energia Boa",
    description: "Ambiente acolhedor pra você relaxar e se sentir em casa"
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
              Prazer te conhecer
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-10 text-balance leading-[1.1]">
              Oi, eu sou a Jéssica!
            </h2>

            <div className="space-y-6 font-sans text-base lg:text-lg text-muted-foreground font-light leading-relaxed mb-12">
              <p>
                Sou nordestina com muito orgulho e encontrei na extensão de cílios uma forma 
                de fazer o que mais amo: cuidar das pessoas e deixar cada mulher se sentindo 
                ainda mais linda!
              </p>
              <p>
                Tô começando minha jornada agora, mas pode confiar que vou colocar toda minha 
                dedicação e carinho em cada fio. Aqui você não é só mais uma cliente, 
                <span className="text-foreground font-normal"> você é especial</span>.
              </p>
              <p>
                Meu cantinho é preparado com todo cuidado pra você se sentir acolhida, relaxar 
                e sair daqui maravilhosa. Vem tomar um cafézinho comigo!
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

"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Marina Costa",
    text: "Fui uma das primeiras clientes da Jéssica e fiquei encantada! Ela é super cuidadosa e paciente, explicou todo o processo e o resultado ficou lindo, muito natural.",
  },
  {
    id: 2,
    name: "Beatriz Almeida",
    text: "Amei o atendimento! A Jéssica tem um olhar incrível para detalhes. Minhas sobrancelhas nunca ficaram tão bonitas e harmoniosas com meu rosto.",
  },
  {
    id: 3,
    name: "Carolina Santos",
    text: "Estava insegura por ter sobrancelhas muito ralas, mas a Jéssica conseguiu um resultado maravilhoso! Super indico para quem quer um trabalho caprichado.",
  },
]

export function Testimonials() {
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
      id="depoimentos" 
      className="py-24 lg:py-40 bg-foreground text-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-background/60 mb-6 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            O que dizem minhas clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <blockquote className="mb-8">
                <p className="font-serif text-xl lg:text-2xl font-light leading-relaxed text-background/90 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center">
                  <span className="font-serif text-xl font-light text-background">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p className="font-sans text-sm tracking-wider uppercase text-background/70">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

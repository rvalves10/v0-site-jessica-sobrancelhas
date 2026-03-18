"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    number: "01",
    name: "Extensão Clássica",
    description: "Um fio de extensão aplicado em cada cílio natural. Resultado elegante e natural, perfeito para o dia a dia.",
  },
  {
    number: "02",
    name: "Volume Brasileiro",
    description: "Técnica que cria leques de fios ultrafinos para um olhar mais volumoso e marcante. Efeito glamouroso e sofisticado.",
  },
  {
    number: "03",
    name: "Volume Híbrido",
    description: "Combinação de fios clássicos e volume, criando textura e definição. O melhor dos dois mundos para um olhar único.",
  },
  {
    number: "04",
    name: "Lash Lifting",
    description: "Curvatura e tintura dos cílios naturais, realçando o olhar sem extensões. Duração de até 8 semanas.",
  },
]

export function Services() {
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
      id="servicos" 
      className="py-24 lg:py-40 bg-secondary/50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            O que eu ofereço
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            Técnicas especializadas para transformar o seu olhar, com produtos premium e aplicação delicada.
          </p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group border-t border-border last:border-b py-8 lg:py-12 transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-12 gap-4 items-start lg:items-center">
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-sans text-sm text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-serif text-2xl lg:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
                
                <div className="col-span-10 col-start-3 lg:col-span-5 lg:col-start-6 mt-2 lg:mt-0">
                  <p className="font-sans text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="col-span-2 lg:col-span-2 flex justify-end mt-2 lg:mt-0">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <a
                      href={`https://wa.me/5500000000000?text=Olá! Tenho interesse no serviço de ${service.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Agendar ${service.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

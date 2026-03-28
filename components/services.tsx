"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    number: "01",
    name: "Extensão de Cílios.",
    description: "Seu olhar mais marcante, todos os dias!",
    highlight: "Natural",
  },
  // Caso queira adicionar novos serviços futuramente, descomente um destes blocos:
  // {
  //   number: "02",
  //   name: "Volume Brasileiro",
  //   description: "Leques de fios finininhos pra deixar o olhar bem volumoso e marcante. Sucesso garantido!",
  //   highlight: "Volumoso",
  // },
  // {
  //   number: "03",
  //   name: "Volume Híbrido",
  //   description: "Mix de clássica com volume pra quem quer o melhor dos dois mundos. Fica maravilhoso!",
  //   highlight: "Versátil",
  // },
  // {
  //   number: "04",
  //   name: "Lash Lifting",
  //   description: "Curvatura e tintura dos seus próprios cílios. Praticidade pra quem não quer extensão. Dura até 8 semanas!",
  //   highlight: "Prático",
  // },
]


export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
      className="py-28 lg:py-44 bg-secondary/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">
              Serviços
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
              O que eu faço por você
            </h2>
          </div>
          <p className="font-sans text-muted-foreground font-light max-w-md lg:text-right">
            Técnicas modernas e produtos de primeira pra deixar seu olhar impecável!
          </p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group border-t border-border/60 last:border-b py-10 lg:py-14 transition-all duration-700 cursor-pointer ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              } ${hoveredIndex === index ? "bg-background" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-2 lg:col-span-1">
                  <span className={`font-sans text-xs transition-colors duration-300 ${
                    hoveredIndex === index ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {service.number}
                  </span>
                </div>
                
                <div className="col-span-10 lg:col-span-4 flex items-center gap-4">
                  <h3 className={`font-serif text-2xl lg:text-4xl font-light transition-colors duration-300 ${
                    hoveredIndex === index ? "text-primary" : "text-foreground"
                  }`}>
                    {service.name}
                  </h3>
                  <span className={`hidden lg:inline-block font-sans text-[10px] tracking-widest uppercase px-3 py-1 border rounded-full transition-all duration-300 ${
                    hoveredIndex === index 
                      ? "border-primary text-primary" 
                      : "border-border text-muted-foreground"
                  }`}>
                    {service.highlight}
                  </span>
                </div>
                
                <div className="col-span-10 col-start-3 lg:col-span-5 lg:col-start-6 mt-3 lg:mt-0">
                  <p className="font-sans text-muted-foreground font-light leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
                
                <div className="col-span-2 flex justify-end">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className={`rounded-full border transition-all duration-300 ${
                      hoveredIndex === index 
                        ? "border-primary bg-primary text-primary-foreground scale-110" 
                        : "border-border"
                    }`}
                  >
                    <a
                      href={`https://wa.me/5515991279172?text=Oi, Vim pelo site e gostaria de agendar um horário. ${service.name}!`}
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

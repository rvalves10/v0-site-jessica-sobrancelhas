"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo dura a extensão de cílios?",
    answer: "A extensão de cílios dura em média de 3 a 4 semanas. Recomendo a manutenção a cada 2-3 semanas para manter o olhar sempre impecável.",
  },
  {
    question: "A extensão danifica os cílios naturais?",
    answer: "Não! Quando aplicada corretamente com produtos de qualidade, a extensão não danifica seus cílios naturais. Uso técnicas que respeitam o ciclo de crescimento de cada fio.",
  },
  {
    question: "Quanto tempo dura a aplicação?",
    answer: "A primeira aplicação (volume completo) leva de 1h30 a 2h30, dependendo do estilo escolhido. Manutenções levam cerca de 1h a 1h30.",
  },
  {
    question: "Posso molhar os cílios?",
    answer: "Sim! Após 24 horas da aplicação, você pode molhar normalmente. Evite apenas jatos de água muito fortes diretamente nos cílios e produtos oleosos.",
  },
  {
    question: "Qual a diferença entre Clássica e Volume?",
    answer: "Na técnica Clássica, aplico um fio de extensão em cada cílio natural, ideal para quem busca um resultado mais discreto. No Volume, crio leques de fios ultrafinos para um efeito mais dramático e preenchido.",
  },
]

export function FAQ() {
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
      id="faq" 
      className="py-24 lg:py-40 bg-secondary/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
              FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Perguntas frequentes
            </h2>
            <p className="font-sans text-lg text-muted-foreground font-light">
              Tire suas dúvidas sobre extensão de cílios e agendamentos. Se não encontrar o que procura, é só me chamar pelo WhatsApp!
            </p>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border pb-4"
                >
                  <AccordionTrigger className="font-serif text-lg lg:text-xl font-light text-foreground hover:text-primary py-4 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground font-light leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

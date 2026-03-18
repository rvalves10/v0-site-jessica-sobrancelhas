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
    question: "Quanto tempo dura a extensão?",
    answer: "Dura de 3 a 4 semanas, minha linda! Recomendo manutenção a cada 2-3 semanas pra ficar sempre impecável.",
  },
  {
    question: "Estraga os cílios naturais?",
    answer: "Que nada! Quando feito direitinho e com produtos de qualidade, não prejudica em nada seus cílios naturais. Fica tranquila!",
  },
  {
    question: "Quanto tempo demora a aplicação?",
    answer: "A primeira aplicação leva de 1h30 a 2h30, depende do estilo. Manutenções são mais rápidas, de 1h a 1h30. Tempo pra você relaxar!",
  },
  {
    question: "Posso molhar os cílios?",
    answer: "Pode sim! Só espera 24 horinhas depois de aplicar. Depois disso, pode lavar o rosto normal. Só evita jatos de água muito fortes e produtos com óleo nos olhos.",
  },
  {
    question: "Qual a diferença entre Clássica e Volume?",
    answer: "Na Clássica coloco um fio em cada cílio seu, fica mais natural e discreto. No Volume, faço leques de fios finininhos pra um resultado mais cheio e glamouroso. Os dois ficam lindos!",
  },
  {
    question: "Você tá começando agora, né?",
    answer: "Isso mesmo! Tô no início da minha jornada, mas isso significa que vou dar 200% de atenção e carinho no seu atendimento. Minha prioridade é você sair daqui se sentindo maravilhosa!",
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
      className="py-28 lg:py-44 bg-secondary/30"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
          <div 
            className={`lg:sticky lg:top-32 lg:self-start transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-8 block">
              Dúvidas
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-[1.1]">
              Perguntas que sempre me fazem
            </h2>
            <p className="font-sans text-muted-foreground font-light leading-relaxed">
              Se não encontrar sua dúvida aqui, me chama no WhatsApp que eu respondo com todo carinho!
            </p>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/60 py-2"
                >
                  <AccordionTrigger className="font-serif text-lg lg:text-xl font-light text-foreground hover:text-primary py-6 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground font-light leading-relaxed pb-6">
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

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
    answer: "A extensão de cílios dura em média de 3 a 4 semanas. Recomendo a manutenção a cada 2-3 semanas para manter o olhar sempre bonito.",
  },
  {
    question: "A extensão danifica os cílios naturais?",
    answer: "Não! Quando aplicada corretamente com produtos de qualidade, a extensão não danifica seus cílios naturais. Uso técnicas que respeitam o ciclo de crescimento de cada fio.",
  },
  {
    question: "Quanto tempo dura a aplicação?",
    answer: "A primeira aplicação leva de 1h30 a 2h30, dependendo do estilo escolhido. Manutenções levam cerca de 1h a 1h30.",
  },
  {
    question: "Posso molhar os cílios?",
    answer: "Sim! Após 24 horas da aplicação, você pode molhar normalmente. Evite apenas jatos de água muito fortes e produtos oleosos na região dos olhos.",
  },
  {
    question: "Qual a diferença entre Clássica e Volume?",
    answer: "Na técnica Clássica, aplico um fio em cada cílio natural, ideal para quem quer um resultado mais discreto. No Volume, crio leques de fios ultrafinos para um efeito mais preenchido e glamouroso.",
  },
  {
    question: "É a primeira vez que você faz cílios?",
    answer: "Sim! Estou iniciando minha carreira, mas isso significa que vou dar 200% de atenção e dedicação ao seu atendimento. Minha prioridade é que você saia satisfeita e se sinta linda!",
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
              Perguntas frequentes
            </h2>
            <p className="font-sans text-muted-foreground font-light leading-relaxed">
              Tire suas principais dúvidas. Se não encontrar o que procura, é só me chamar no WhatsApp que respondo com carinho!
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

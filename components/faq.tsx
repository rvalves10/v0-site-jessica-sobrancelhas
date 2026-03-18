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
    question: "Como funciona o agendamento?",
    answer: "O agendamento é simples e prático! Você pode entrar em contato pelo WhatsApp. Assim que receber sua mensagem, responderei em até 24 horas para confirmar o melhor horário para você.",
  },
  {
    question: "Preciso marcar horário?",
    answer: "Sim, trabalho somente com horário marcado para garantir que você tenha toda a atenção e cuidado que merece durante o atendimento.",
  },
  {
    question: "Quanto tempo dura cada procedimento?",
    answer: "O tempo varia de acordo com o serviço. O Design de Sobrancelhas leva em média 30 a 40 minutos. Com Henna, pode levar até 1 hora. O Brow Lamination dura aproximadamente 1 hora.",
  },
  {
    question: "Posso cancelar ou reagendar?",
    answer: "Claro! Peço apenas que me avise com pelo menos 24 horas de antecedência para que eu possa reorganizar minha agenda.",
  },
  {
    question: "Os produtos utilizados são de qualidade?",
    answer: "Sim! Trabalho apenas com produtos profissionais e de alta qualidade, testados dermatologicamente. Sua segurança e satisfação são prioridades.",
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
              Tire suas dúvidas sobre os serviços e agendamentos. Se não encontrar o que procura, é só me chamar pelo WhatsApp!
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

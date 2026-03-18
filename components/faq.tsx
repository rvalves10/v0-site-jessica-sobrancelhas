"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o agendamento?",
    answer: "O agendamento é simples e prático! Você pode entrar em contato pelo WhatsApp ou preencher o formulário na página. Assim que receber sua mensagem, responderei em até 24 horas para confirmar o melhor horário para você.",
  },
  {
    question: "Preciso marcar horário?",
    answer: "Sim, trabalho somente com horário marcado para garantir que você tenha toda a atenção e cuidado que merece durante o atendimento. Assim, evitamos esperas e você tem um horário exclusivo.",
  },
  {
    question: "Quais serviços estão disponíveis?",
    answer: "Atualmente ofereço Design de Sobrancelhas, Design com Henna, Brow Lamination e Limpeza e Alinhamento. Cada serviço é pensado para realçar a beleza natural do seu olhar.",
  },
  {
    question: "Quanto tempo dura cada procedimento?",
    answer: "O tempo varia de acordo com o serviço. O Design de Sobrancelhas leva em média 30 a 40 minutos. Com Henna, pode levar até 1 hora. O Brow Lamination dura aproximadamente 1 hora. Prefiro não apressar o atendimento para garantir o melhor resultado.",
  },
  {
    question: "Posso cancelar ou reagendar?",
    answer: "Claro! Peço apenas que me avise com pelo menos 24 horas de antecedência para que eu possa reorganizar minha agenda. Assim, outra cliente também pode ser atendida no horário liberado.",
  },
  {
    question: "Os produtos utilizados são de qualidade?",
    answer: "Sim! Trabalho apenas com produtos profissionais e de alta qualidade, testados dermatologicamente. Sua segurança e satisfação são prioridades para mim.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-sm uppercase tracking-widest text-primary mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Perguntas frequentes
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            Tire suas dúvidas sobre os serviços e agendamentos. Se não encontrar o que procura, é só me chamar!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-serif text-lg font-medium text-foreground hover:text-primary py-6 hover:no-underline">
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
    </section>
  )
}

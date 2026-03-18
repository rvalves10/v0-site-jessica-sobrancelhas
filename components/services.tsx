import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

const services = [
  {
    name: "Design de Sobrancelhas",
    description: "Técnica clássica para definir e harmonizar suas sobrancelhas com o formato do seu rosto.",
    benefit: "Resultado natural e duradouro",
    available: true,
  },
  {
    name: "Design com Henna",
    description: "Além do design, aplicação de henna para preencher falhas e intensificar a cor dos fios.",
    benefit: "Efeito preenchido por até 15 dias",
    available: true,
  },
  {
    name: "Brow Lamination",
    description: "Técnica que alinha e fixa os fios, criando um efeito de sobrancelhas mais volumosas e definidas.",
    benefit: "Sobrancelhas alinhadas por semanas",
    available: true,
  },
  {
    name: "Limpeza e Alinhamento",
    description: "Remoção dos pelos em excesso e alinhamento suave para manter suas sobrancelhas sempre bonitas.",
    benefit: "Manutenção prática e rápida",
    available: true,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-sm uppercase tracking-widest text-primary mb-4 block">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            O que eu ofereço
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            Serviços pensados para realçar a beleza natural do seu olhar, com técnicas modernas e produtos de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {!service.available && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-sans text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  Em breve
                </div>
              )}
              
              <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                {service.name}
              </h3>
              
              <p className="font-sans text-muted-foreground font-light leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-sans mb-6">
                {service.benefit}
              </div>

              {service.available ? (
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground font-sans group/btn"
                >
                  <a
                    href={`https://wa.me/5500000000000?text=Olá! Tenho interesse no serviço de ${service.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero agendar
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              ) : (
                <Button
                  variant="outline"
                  disabled
                  className="w-full font-sans opacity-50"
                >
                  Em breve disponível
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

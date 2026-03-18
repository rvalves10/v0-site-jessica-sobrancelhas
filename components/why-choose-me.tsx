import { User, Home, Sparkles, Heart, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: User,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva. Analiso seu formato de rosto, estilo e preferências para criar o design perfeito para você.",
  },
  {
    icon: Home,
    title: "Ambiente Acolhedor",
    description: "Um espaço pensado para você se sentir confortável e relaxada durante todo o procedimento.",
  },
  {
    icon: Sparkles,
    title: "Cuidado nos Detalhes",
    description: "Cada fio é trabalhado com precisão e carinho. O resultado é um design natural e harmonioso.",
  },
  {
    icon: Heart,
    title: "Beleza Natural",
    description: "Meu foco é realçar o que você já tem de mais bonito, respeitando seus traços e personalidade.",
  },
  {
    icon: CheckCircle,
    title: "Compromisso com Você",
    description: "Sua satisfação é minha prioridade. Trabalho até que você esteja completamente feliz com o resultado.",
  },
]

export function WhyChooseMe() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-sm uppercase tracking-widest text-primary mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Por que me escolher?
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            Mais do que um serviço, ofereço uma experiência de cuidado e valorização da sua beleza única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="font-sans text-muted-foreground font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-sans font-light tracking-wide">Design de Sobrancelhas</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Jéssica
            </h1>
            
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed mb-6 text-pretty">
              Design de sobrancelhas com delicadeza, cuidado e atenção a cada detalhe.
            </p>

            <p className="font-sans text-base lg:text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Cada rosto é único, e é por isso que ofereço um atendimento totalmente personalizado. 
              Meu objetivo é realçar a sua beleza natural e valorizar o seu olhar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-base px-8 py-6 group"
              >
                <a
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar pelo WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary font-sans text-base px-8 py-6"
              >
                <a href="#portfolio">
                  Ver meu trabalho
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/30 rounded-2xl" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl hidden lg:block" />
              
              <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-brow.jpg"
                  alt="Design de sobrancelhas profissional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-card rounded-xl p-4 shadow-lg border border-border">
                <p className="font-serif text-lg font-medium text-foreground">Beleza natural</p>
                <p className="font-sans text-sm text-muted-foreground">em destaque</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

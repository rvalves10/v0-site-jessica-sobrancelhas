import Image from "next/image"
import { Heart, Eye, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-jessica.jpg"
                  alt="Jéssica - Designer de Sobrancelhas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="font-sans text-sm uppercase tracking-widest text-primary mb-4 block">
              Sobre mim
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
              Prazer, eu sou a Jéssica
            </h2>

            <div className="space-y-4 font-sans text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Descobri no design de sobrancelhas uma verdadeira paixão: a possibilidade de transformar 
                o olhar das pessoas e revelar uma beleza que, muitas vezes, elas nem sabiam que tinham.
              </p>
              <p>
                Estou no início da minha jornada profissional, mas trago comigo toda a dedicação, 
                carinho e vontade de entregar o melhor resultado para cada cliente que confia no meu trabalho.
              </p>
              <p>
                Acredito que cada rosto conta uma história única, e meu papel é realçar essa história 
                através de sobrancelhas que valorizem o seu olhar e harmonizem com os seus traços.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <p className="font-sans text-sm text-muted-foreground">Dedicação</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <p className="font-sans text-sm text-muted-foreground">Atenção</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <p className="font-sans text-sm text-muted-foreground">Cuidado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marina Costa",
    text: "Fui uma das primeiras clientes da Jéssica e fiquei encantada! Ela é super cuidadosa e paciente, explicou todo o processo e o resultado ficou lindo, muito natural.",
    service: "Design de Sobrancelhas",
  },
  {
    id: 2,
    name: "Beatriz Almeida",
    text: "Amei o atendimento! A Jéssica tem um olhar incrível para detalhes. Minhas sobrancelhas nunca ficaram tão bonitas e harmoniosas com meu rosto.",
    service: "Design com Henna",
  },
  {
    id: 3,
    name: "Carolina Santos",
    text: "Estava insegura por ter sobrancelhas muito ralas, mas a Jéssica conseguiu um resultado maravilhoso! Super indico para quem quer um trabalho caprichado.",
    service: "Brow Lamination",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-sm uppercase tracking-widest text-primary mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            O que dizem minhas clientes
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            A satisfação de cada cliente é minha maior recompensa. Veja o que elas estão dizendo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-accent/50 mb-4" />
              
              <p className="font-sans text-muted-foreground font-light leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

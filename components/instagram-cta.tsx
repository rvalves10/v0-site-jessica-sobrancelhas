import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function InstagramCTA() {
  return (
    <section className="py-20 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center mb-8">
            <Instagram className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Acompanhe meu trabalho
          </h2>
          
          <p className="font-sans text-lg text-muted-foreground font-light mb-8">
            Siga meu Instagram para ver mais transformações, dicas de cuidados com as sobrancelhas e novidades sobre os meus serviços.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans px-8 py-6 group"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @jessica.browdesign
            </a>
          </Button>

          <p className="font-sans text-sm text-muted-foreground mt-6">
            Dicas, bastidores e muito mais!
          </p>
        </div>
      </div>
    </section>
  )
}

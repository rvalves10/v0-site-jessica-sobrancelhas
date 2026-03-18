import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-28 lg:py-36 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Section */}
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary mb-8 block">
            Bora transformar seu olhar?
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light mb-10 leading-[1.1]">
            Vem conversar comigo
          </h2>
          
          <p className="font-sans text-lg text-muted-foreground font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Me chama no WhatsApp pra tirar suas dúvidas ou marcar seu horário. 
            Vai ser um prazer cuidar de você!
          </p>

          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background font-sans text-xs tracking-[0.2em] uppercase px-14 py-7 rounded-none mb-24"
          >
            <a
              href="https://wa.me/5500000000000?text=Oi, Jéssica! Vim pelo site e quero saber mais sobre seus serviços!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no Zap
            </a>
          </Button>

          {/* Divider */}
          <div className="w-20 h-px bg-border mx-auto mb-12" />

          {/* Logo */}
          <h3 className="font-serif text-4xl font-light mb-8">
            Jéssica
          </h3>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Lash Designer
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Jéssica Lash Designer. Feito com carinho.
          </p>
        </div>
      </div>
    </footer>
  )
}

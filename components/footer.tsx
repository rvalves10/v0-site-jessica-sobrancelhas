import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Section */}
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            Pronta para realçar seu olhar?
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Agende seu horário
          </h2>
          
          <p className="font-sans text-lg text-muted-foreground font-light mb-10 max-w-xl mx-auto">
            Entre em contato pelo WhatsApp e vamos encontrar o melhor horário para você.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background font-sans text-xs tracking-widest uppercase px-12 py-6 mb-20"
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar pelo WhatsApp
            </a>
          </Button>

          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto mb-12" />

          {/* Logo */}
          <h3 className="font-serif text-3xl font-light mb-6">
            Jéssica
          </h3>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Jéssica Lash Designer
          </p>
        </div>
      </div>
    </footer>
  )
}

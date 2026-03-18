import { Instagram, MessageCircle, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Jéssica
          </h2>
          
          <p className="font-sans text-lg text-background/70 font-light mb-8">
            Realçando a beleza natural do seu olhar
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-background/20 mx-auto mb-8" />

          {/* Copyright */}
          <p className="font-sans text-sm text-background/50 flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por Jéssica
          </p>
          <p className="font-sans text-xs text-background/40 mt-2">
            © {new Date().getFullYear()} Jéssica Design de Sobrancelhas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

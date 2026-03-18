"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Oi, Jéssica! Quero agendar um horário!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-sans rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
        Fala comigo no Zap!
      </span>
    </a>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Send, Calendar, Clock } from "lucide-react"

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AGostaria de agendar: ${formData.service}%0A%0ATelefone: ${formData.phone}%0A%0A${formData.message ? `Mensagem: ${formData.message}` : ""}`
    
    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank")
  }

  return (
    <section id="agendamento" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Info */}
            <div className="text-center lg:text-left">
              <span className="font-sans text-sm uppercase tracking-widest text-primary mb-4 block">
                Agendamento
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                Vamos realçar sua beleza?
              </h2>
              <p className="font-sans text-lg text-muted-foreground font-light mb-8">
                Agende seu horário de forma rápida e prática. Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-serif font-semibold text-foreground">Agendamento Flexível</p>
                    <p className="font-sans text-sm text-muted-foreground">Horários que se encaixam na sua rotina</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-serif font-semibold text-foreground">Resposta Rápida</p>
                    <p className="font-sans text-sm text-muted-foreground">Confirmo seu horário em até 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <form onSubmit={handleSubmit}>
                <FieldGroup className="space-y-5">
                  <Field>
                    <FieldLabel className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Seu nome
                    </FieldLabel>
                    <Input
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="font-sans bg-background border-border focus:border-primary"
                    />
                  </Field>

                  <Field>
                    <FieldLabel className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Telefone / WhatsApp
                    </FieldLabel>
                    <Input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="font-sans bg-background border-border focus:border-primary"
                    />
                  </Field>

                  <Field>
                    <FieldLabel className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Serviço desejado
                    </FieldLabel>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="font-sans bg-background border-border">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Design de Sobrancelhas">Design de Sobrancelhas</SelectItem>
                        <SelectItem value="Design com Henna">Design com Henna</SelectItem>
                        <SelectItem value="Brow Lamination">Brow Lamination</SelectItem>
                        <SelectItem value="Limpeza e Alinhamento">Limpeza e Alinhamento</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Mensagem (opcional)
                    </FieldLabel>
                    <Textarea
                      placeholder="Alguma dúvida ou observação?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="font-sans bg-background border-border focus:border-primary resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans py-6 group"
                  >
                    Enviar pelo WhatsApp
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </FieldGroup>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

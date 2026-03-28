import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { LaunchPromo } from "@/components/launch-promo"
import { Portfolio } from "@/components/portfolio"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <LaunchPromo />
      {/* Portfolio desativado temporariamente enquanto não há clientes disponíveis */}
      {/* <Portfolio /> */}
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

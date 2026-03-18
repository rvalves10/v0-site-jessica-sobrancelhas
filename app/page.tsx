import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyChooseMe } from "@/components/why-choose-me"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Booking } from "@/components/booking"
import { InstagramCTA } from "@/components/instagram-cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChooseMe />
      <Services />
      <Portfolio />
      <Testimonials />
      <Booking />
      <InstagramCTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

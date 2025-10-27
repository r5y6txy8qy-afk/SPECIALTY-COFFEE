import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <About />
      <Process />
      <Newsletter />
      <Footer />
    </main>
  )
}

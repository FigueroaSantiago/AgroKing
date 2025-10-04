import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import DiscountBanner from "@/components/discount-banner"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscountBanner />
      <ProductGrid />
      <ContactSection />
    </main>
  )
}

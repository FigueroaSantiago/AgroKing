"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ProductModal from "./product-modal"
import { products, type Product } from "@/lib/products"
import { getSupabase } from "@/lib/supabase"

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const trackWhatsAppClick = async (productName: string, productId: number) => {
    try {
      const supabase = getSupabase()
      await supabase.from("whatsapp_clicks").insert({
        product_name: productName,
        product_id: productId,
        user_agent: navigator.userAgent,
        referrer: document.referrer || "direct",
      })
    } catch (error) {
      console.error("Error tracking click:", error)
    }
  }

  const handleWhatsAppClick = (productName: string, productId: number) => {
    trackWhatsAppClick(productName, productId)

    const message = encodeURIComponent(`Hola, estoy interesado en el producto: ${productName}`)
    window.open(`https://wa.me/573001234567?text=${message}`, "_blank")
  }

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Productos</h2>
            <Button variant="link" className="text-lg">
              Ver todos →
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <p className="text-2xl font-bold text-green-700">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleWhatsAppClick(product.name, product.id)
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWhatsAppClick={handleWhatsAppClick}
      />
    </>
  )
}

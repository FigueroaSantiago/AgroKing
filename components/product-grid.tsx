"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import ProductModal from "./product-modal"
import { products, type Product } from "@/lib/products"
import { getSupabase } from "@/lib/supabase"
import Link from "next/link"

interface ProductGridProps {
  showAll?: boolean
}

export default function ProductGrid({ showAll = false }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [showPhoneForm, setShowPhoneForm] = useState(false)
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null)

  const displayedProducts = showAll ? products : products.slice(0, 6)

  const trackWhatsAppClick = async (
    productName: string,
    productId: number,
    clientPhone?: string
  ) => {
    try {
      const supabase = getSupabase()
      const { error } = await supabase.from("whatsapp_clicks").insert({
        product_name: productName,
        product_id: productId,
        client_phone: clientPhone || null,
        clicked_at: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || "direct",
      })

      if (error) {
        console.error("❌ Error registrando clic:", error)
      } else {
        console.log("✅ Clic registrado correctamente en Supabase")
      }
    } catch (error) {
      console.error("Error tracking click:", error)
    }
  }

  const handleWhatsAppClick = (product: Product) => {
    setPendingProduct(product)
    setShowPhoneForm(true)
  }

  const sendToWhatsApp = async () => {
    if (!pendingProduct) return
    await trackWhatsAppClick(pendingProduct.name, pendingProduct.id, phone)

    const message =
      `Hola, estoy interesado en el producto:\n\n` +
      `*${pendingProduct.name}*\n` +
      `Precio: ${pendingProduct.price}\n\n` +
      `Mi número de contacto es: ${phone}\n\n` +
      `¿Podrían darme más información?`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/573134369400?text=${encodedMessage}`, "_blank")

    // Cierra el formulario
    setShowPhoneForm(false)
    setPhone("")
    setPendingProduct(null)
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
            {!showAll && (
              <Link href="/productos">
                <Button variant="link" className="text-lg">
                  Ver todos →
                </Button>
              </Link>
            )}
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
                      handleWhatsAppClick(product)
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

      {/* Formulario emergente para el número */}
      {showPhoneForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h3 className="text-lg font-semibold mb-3">Déjanos tu número</h3>
            <p className="text-sm text-gray-600 mb-4">
              Así podremos contactarte si se interrumpe la conversación.
            </p>
            <input
              type="tel"
              placeholder="Ej: 3131234567"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex gap-2 justify-center">
              <Button className="bg-green-600 hover:bg-green-700" onClick={sendToWhatsApp}>
                Continuar a WhatsApp
              </Button>
              <Button variant="outline" onClick={() => setShowPhoneForm(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWhatsAppClick={(name, id, price) =>
          handleWhatsAppClick({ name, id, price } as Product)
        }
      />
    </>
  )
}

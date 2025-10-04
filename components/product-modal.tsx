"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { useState } from "react"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onWhatsAppClick: (productName: string, productId: number) => void
}

export default function ProductModal({ product, isOpen, onClose, onWhatsAppClick }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) return null

  const images = product.images || [product.image]
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pr-8">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100 group">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {hasMultipleImages && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-green-600"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-green-700 mb-3">{product.price}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.fullDescription || product.description}
              </p>
            </div>

            {product.specifications && product.specifications.length > 0 && (
              <div>
                <h3 className="font-semibold text-base mb-3">Especificaciones:</h3>
                <div className="grid grid-cols-1 gap-1.5 max-h-[280px] overflow-y-auto pr-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex items-start text-xs">
                      <span className="text-green-600 mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-muted-foreground leading-tight">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-base py-5 mt-4"
              onClick={() => {
                onWhatsAppClick(product.name, product.id)
                onClose()
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

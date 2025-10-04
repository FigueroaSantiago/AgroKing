"use client"

import { Button } from "@/components/ui/button"

export default function DiscountBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-700 to-green-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="text-3xl font-bold mb-2">Descuentos Especiales</h2>
            <p className="text-lg opacity-90">Contáctanos para obtener ofertas exclusivas en tu compra</p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-700 hover:bg-neutral-100"
            onClick={() => window.open("https://wa.me/573001234567", "_blank")}
          >
            Solicitar Descuento
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-muted-foreground">+57 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">ventas@agroking.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-muted-foreground">Colombia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-600 text-white p-8 rounded-lg shadow-sm flex flex-col justify-center items-center text-center">
            <MessageCircle className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-3">¿Listo para comprar?</h3>
            <p className="mb-6 opacity-90">Chatea con nosotros por WhatsApp y te ayudaremos con tu pedido</p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-700 hover:bg-neutral-100"
              onClick={() => window.open("https://wa.me/573001234567", "_blank")}
            >
              Abrir WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

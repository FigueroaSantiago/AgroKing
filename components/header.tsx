"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <p>Envíos a todos los países</p>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+57 300 123 4567</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-green-700">AGRO KING</div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#productos" className="hover:text-green-700 transition-colors">
              Productos
            </a>
            <a href="#nosotros" className="hover:text-green-700 transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-green-700 transition-colors">
              Contacto
            </a>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://wa.me/573001234567", "_blank")}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#productos"
              className="block py-2 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Productos
            </a>
            <a
              href="#nosotros"
              className="block py-2 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="block py-2 hover:text-green-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://wa.me/573001234567", "_blank")}
            >
              WhatsApp
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">AGRO KING</h3>
            <p className="text-neutral-400 mb-4">Tu aliado en maquinaria y motores agrícolas de calidad</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="/productos" className="hover:text-green-500 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="/nosotros" className="hover:text-green-500 transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>+57 304 225 8516</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span>agroKingOficial@agroking.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} AGRO KING. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

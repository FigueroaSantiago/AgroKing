"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tractor, Users, Factory, Wrench } from "lucide-react"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-10">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-3">Sobre AgroKing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En <span className="font-semibold">AgroKing</span> somos especialistas en motores agrícolas, repuestos y soluciones para el campo. 
            Trabajamos cada día para impulsar la productividad del sector agroindustrial con equipos confiables y de alta calidad.
          </p>
        </div>

        {/* Sección: Historia */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Factory className="w-6 h-6" />
              Nuestra Historia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              AgroKing nació con la misión de ofrecer motores agrícolas y maquinaria de alto rendimiento a agricultores, 
              talleres y distribuidores del país. Desde nuestros inicios hemos mantenido un compromiso firme con la calidad, 
              la innovación y el servicio personalizado. Hoy somos un referente en el sector, brindando respaldo técnico 
              y garantía en cada producto que comercializamos.
            </p>
          </CardContent>
        </Card>

        {/* Sección: Especialización */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Wrench className="w-6 h-6" />
              Nuestra Especialización
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Motores agrícolas y repuestos certificados.</li>
              <li>Equipos para riego, fumigación y bombeo de agua.</li>
              <li>Asesoría técnica y mantenimiento especializado.</li>
              <li>Distribución nacional con atención personalizada.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Sección: Nuestro equipo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Users className="w-6 h-6" />
              Nuestro Equipo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está conformado por profesionales apasionados por el agro y comprometidos con el servicio.  
              Cada integrante aporta experiencia y dedicación para brindar la mejor atención a nuestros clientes.
            </p>
            <div className="flex justify-center">
              <img
                src="/images/grupo_trabajo.jpg" 
                alt="Equipo AgroKing"
                className="rounded-2xl shadow-lg max-w-3xl w-full object-cover border border-green-100"
              />
            </div>
          </CardContent>
        </Card>

        {/* Sección: Compromiso */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Tractor className="w-6 h-6" />
              Nuestro Compromiso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              En AgroKing trabajamos para que cada agricultor y profesional del campo tenga acceso a equipos 
              duraderos, eficientes y con garantía real. Creemos que el progreso del campo es el progreso del país, 
              por eso acompañamos cada proyecto desde la asesoría hasta el mantenimiento.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

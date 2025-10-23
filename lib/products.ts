export interface Product {
  id: number
  name: string
  price: string
  image: string
  images?: string[]
  description: string
  fullDescription?: string
  specifications?: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Trepador 300 F-G",
    price: "5,890 USD",
    image: "/images/TREPADOR300F-G Naranja.png",
    images: ["/images/TREPADOR300F-G Amarillo.png", "/images/TREPADOR300F-G Rojo.png", "/images/TREPADOR300F-G Azul.png"],
    description: "Motor agrícola de alta potencia",
    fullDescription:
      "Motor agrícola de alta potencia diseñado para trabajos pesados en el campo. Ideal para terrenos difíciles y largas jornadas de trabajo.",
    specifications: ["Marca: GDM", "Modelo: TREPADOR 300 F-G", "Cilindrada: 300 CC", "Potencia: 16.10 HP – 7500RPM", "5 Velocidades + retroceso", "Sistema Rooster reforzado", "Transmisión: Corona 9:35/ Cardan", "Velocidad máxima: 40 km/hor", "Tolva Hidraulica", "Capacidad de carga: 950 kg", "Frenos delantero: Disco", "Frenos posterior: Zapata", "Tolva ancho/largo/alto: 1.20m/1.84m/1.05m", "4X4 Doble tracción", "Montaje de cabrestante eléctrico"],
  },
  {
    id: 2,
    name: "4x4 Faretty",
    price: "4,890 USD",
    image: "/images/IMG-20250927-WA0486.jpg",
    images: ["/images/IMG-20250927-WA0486.jpg", "/images/4x4 Faretty Rojo.jpeg", "/images/4x4 Faretty Naranja.jpeg"],
    description: "Vehículo todo terreno para campo",
    fullDescription:
      "Vehículo 4x4 robusto y confiable, perfecto para transporte en terrenos agrícolas difíciles. Capacidad de carga superior.",
    specifications: ["Tracción: 4x4", "Capacidad: 1000 kg", "Motor: Diesel", "Cabina reforzada"],
  },
  {
    id: 3,
    name: "Minitractor 4x4 Diesel 18Hp",
    price: "3,890 USD",
    image: "/images/minitractor.png",
    images: ["/images/minitractor.png", "/images/minitractor2.png" ],
    description: "Ideal para terrenos pequeños y medianos",
    fullDescription:
      "Minitractor compacto pero potente, perfecto para fincas pequeñas y medianas. Fácil manejo y bajo consumo.",
    specifications: ["Potencia: 18 HP", "Combustible: Diesel", "Tracción: 4x4", "Implementos incluidos"],
  },
  {
    id: 4,
    name: "Trepador 300 FN",
    price: "5,490 USD",
    image: "/images/Trepador 300 FN Naranja.png",
    images: ["/images/Trepador 300 FN Naranja.png", "/images/Trepador 300 FN Amarillo.png", "/images/Trepador 300 FN Azul.png", "/images/Trepador 300 FN Rojo.png" ],
    description: "Versión mejorada con mayor eficiencia",
    fullDescription: "Versión mejorada del Trepador 300 con mayor eficiencia de combustible y menor mantenimiento.",
    specifications: [
      "Potencia: 300 HP",
      "Combustible: Diesel",
      "Eficiencia mejorada 20%",
      "Sistema de enfriamiento avanzado",
    ],
  },
  {
    id: 5,
    name: "Racing 330 XL H",
    price: "6,390 USD",
    image: "/images/racing-330xl.png",
    images: ["/images/racing-330xl.png", "/images/racing-330xl-roja.png" ],
    description: "Potencia y velocidad para grandes extensiones",
    fullDescription:
      "Motor de alto rendimiento diseñado para grandes extensiones de terreno. Velocidad y potencia combinadas.",
    specifications: ["Potencia: 330 HP", "Velocidad máxima: 45 km/h", "Combustible: Híbrido", "Sistema GPS incluido"],
  },

    {
    id: 6,
    name: "PELETIZADORA ( 300-500 Kilos/Hora) 3 RODILLOS",
    price: "1,700 USD",
    image: "/images/PELETIZADORA 300-500 Kilos.png",
    images: ["/images/PELETIZADORA 300-500 Kilos.png", "/images/PELETIZADORA 300-500 Kilos.png"],
    description: "Es una herramienta eficiente y confiable para la producción de pellets de alta calidad. Con una capacidad de hasta 250 kg/h, esta máquina es ideal para la transformación de residuos agrícolas en pellets de combustible y alimentos para animales. NO INCLUYE MOTOR",
    fullDescription: "Piladora industrial para procesamiento de arroz. Alta capacidad y eficiencia en el descascarado.",
    specifications: ["Producción pellet: 300-500kg/hora", "Potencia Requerida Eléctrica: 10HP a 15HP 3600RPM 220V- 440V", "Potencia Requerida Gasolina: 15HP a 30HP 3600RPM", "Potencia Requerida Diésel: 15HP a 34HP 3600RPM", "Material de Peletizadora: Hierro", "Dimensiones Peletizadora: 1.10 x 46 x 90", "Peso: 100kg", "Rotación de Peletizadora: 360RPM", "Incluye: base, 4 ruedas, plástico teflonado, 2 discos en acero, tolva, lamina colectora y cortador de pellet"],
  },
  {
    id: 7,
    name: "YS330TRACTOR-TI",
    price: "5,990 USD",
    image: "/images/YS330TRACTOR-TI.png",
    images: ["/images/YS330TRACTOR-TI.png", "/images/YS330TRACTOR-TI Azul.png", "/images/YS330TRACTOR-TI Roja.png" ],
    description: "Vehiculo tipo carga apto para cualquier terreno",
    fullDescription: "Piladora industrial para procesamiento de arroz. Alta capacidad y eficiencia en el descascarado.",
    specifications: ["Cuatrimoto De Carga Tipo Camión 4×4", "Marca: YANSUMI", "Modelo: YS330TRACTOR-TI", "Cilindraje De Motor: 330CC/4T/ OHV", "Tipo de Timón: Circular (De Auto).", "Tamaño De Tolva: 40m X 2.40 M", "Llantas Delanteras: 25-10-12", "Llantas Posteriores: 25-10-12", "Sistema De Enfriamiento: Radiador Y Disipador De Aire", "Velocidades: 5 Velocidades + Retroceso Y Rooster", "Potencia: 13.00 @6500", "Tipo De Suspensión Delantera: Barras Telescópicas", "Tipo De Suspensión Posterior: Amortiguadores"],
  },
  {
    id: 8,
    name: "PELETIZADORA (80-250 Kilos/Hora) 4 RODILLOS",
    price: "1,000 USD",
    image: "/images/PELETIZADORA 80-250 Kilos.png",
    images: ["/images/PELETIZADORA 80-250 Kilos.png", "/images/PELETIZADORA 80-250 Kilos 2.png"],
    description: "Es una herramienta eficiente y confiable para la producción de pellets de alta calidad. Con una capacidad de hasta 250 kg/h, esta máquina es ideal para la transformación de residuos agrícolas en pellets de combustible y alimentos para animales. NO INCLUYE MOTOR",
    fullDescription: "Piladora industrial para procesamiento de arroz. Alta capacidad y eficiencia en el descascarado.",
    specifications: [],
  },
  {
    id: 9,
    name: "Piladora de Arroz",
    price: "$1,000",
    image: "/images/piladora-trilladora-de-arroz.png",
    description: "Procesamiento eficiente de arroz",
    fullDescription: "Piladora industrial para procesamiento de arroz. Alta capacidad y eficiencia en el descascarado.",
    specifications: ["Capacidad: 500 kg/hora", "Motor: Eléctrico/Diesel", "Acero inoxidable", "Fácil limpieza"],
  },
]

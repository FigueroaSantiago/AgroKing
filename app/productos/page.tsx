import ProductGrid from "@/components/product-grid"

export default function ProductosPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Todos Nuestros Productos</h1>
          <p className="text-lg text-muted-foreground">
            Explora nuestra línea completa de vehículos y motores agrícolas
          </p>
        </div>
        <ProductGrid showAll={true} />
      </div>
    </main>
  )
}

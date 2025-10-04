"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getSupabase } from "@/lib/supabase"
import { BarChart3, TrendingUp, Calendar, Package } from "lucide-react"

interface ClickStats {
  total: number
  today: number
  thisWeek: number
  byProduct: { product_name: string; count: number }[]
}

export default function AdminPage() {
  const [stats, setStats] = useState<ClickStats>({
    total: 0,
    today: 0,
    thisWeek: 0,
    byProduct: [],
  })
  const [isLoading, setIsLoading] = useState(true)
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const ADMIN_PASSWORD = "agroking2025"

  const fetchStats = async () => {
    try {
      const supabase = getSupabase()

      const { data: allClicks } = await supabase
        .from("whatsapp_clicks")
        .select("*")
        .order("clicked_at", { ascending: false })

      if (!allClicks) return

      const now = new Date()
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

      const todayClicks = allClicks.filter((click: any) => new Date(click.clicked_at) >= todayStart)

      const weekClicks = allClicks.filter((click: any) => new Date(click.clicked_at) >= weekStart)

      const productCounts = allClicks.reduce((acc: Record<string, number>, click: any) => {
        acc[click.product_name] = (acc[click.product_name] || 0) + 1
        return acc
      }, {})

      const byProduct = Object.entries(productCounts)
        .map(([product_name, count]) => ({ product_name, count: count as number }))
        .sort((a, b) => b.count - a.count)

      setStats({
        total: allClicks.length,
        today: todayClicks.length,
        thisWeek: weekClicks.length,
        byProduct,
      })
    } catch (error) {
      console.error("Error fetching stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats()
      const interval = setInterval(fetchStats, 30000)
      return () => clearInterval(interval)
    }
  }, [isAuthenticated])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert("Contraseña incorrecta")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Panel de Administración</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Ingresa la contraseña"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
              >
                Ingresar
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Cargando estadísticas...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
          <p className="text-muted-foreground">Estadísticas de clics en WhatsApp</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Clics</CardTitle>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground mt-1">Desde el inicio</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Hoy</CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.today}</div>
              <p className="text-xs text-muted-foreground mt-1">Clics de hoy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.thisWeek}</div>
              <p className="text-xs text-muted-foreground mt-1">Últimos 7 días</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Clics por Producto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.byProduct.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{item.product_name}</p>
                    <div className="w-full bg-neutral-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{
                          width: `${(item.count / stats.total) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-2xl font-bold">{item.count}</p>
                    <p className="text-xs text-muted-foreground">{((item.count / stats.total) * 100).toFixed(1)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export type Database = {
  public: {
    Tables: {
      whatsapp_clicks: {
        Row: {
          id: number
          product_name: string
          product_id: number
          clicked_at: string
          user_agent: string | null
          referrer: string | null
        }
        Insert: {
          id?: number
          product_name: string
          product_id: number
          clicked_at?: string
          user_agent?: string | null
          referrer?: string | null
        }
        Update: {
          id?: number
          product_name?: string
          product_id?: number
          clicked_at?: string
          user_agent?: string | null
          referrer?: string | null
        }
      }
    }
  }
}

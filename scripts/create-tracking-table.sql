-- Active: 1724213515031@@127.0.0.1@3306
-- Create table for tracking WhatsApp clicks
CREATE TABLE IF NOT EXISTS whatsapp_clicks (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_id INTEGER,
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  referrer TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_clicked_at ON whatsapp_clicks(clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_product_name ON whatsapp_clicks(product_name);

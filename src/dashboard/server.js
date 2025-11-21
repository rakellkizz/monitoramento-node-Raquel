// src/dashboard/server.js
// 🌐 Dashboard Web – exibe gráfico de latência em tempo real (a partir de logs/latency.json)

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

const LATENCY_FILE = path.join(__dirname, '..', '..', 'logs', 'latency.json');

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para retornar o histórico de latência em JSON
app.get('/api/latency-history', (req, res) => {
  if (!fs.existsSync(LATENCY_FILE)) {
    return res.json([]);
  }

  try {
    const raw = fs.readFileSync(LATENCY_FILE, 'utf8') || '[]';
    const data = JSON.parse(raw);
    res.json(data);
  } catch (err) {
    console.error('Erro ao ler latency.json:', err.message);
    res.status(500).json({ error: 'Erro ao ler latency.json' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Dashboard rodando em: http://localhost:${PORT}`);
});

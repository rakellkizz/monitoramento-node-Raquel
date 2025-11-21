// ============================================================================
// 📁 apiCheck.js
// Checa se uma API HTTP responde corretamente.
// Retorna informações de status, latência e código HTTP.
// ============================================================================

import fetch from "node-fetch";

// ----------------------------------------------------------------------------
// 🔍 Função que valida um endpoint HTTP
// ----------------------------------------------------------------------------
export default async function apiCheck(target) {
  const start = performance.now();

  try {
    const response = await fetch(target.url, { method: "GET" });
    const end = performance.now();

    return {
      type: "api",
      name: target.name,
      url: target.url,
      status: "online",
      httpStatus: response.status,
      responseTime: (end - start).toFixed(2)
    };

  } catch (err) {
    return {
      type: "api",
      name: target.name,
      url: target.url,
      status: "offline",
      error: err.message
    };
  }
}

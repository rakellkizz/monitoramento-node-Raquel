// ============================================================================
// 📁 monitor.js
// Monitor principal: executa API check, Ping e Port Check
// Totalmente compatível com ESModules + ultra comentado.
// ============================================================================

import log from "./logger.js";
import config from "./config.js";

import apiCheck from "./checks/apiCheck.js";
import pingCheck from "./checks/pingCheck.js";
import portCheck from "./checks/portCheck.js";

// ----------------------------------------------------------------------------
// 🎯 Executa monitoramento de cada categoria
// ----------------------------------------------------------------------------

async function runMonitor() {
  log("🚀 Iniciando monitoramento automático");

  // =======================
  // 🌐 Checagem de APIs
  // =======================
  for (const api of config.apis) {
    const result = await apiCheck(api);
    log(`API "${api.name}" → ${result.status.toUpperCase()} (${result.responseTime || "erro"} ms)`);
  }

  // =======================
  // 📡 Pings
  // =======================
  for (const host of config.pings) {
    const result = await pingCheck(host);
    log(`Ping "${host.name}" → ${result.status.toUpperCase()}`);
  }

  // =======================
  // 🔌 Port Check
  // =======================
  for (const portTest of config.ports) {
    const result = await portCheck(portTest);
    log(`Porta "${portTest.name}" → ${result.status.toUpperCase()}`);
  }

  log("✔ Monitoramento finalizado.");
}

// ----------------------------------------------------------------------------
// ▶ Execução direta
// ----------------------------------------------------------------------------
runMonitor();
// ============================================================================
// ============================================================================
// 📁 logger.js
// Sistema de logging centralizado para todo o projeto.
// Trabalha escrevendo mensagens com data/hora no arquivo logs/monitor.log
// e também exibe no console.
//
// Totalmente compatível com ESModules.
// ============================================================================

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 🎯 Resolve corretamente __dirname em ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📌 Caminho do arquivo de log
const LOG_FILE = path.join(__dirname, "..", "logs", "monitor.log");

// ----------------------------------------------------------------------------
// 📌 Função utilitária de escrita no arquivo de log
// ----------------------------------------------------------------------------
function writeToFile(message) {
  fs.appendFileSync(LOG_FILE, message + "\n", "utf8");
}

// ----------------------------------------------------------------------------
// 📌 logger principal
// ----------------------------------------------------------------------------
function log(message) {
  const timestamp = new Date().toISOString();
  const finalMessage = `[${timestamp}] ${message}`;

  console.log(finalMessage);     // Mostra no terminal
  writeToFile(finalMessage);     // Salva no monitor.log
}

// ✔ Export padrão ESModule
export default log;
// ============================================================================
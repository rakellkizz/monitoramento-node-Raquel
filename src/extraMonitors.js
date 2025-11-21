// src/extraMonitors.js
// 🧠 Monitor extra: CPU, RAM e múltiplas portas

import os from 'os';
import fs from 'fs';
import net from 'net';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOG_DIR = path.join(__dirname, '..', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'monitor.log');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function log(line) {
  const ts = new Date().toISOString();
  const full = `[${ts}] ${line}`;
  console.log(full);
  fs.appendFileSync(LOG_FILE, full + '\n', 'utf8');
}

// Lista de portas para checar (pode ajustar)
const PORT_TARGETS = [
  { name: 'Servidor local HTTP', host: '127.0.0.1', port: 80 },
  { name: 'Aplicação local 3000', host: '127.0.0.1', port: 3000 },
  { name: 'PostgreSQL padrão', host: '127.0.0.1', port: 5432 }
];

function checkSystemMetrics() {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const usedPercent = (usedMem / totalMem) * 100;

  // loadavg[0] ~ média de 1 minuto (em Linux)
  const load1 = os.loadavg()[0];

  log(
    `CPU load(1m): ${load1.toFixed(2)} | RAM usada: ${usedPercent.toFixed(
      1
    )}%`
  );
}

function checkPort(target) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeoutMs = 2000;

    const onError = () => {
      socket.destroy();
      log(`❌ Porta fechada: ${target.name} (${target.host}:${target.port})`);
      resolve(false);
    };

    socket.setTimeout(timeoutMs);
    socket.on('connect', () => {
      log(`✅ Porta aberta: ${target.name} (${target.host}:${target.port})`);
      socket.end();
      resolve(true);
    });
    socket.on('timeout', onError);
    socket.on('error', onError);

    socket.connect(target.port, target.host);
  });
}

async function runExtraMonitors() {
  log('===== MONITOR EXTRA (CPU/RAM/PORTAS) INICIADO =====');
  checkSystemMetrics();

  for (const target of PORT_TARGETS) {
    await checkPort(target);
  }

  log('===== MONITOR EXTRA (CPU/RAM/PORTAS) FINALIZADO =====');
}

runExtraMonitors().catch((err) => {
  console.error('Erro no monitor extra:', err);
});

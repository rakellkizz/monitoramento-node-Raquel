// ====================================================================================
// 📌 Monitor de Latência – Registra histórico contínuo em logs/latency.json
// Criado para o projeto "Monitoramento Node – Raquel"
// Objetivo: Medir latência real (ping) de hosts importantes e armazenar histórico.
// ====================================================================================

// 📚 Importações necessárias
import fs from 'fs';                  // Manipulação de arquivos (ler/gravar JSON)
import path from 'path';              // Resolver caminhos de forma segura
import ping from 'ping';              // Biblioteca para ping (latência real)
import { fileURLToPath } from 'url';  // Necessário para usar __dirname no formato ESModule

// ====================================================================================
// 🔧 Ajuste do dirname e filename (ESModules não têm __dirname por padrão)
// ====================================================================================

// Converte o caminho do arquivo atual (import.meta.url) em um caminho de sistema
const __filename = fileURLToPath(import.meta.url);

// Extrai o diretório do arquivo atual
const __dirname = path.dirname(__filename);

// ====================================================================================
// 📂 Definição dos caminhos de logs
// ====================================================================================

// Pasta logs/ na raiz do projeto
const LOG_DIR = path.join(__dirname, '..', 'logs');

// Arquivo onde todo o histórico de latência será salvo
const LATENCY_FILE = path.join(LOG_DIR, 'latency.json');

// ====================================================================================
// 🛠 Criar pasta logs caso não exista
// ====================================================================================
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// ====================================================================================
// 🎯 Lista de hosts que serão monitorados
// Você pode adicionar quantos quiser futuramente! 🔥
// ====================================================================================
const HOSTS = [
  { name: 'Google DNS', host: '8.8.8.8' },
  { name: 'Cloudflare DNS', host: '1.1.1.1' }
];

// ====================================================================================
// 🚀 Função principal que roda o monitoramento
// ====================================================================================
async function runLatencyMonitor() {
  // ⏱ Marca o horário exato da execução
  const timestamp = new Date().toISOString();

  // 🗃 Variável que vai armazenar o histórico completo
  let history = [];

  // ====================================================================================
  // 📥 Carregar histórico anterior (se existir)
  // ====================================================================================
  if (fs.existsSync(LATENCY_FILE)) {
    try {
      // Lê arquivo → se vazio, usa []
      const raw = fs.readFileSync(LATENCY_FILE, 'utf8') || '[]';

      // Converte JSON em array
      history = JSON.parse(raw);
    } catch (err) {
      console.error('Erro ao ler latency.json, recriando arquivo:', err.message);
      history = [];
    }
  }

  console.log('===== MONITOR DE LATÊNCIA =====');

  // ====================================================================================
  // 🔁 Loop para testar cada host da lista
  // ====================================================================================
  for (const target of HOSTS) {
    try {
      // Faz um ping real usando ping.promise.probe
      const result = await ping.promise.probe(target.host, { timeout: 3 });

      // 🎯 Monta o registro (linha) do histórico
      const entry = {
        name: target.name,
        host: target.host,
        time: timestamp,
        alive: result.alive, // true ou false
        latencyMs:
          result.time === 'unknown' || result.time === undefined
            ? null        // Quando o host não responder
            : Number(result.time) // Converte pra número
      };

      // Adiciona entrada ao histórico
      history.push(entry);

      // ====================================================================================
      // 🖨 Log no terminal (pra você ver acontecer ao vivo)
      // ====================================================================================
      if (entry.alive && entry.latencyMs !== null) {
        console.log(
          `[${timestamp}] ${target.name} (${target.host}) – ${entry.latencyMs} ms ✅`
        );
      } else {
        console.log(
          `[${timestamp}] ${target.name} (${target.host}) – OFFLINE ❌`
        );
      }
    } catch (err) {
      console.error(
        `Erro ao pingar ${target.name} (${target.host}):`,
        err.message
      );
    }
  }

  // ====================================================================================
  // 💾 Salvar histórico atualizado em JSON
  // ====================================================================================
  fs.writeFileSync(LATENCY_FILE, JSON.stringify(history, null, 2), 'utf8');

  console.log('Histórico salvo em logs/latency.json');
  console.log('===== FIM MONITOR DE LATÊNCIA =====');
}

// ====================================================================================
// ▶️ Execução do monitor
// Caso algo dê errado, mostramos a causa
// ====================================================================================
runLatencyMonitor().catch((err) => {
  console.error('Erro geral no monitor de latência:', err);
});

// ============================================================================
// 📁 pingCheck.js
// Faz um "ping" TCP simples, verificando se o host está acessível.
// Compatível com ESModules.
// ============================================================================

import net from "net";

// ----------------------------------------------------------------------------
// 📡 Função que testa conectividade usando TCP
// ----------------------------------------------------------------------------
export default function pingCheck(target) {
  return new Promise((resolve) => {
    const start = performance.now();

    const socket = net.createConnection(80, target.host);

    // Quando conectar → host está vivo
    socket.on("connect", () => {
      const end = performance.now();
      socket.end();

      resolve({
        type: "ping",
        name: target.name,
        host: target.host,
        status: "online",
        responseTime: (end - start).toFixed(2)
      });
    });

    socket.on("error", (err) => {
      resolve({
        type: "ping",
        name: target.name,
        host: target.host,
        status: "offline",
        error: err.message
      });
    });
  });
}

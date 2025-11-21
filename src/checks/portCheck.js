// ============================================================================
// 📁 portCheck.js
// Valida se uma porta TCP está aberta em determinado host.
// ============================================================================

import net from "net";

// ----------------------------------------------------------------------------
// 🔌 Teste de porta TCP
// ----------------------------------------------------------------------------
export default function portCheck(target) {
  return new Promise((resolve) => {
    const socket = net.createConnection(target.port, target.host);

    socket.on("connect", () => {
      socket.end();
      resolve({
        type: "port",
        name: target.name,
        host: target.host,
        port: target.port,
        status: "open"
      });
    });

    socket.on("error", () => {
      resolve({
        type: "port",
        name: target.name,
        host: target.host,
        port: target.port,
        status: "closed"
      });
    });
  });
}

const net = require("net");

function portCheck(service) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(3000);

    socket
      .connect(service.port, service.host, () => {
        socket.destroy();
        resolve({ ok: true });
      })
      .on("error", () => resolve({ ok: false }))
      .on("timeout", () => {
        socket.destroy();
        resolve({ ok: false });
      });
  });
}

module.exports = portCheck;

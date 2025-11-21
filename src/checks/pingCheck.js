const ping = require("ping");

async function pingCheck(service) {
  const res = await ping.promise.probe(service.host);
  return {
    ok: res.alive,
    time: res.time,
  };
}

module.exports = pingCheck;

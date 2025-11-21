const log = require("./logger");
const apiCheck = require("./checks/apiCheck");
const pingCheck = require("./checks/pingCheck");
const portCheck = require("./checks/portCheck");
const { services } = require("./config");

async function run() {
  log("===== MONITOR INICIADO =====");

  for (const service of services) {
    log(`Checando: ${service.name}`);

    let result;

    if (service.type === "api") result = await apiCheck(service);
    if (service.type === "ping") result = await pingCheck(service);
    if (service.type === "port") result = await portCheck(service);

    if (result.ok) {
      log(`OK: ${service.name} 👍`);
    } else {
      log(`❌ Falha em ${service.name}: ${JSON.stringify(result)}`);
    }
  }

  log("===== MONITOR FINALIZADO =====\n");
}

run();

const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "..", "logs", "monitor.log");

function log(message) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;
  console.log(line);
  fs.appendFileSync(logFile, line);
}

module.exports = log;

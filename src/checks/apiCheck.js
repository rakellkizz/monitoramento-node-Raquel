const axios = require("axios");

async function apiCheck(service) {
  try {
    const r = await axios.get(service.url, { timeout: 5000 });
    return { ok: true, status: r.status };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

module.exports = apiCheck;

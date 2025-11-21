// ============================================================================
// 📁 config.js
// Lista de serviços a serem monitorados.
// Pode ter APIs, pings e portas.
// ============================================================================

export default {
  apis: [
    { name: "Google API", url: "https://google.com" }
  ],

  pings: [
    { name: "Google DNS", host: "8.8.8.8" }
  ],

  ports: [
    { name: "Meu Servidor Local", host: "localhost", port: 3000 }
  ]
};

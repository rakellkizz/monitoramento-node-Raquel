module.exports = {
  services: [
    {
      name: "Google Website",
      type: "api",
      url: "https://google.com",
    },
    {
      name: "GitHub API",
      type: "api",
      url: "https://api.github.com",
    },
    {
      name: "DNS Cloudflare",
      type: "ping",
      host: "1.1.1.1",
    },
    {
      name: "Servidor Local Porta 3000",
      type: "port",
      host: "127.0.0.1",
      port: 3000,
    },
  ],
};

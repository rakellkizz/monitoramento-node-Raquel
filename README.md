<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&pause=800&color=9F79EE&center=true&width=1200&lines=🔥+Monitoramento+Node.js+%7C+Dashboard+Profissional;📡+Ping+%7C+API+%7C+Portas+%7C+Latência+em+Tempo+Real;✨+Criado+com+Excelência+por+Raquel+G.+de+Souza" />
</p>

<p align="center">
  <a href="https://monitoramento-node-raquel.onrender.com">
    <img src="https://img.shields.io/badge/🌐 Acessar%20Dashboard%20Online-8A2BE2?style=for-the-badge" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-Server-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Chart.js-Dashboard-FF6384?style=for-the-badge&logo=chart.js&logoColor=white">
  <img src="https://img.shields.io/badge/Ping-Monitor-1E90FF?style=for-the-badge">
</p>

---

# 💜📡 Monitoramento Node – Raquel

Sistema completo de **monitoramento de serviços**, com:

- 🔍 Checagem de APIs / HTTP  
- 📶 Ping com histórico de latência (JSON)  
- 🔌 Verificação de múltiplas portas  
- 🧠 Monitores extra de CPU e RAM  
- 📊 Dashboard Web com gráfico dinâmico (Chart.js)  
- 🧾 Logs centralizados em `logs/monitor.log`  
- 📄 Workflow de CI/CD para gerar PDF do README  

---

# 🌐 Dashboard em Produção

Meu dashboard profissional está hospedado online:

### 📍 https://monitoramento-node-raquel.onrender.com

Recursos disponíveis:

✔ Monitoramento em tempo real  
✔ Gráfico de latência (Google DNS / Cloudflare)  
✔ Status vivo das requisições  
✔ Interface moderna e elegante  

---

# 🟣 Badges do Projeto

## 🔧 Tecnologias
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-Dashboard-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![Ping](https://img.shields.io/badge/Ping-Monitor-1E90FF?style=for-the-badge)

## 🔧 Status
![Status](https://img.shields.io/badge/STATUS-ATIVO-success?style=for-the-badge&color=4CAF50)
![Workflow](https://img.shields.io/github/actions/workflow/status/rakellkizz/monitoramento-node-Raquel/monitor.yml?style=for-the-badge&label=MONITOR%20CI/CD)

## 🔧 Repositório
![Repo Size](https://img.shields.io/github/repo-size/rakellkizz/monitoramento-node-Raquel?style=for-the-badge&color=7957d5)
![Last Commit](https://img.shields.io/github/last-commit/rakellkizz/monitoramento-node-Raquel?style=for-the-badge&color=6a5acd)

---

# 🖼️ Capa Animada (Opcional)

> Coloque seu GIF na pasta: `assets/monitor-cover.gif`

<p align="center">
  <img src="assets/monitor-cover.gif" alt="Monitoramento Node – Raquel" style="border-radius:12px" />
</p>

---

# 🧩 Estrutura do Projeto

```bash
monitoramento-node-Raquel/
│
├── logs/
│   ├── monitor.log
│   └── latency.json         
│
├── src/
│   ├── checks/
│   │   ├── apiCheck.js
│   │   ├── pingCheck.js
│   │   └── portCheck.js
│   ├── config.js
│   ├── logger.js
│   ├── monitor.js
│   ├── latencyMonitor.js
│   ├── extraMonitors.js
│   └── dashboard/
│       ├── server.js
│       └── public/
│           └── index.html
│
├── .github/
│   └── workflows/
│       ├── monitor.yml
│       └── pdf-readme.yml
│
├── assets/
│   ├── monitor-cover.gif
│   └── prints/
│
├── package.json
└── README.md
⚙️ Como Rodar Localmente
1. Instalar dependências
npm install

2. Rodar o monitor principal
node src/monitor.js

3. Monitor de latência
node src/latencyMonitor.js

4. Monitores extras
node src/extraMonitors.js

5. Dashboard Web
node src/dashboard/server.js


Abra no navegador:

http://localhost:4000

📊 Gráfico de Latência

Dados carregados de logs/latency.json

Renderizado via Chart.js

Cada execução do monitor adiciona novos pontos

Suporta múltiplos hosts (Google DNS, Cloudflare, etc.)

👩‍💻 Autoria

Criado com 💜 por Raquel G. de Souza
GitHub: https://github.com/rakellkizz

LinkedIn: https://www.linkedin.com/in/raquel-g-de-souza/
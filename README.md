🟣 STATUS E TECNOLOGIAS
![Node.js](https://img.shields.io/badge/Node.js-16.20.0-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-Dashboard-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![Ping](https://img.shields.io/badge/Ping-Monitor-0066ff?style=for-the-badge)

🟣 STATUS DO PROJETO
![Status](https://img.shields.io/badge/STATUS-ATIVO-success?style=for-the-badge&color=4CAF50)

🟣 WORKFLOW CI/CD
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/rakellkizz/monitoramento-node-Raquel/monitor.yml?style=for-the-badge&label=MONITOR%20CI/CD)

🟣 BADGES ANIMADOS (MARAVILHOSOS 😍)
![Animated Badge](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=500&color=AA7CFF&width=500&lines=🔥+Monitoramento+de+Serviços+em+Node.js;📊+Dashboard+de+Latência+em+Tempo+Real;🚀+Criado+com+Orgulho+por+Raquel)

🟣 BADGE DE LICENÇA
![License](https://img.shields.io/badge/LICENSE-MIT-purple?style=for-the-badge)

🟣 BADGE DE REPOSITÓRIO
![Repo Size](https://img.shields.io/github/repo-size/rakellkizz/monitoramento-node-Raquel?style=for-the-badge&color=7957d5)
![Last Commit](https://img.shields.io/github/last-commit/rakellkizz/monitoramento-node-Raquel?style=for-the-badge&color=6a5acd)

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&pause=800&color=9F79EE&center=true&width=1200&lines=🔥+Monitoramento+Node.js+%7C+Dashboard+Profissional;📡+Ping+%7C+API+%7C+Portas+%7C+Latência+em+Tempo+Real;✨+Criado+com+Excelência+por+Raquel+G.+de+Souza" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-Server-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Chart.js-Dashboard-FF6384?style=for-the-badge&logo=chart.js&logoColor=white">
  <img src="https://img.shields.io/badge/Ping-Monitor-1E90FF?style=for-the-badge">
</p>


# 💜📡 Monitoramento Node – Raquel

Automação profissional de **monitoramento de serviços**, com:

- 🔍 Checagem de APIs / HTTP
- 📶 Ping com histórico de latência (JSON)
- 🔌 Verificação de múltiplas portas
- 🧠 Monitor extra de CPU e RAM
- 📊 Dashboard Web em Node + Chart.js
- 📄 Workflow para gerar PDF do README via GitHub Actions
- 🧾 Logs centralizados em `logs/monitor.log`

---

## 🖼️ Capa Animada

> Suba um GIF na pasta `assets/monitor-cover.gif` e ele aparece aqui.

<p align="center">
  <img src="assets/monitor-cover.gif" alt="Monitoramento Node – Raquel" style="border-radius:12px" />
</p>

---

## 🎖️ Badges

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-20.x-6f00ff?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Monitoramento-HTTP%20%7C%20Ping%20%7C%20Portas-6f00ff?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Logs-JSON%20%2B%20Arquivo-blue?style=for-the-badge&logo=logstash" />
  <img src="https://img.shields.io/badge/Made%20with-%F0%9F%92%9C%20by%20Raquel-6f00ff?style=for-the-badge" />
</p>

---

## 🧩 Estrutura do Projeto

```bash
monitoramento-node-Raquel/
│
├── logs/
│   ├── monitor.log          # logs gerais (monitor principal + extras)
│   └── latency.json         # histórico de latência (gerado pelo latencyMonitor)
│
├── src/
│   ├── checks/              # (seu código atual de checagens)
│   │   ├── apiCheck.js
│   │   ├── pingCheck.js
│   │   └── portCheck.js
│   ├── config.js            # config dos alvos monitorados
│   ├── logger.js            # logger principal (já existente)
│   ├── monitor.js           # SEU monitor principal atual
│   ├── latencyMonitor.js    # NOVO – histórico de latência (JSON)
│   ├── extraMonitors.js     # NOVO – CPU, RAM e múltiplas portas
│   └── dashboard/
│       ├── server.js        # NOVO – servidor Express do dashboard
│       └── public/
│           └── index.html   # NOVO – front do dashboard (Chart.js)
│
├── .github/
│   └── workflows/
│       ├── monitor.yml      # seu workflow de monitoramento (se já tiver)
│       └── pdf-readme.yml   # NOVO – gerar PDF do README
│
├── assets/
│   ├── monitor-cover.gif    # GIF animado da capa (opcional)
│   └── prints/              # prints da execução, logs, dashboard
│
├── package.json
└── README.md
⚙️ Como Rodar Localmente
1. Instalar dependências
npm install

2. Rodar o monitor principal
node src/monitor.js


Logs em:
logs/monitor.log

3. Rodar o monitor de latência (histórico JSON)
node src/latencyMonitor.js


Gera/atualiza:
logs/latency.json

4. Ver CPU, RAM e múltiplas portas
node src/extraMonitors.js


Também escreve em logs/monitor.log.

🌐 Dashboard Web de Latência

Gera alguns dados de latência:

node src/latencyMonitor.js


Sobe o dashboard:

node src/dashboard/server.js


Abre no navegador:

http://localhost:4000


Você verá:

Gráfico de linha com latência do Google DNS

Status do dashboard (“sem dados”, “online”, etc)

Layout escuro, profissional, assinado por você 😎

📊 Gráfico de Latência

O gráfico usa:

Fonte de dados: logs/latency.json

Renderização: Chart.js via CDN

Métrica: latencyMs para o alvo Google DNS (8.8.8.8)

A cada execução de:

node src/latencyMonitor.js


Novos pontos são adicionados e o gráfico fica mais rico.

👩‍💻 Autoria

Criado com 💜 por Raquel G. de Souza
GitHub: rakellkizz
LinkedIn: linkedin.com/in/raquel-g-de-souza/
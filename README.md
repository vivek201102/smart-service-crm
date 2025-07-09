<!-- PROJECT LOGO -->
<p align="center">
  <img src="https://placehold.co/600x120?text=Smart+Service+CRM" alt="Smart Service CRM Logo" width="60%"/>
</p>

<h1 align="center">🛠️ Smart Service CRM</h1>

<p align="center">
  <b>AI-powered CRM platform for small businesses</b><br/>
  <i>Manage customer service requests, bookings, payments, and automation with ease.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-Next.js-blue?logo=nextdotjs"/>
  <img src="https://img.shields.io/badge/Backend-Express-green?logo=express"/>
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql"/>
  <img src="https://img.shields.io/badge/Status-Alpha-orange"/>
  <img src="https://img.shields.io/badge/License-MIT-lightgrey"/>
</p>

---

## ✨ Features

- 📅 Service request & booking management
- 💳 Payments integration (coming soon)
- 🤖 AI-powered automation (planned)
- 🔐 JWT/NextAuth authentication (planned)
- 📊 Dashboard & analytics (planned)
- 🛠️ Built with TypeScript, Next.js, Express, and PostgreSQL

---

## 🧩 Monorepo Structure

```text
smart-service-crm/
├── frontend/   # Next.js app (UI)
├── backend/    # Express API (server)
├── shared/     # Shared types & utilities
└── README.md
```

---

## 📦 Tech Stack

| Layer        | Tech                                      |
|--------------|-------------------------------------------|
| Frontend     | Next.js (React, TypeScript, Tailwind CSS) |
| Backend      | Node.js (Express, TypeScript)             |
| Database     | PostgreSQL (Prisma – coming soon)         |
| Auth         | JWT / NextAuth (planned)                  |
| AI Features  | OpenAI, LangChain (planned)               |
| Deployment   | Docker, Nginx, GitHub Actions             |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vivek201102/smart-service-crm.git
cd smart-service-crm
```

### 2. Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# (Optional) Root
cd ..
npm install
```

### 3. Run the Apps

```bash
# In separate terminals:
cd backend && npm run dev   # API: http://localhost:5000
cd frontend && npm run dev  # UI:  http://localhost:3000
```

---

## 🩺 API & UI Health Check

- **API:** [http://localhost:5000/api/health](http://localhost:5000/api/health)
- **UI:**  [http://localhost:3000](http://localhost:3000)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br/>
Feel free to check the [issues page](https://github.com/your-username/smart-service-crm/issues).

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

<p align="center">
  <sub>Made with ❤️ by vivek201102 • Powered by Next.js, Express, and OpenAI</sub>
</p>

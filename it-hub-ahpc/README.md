# IT HUB AHPC 🔷
> The epicenter of technology, startups, and innovation in the Aktobe region.

![IT HUB AHPC](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Tech Stack](https://img.shields.io/badge/Stack-React%2018%20|%20Node.js%20|%20Prisma-black)

## 📖 Project Overview
Inspired by STATION F, **IT HUB AHPC** is a full-stack platform built for the first IT campus in Aktobe, created in partnership with Aktobe Higher Polytechnic College (AHPC). The platform serves as a digital gateway to physical coworking spaces, startup accelerators, and educational bootcamps.

## ✨ Key Features
- **Zero-Latency i18n (Internationalization):** Seamlessly switch between Kazakh (KZ), Russian (RU), and English (EN) using a highly optimized, context-driven in-memory dictionary.
- **Dynamic Program Filtering:** Interactive, animated layout transitions (via Framer Motion) to filter courses, events, and startup initiatives.
- **Lead Generation System:** RESTful API integrations for newsletter signups and contact forms, backed by Node.js and SQLite.
- **Admin Dashboard:** A real-time data table preview (`/admin-preview`) to monitor incoming applications and contact requests.
- **Futuristic "Tech Campus" UI:** A dark-mode first design utilizing Glassmorphism, animated CSS mesh gradients, and intersection-observer scroll effects.

## 🛠 Tech Stack
### Frontend
- **React 18** (Vite Build Tool)
- **Tailwind CSS v4** (Utility-first styling)
- **Framer Motion** (Declarative animations & layout transitions)
- **React Router Dom v7** (Client-side routing)
- **Lucide React** (Iconography)

### Backend
- **Node.js & Express** (REST API)
- **Prisma ORM** (Database abstraction & migrations)
- **SQLite** (Development database)

---

## 🚀 Installation & Setup Guide

### Prerequisites
- Node.js (v18+)
- npm or yarn

### 1. Clone & Install Dependencies
First, install the frontend dependencies:
```bash
cd it-hub-ahpc
npm install
```

Then, install the backend dependencies:
```bash
cd server
npm install
```

### 2. Environment Configuration
In the `/server` directory, create a `.env` file based on the example:
```bash
cp .env.example .env
```
*(Ensure `DATABASE_URL="file:./dev.db"` is set)*

### 3. Database Initialization & Seeding
Run the following commands inside the `/server` directory to set up the SQLite database and populate it with initial program data:
```bash
npx prisma db push
npx prisma generate
npx prisma db seed
```

### 4. Running the Application
You will need two terminal windows to run both ends concurrently.

**Terminal 1 (Backend):**
```bash
cd server
node server.js
```
*Runs on http://localhost:3001*

**Terminal 2 (Frontend):**
```bash
# From the root it-hub-ahpc directory
npm run dev
```
*Runs on http://localhost:5173*

---

## 📂 Architecture Overview

### Directory Structure
```text
/it-hub-ahpc
├── /public             # Static assets
├── /server             # Node.js backend
│   ├── /prisma         # Prisma schema and SQLite database
│   ├── server.js       # Express application and API routes
│   └── package.json    
├── /src
│   ├── /components     # Reusable UI components (Navbar, Footer, Counters)
│   ├── /context        # Global React Context (LanguageProvider)
│   ├── /pages          # Route-level components (Home, Programs, Contact)
│   ├── /translations   # i18n JSON dictionaries (KZ, RU, EN)
│   ├── App.jsx         # App router and layout wrapper
│   └── main.jsx        # React entry point
└── tailwind.config.js  # Theme and brand color definitions
```

### i18n Implementation
Instead of relying on heavy third-party libraries, internationalization is handled via the custom `LanguageContext.jsx`. The entire translations dictionary is loaded into memory, and the `t('key.path')` function traverses the object. When the language state updates, React efficiently re-renders only the text nodes, resulting in zero network latency during language switches.

---
*Developed for the IT HUB AHPC Diploma Project Defense.*

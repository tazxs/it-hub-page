# IT HUB AHPC | Diploma Project

Official technical documentation for the IT HUB AHPC platform — an innovation epicenter and startup campus in the Aktobe region.

## 🚀 Concept
**IT HUB AHPC** is a modern technological ecosystem based at the Aktobe Higher Polytechnic College. The platform is designed to unite developers, entrepreneurs, and students, providing them with infrastructure for growth.
- **Inspired by:** STATION F (Paris) and ASTANA HUB (Astana).
- **Core Mission:** Developing the tech potential of Western Kazakhstan through education, acceleration, and community building.

## 🏗️ Architecture
The application follows a modern decoupled architecture:
- **Frontend:** Single Page Application (SPA) built with React.
- **Backend:** RESTful API server built with Node.js and Express.
- **Database:** Relational data storage using SQLite (via Prisma ORM) for portability and ease of defense.
- **Internationalization (i18n):** Custom context-based system supporting Kazakh (KZ), Russian (RU), and English (EN) at both the UI and SEO metadata levels.

## 🛠️ Tech Stack
- **Frontend:** React 18+, Tailwind CSS 4, Framer Motion (Animations), Lucide React (Icons).
- **Backend:** Node.js, Express.js.
- **Database:** Prisma ORM, SQLite.
- **Tooling:** Vite, ESLint, PostCSS.

## 📦 Setup & Deployment

Follow these commands line-by-line to get the project running locally:

### 1. Repository Setup
```bash
git clone <repository-url>
cd diplom/it-hub-ahpc
```

### 2. Backend Setup
```bash
cd server
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

### 3. Frontend Setup (In a new terminal)
```bash
cd it-hub-ahpc
npm install
npm run dev
```

### 4. Production Build
To create a production-ready package where the server serves the frontend:
```bash
# In frontend directory
npm run build

# Start the unified server
cd server
npm start
```
The application will be available at `http://localhost:3001`.

## 📄 Form Validation & SEO
- **SEO:** Fully optimized `index.html` with multi-language meta tags.
- **Validation:** Robust client-side validation for contact forms with localized error messaging (`required`, `email format`, `min-length`).

---
**Developed in Aktobe, 2026**
*Diploma project for IT HUB AHPC initiative.*

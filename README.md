# Video-Calling-Realtime-Chat-App 🌍💬

A production-ready **language exchange platform** with real-time chat and video calling, built for people who want to practice a new language with native speakers around the world.

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![React](https://img.shields.io/badge/React-Vite-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![Stream](https://img.shields.io/badge/Stream-Chat%20%26%20Video-orange)

## ✨ Features

- 🔐 **Authentication** — Signup/Login/Logout with JWT stored in HTTP-only cookies
- 🧑‍🤝‍🧑 **Friend system** — send, accept, and manage friend requests
- 💬 **Real-time chat** — powered by [Stream Chat](https://getstream.io/), with:
  - Reactions
  - Threads
  - Typing indicators
  - Image sharing
  - Read receipts
- 📹 **Video calling** — powered by [Stream Video](https://getstream.io/video/), with:
  - 1-on-1 and group calls
  - Screen sharing
  - Call recording
  - In-call reactions
- 🌐 **Onboarding flow** — users set their bio, native language, learning language, and location
- 🎨 **32 UI themes** via [daisyUI](https://daisyui.com/) — user's choice is saved and persisted
- ⚡ **TanStack Query (React Query)** for data fetching, caching, and mutations
- 🍪 **Protected routes** based on authentication + onboarding status

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS + daisyUI
- React Router
- TanStack Query (React Query)
- Axios
- Zustand (theme state)
- Stream Chat React SDK
- Stream Video React SDK
- React Hot Toast
- Lucide React (icons)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT) for auth
- bcryptjs for password hashing
- Stream Chat & Video server SDK
- cookie-parser, cors, dotenv

## 📂 Project Structure

```
streamify/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handler logic
│   │   ├── middleware/      # Auth protection middleware
│   │   ├── models/          # Mongoose schemas (User, FriendRequest)
│   │   ├── routes/          # Express routers (auth, user, chat)
│   │   ├── lib/             # DB connection, Stream config
│   │   └── server.js        # App entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages
│   │   ├── hooks/           # Custom React Query hooks
│   │   ├── store/           # Zustand stores
│   │   ├── constants/       # Languages, themes
│   │   ├── lib/             # Axios instance, API calls, utils
│   │   └── App.jsx
│   └── package.json
└── package.json              # Root build/deploy scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A [MongoDB Atlas](https://www.mongodb.com/) account (free tier works)
- A [GetStream.io](https://getstream.io/) account (free tier works)

### 1. Clone the repo
```bash
git clone [https://github.com/P-KAVYASRI/Video-Calling-Realtime-Chat-App]
cd streamify
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_random_secret_key
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/`:
```env
VITE_STREAM_API_KEY=your_stream_api_key
```

Run the frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (frontend) and the API at `http://localhost:5001` (backend).

## 📦 Building & Running for Production

From the **project root**, install root dependencies and run:
```bash
npm run build   # installs backend + frontend deps and builds the frontend
npm start       # serves the built React app + API from the same port
```

In production, the Express server serves the built frontend (`frontend/dist`) as static assets and handles all `/api/*` routes.

## ☁️ Deployment

This project is set up to deploy easily on [Render](https://render.com/) (or any Node hosting platform):

- **Build Command:** `npm run build`
- **Start Command:** `npm run start`
- Add all backend `.env` variables (plus `VITE_STREAM_API_KEY`) as environment variables in your hosting dashboard.

## 🗺️ Roadmap / Ideas for Extension

- [ ] Dedicated "Friends" page
- [ ] Reject friend request flow
- [ ] Password reset / forgot password emails
- [ ] User profile editing beyond onboarding
- [ ] Push notifications

## 🙏 Acknowledgements

- [Stream](https://getstream.io/) for chat & video infrastructure
- [daisyUI](https://daisyui.com/) for UI components and themes
- [TanStack Query](https://tanstack.com/query) for data fetching

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# 📊 React Market Dashboard — Live Coding Exercise

Welcome to the **Tradias Frontend Live Coding Exercise**!  
This is a lightweight, pre-configured React + Vite + TypeScript + Tailwind CSS project to help you focus on solving a real-world challenge, not boilerplate.

---

## 🚀 Overview

In this exercise, you'll build a **real-time market dashboard** using data from a WebSocket feed.  
The goal is not perfection — we care more about how you think, structure, and communicate while coding.

---

## 🛠️ Tech Stack

- ⚛️ React 18 (functional components + hooks)
- ⚡ Vite (blazing fast dev server)
- 💨 Tailwind CSS (pre-configured)
- 🧠 TypeScript
- 🧪 (Optional) Jest & Testing Library

---

## 🧪 Exercise Summary

### 🧵 WebSocket Format

You’ll consume real-time messages like:

```json
{
  "type": "market",
  "symbol": "BTC",
  "price": 42150.34,
  "change24h": -3.12,
  "volume24h": 843920,
  "ts": 1695492812345
}
```

🛰️ WebSocket URL:
```
wss://ws-mock-server-1.onrender.com
```

---

## 🎯 Tasks

| #  | Feature                     | Description |
|----|-----------------------------|-------------|
| 1  | Connect to WebSocket        | Connect, log data |
| 2  | Table of live data          | Render: symbol, price, change %, volume, timestamp |
| 3  | Filter by symbol            | Dropdown to filter rows (e.g., BTC only) |
| 4  | Pause/resume stream         | Button to pause/resume updates |
| 5  | Keep last 10 updates        | Store a limited history per symbol |
| 6  | Show aggregates (bonus)     | Display average price per symbol |

---

## 📦 Getting Started

Clone this repo and run:

```bash
npm install
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Folder Structure

```
.
├── public/             # Static files
├── src/
│   ├── App.tsx         # Entry component
│   ├── index.css       # Tailwind + global styles
│   └── main.tsx        # React root
├── .gitignore
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 😎 Final Notes

- Don’t stress about completeness — we’ll pair and collaborate.
- Focus on clean structure, reasoning, and readability.
- Bonus points for `useReducer`, `useMemo`, or custom hooks.

---

> Made with 💙 by the Tradias frontend team

# Harunya Yogeswaran — Portfolio Website

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 How to Host on GitHub Pages

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v18+)
- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com) account

---

### Step 1 — Install dependencies

```bash
npm install
```

---

### Step 2 — Install gh-pages package

```bash
npm install --save-dev gh-pages
```

---

### Step 3 — Update `vite.config.ts`

Add the `base` option with your GitHub repo name:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',   // ← replace with your actual repo name
})
```

> Example: if your repo URL is `https://github.com/Harunyayogeswaran/portfolio`, set `base: '/portfolio/'`

---

### Step 4 — Add deploy scripts to `package.json`

Open `package.json` and add these two lines inside `"scripts"`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Your scripts section should look like:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

### Step 5 — Create a GitHub repository

1. Go to [github.com](https://github.com) and click **New repository**
2. Name it (e.g. `portfolio`)
3. Set it to **Public**
4. Do **not** add a README (you already have one)
5. Click **Create repository**

---

### Step 6 — Push your code to GitHub

In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Harunyayogeswaran/your-repo-name.git
git push -u origin main
```

> Replace `your-repo-name` with your actual repository name.

---

### Step 7 — Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to a `gh-pages` branch automatically.

---

### Step 8 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **gh-pages** and folder to **/ (root)**
5. Click **Save**

---

### ✅ Your site will be live at:

```
https://Harunyayogeswaran.github.io/your-repo-name/
```

It may take 1–2 minutes to go live after the first deploy.

---

### 🔄 Updating the site later

Whenever you make changes, just run:

```bash
npm run deploy
```

This rebuilds and redeploys automatically.

---

## 🛠️ Local Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173`

---

## 📦 Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

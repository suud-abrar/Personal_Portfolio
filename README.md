# Suud — Portfolio

A full-stack developer portfolio built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site into the `dist/` folder — plain HTML/CSS/JS,
ready to host anywhere.

## Deploy

**Vercel / Netlify (recommended, free, easiest):**
1. Push this folder to a GitHub repo.
2. Import the repo on [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
3. Build command: `npm run build` — Output directory: `dist`.
4. Deploy. Done — you get a live URL automatically.

**GitHub Pages:**
1. `npm run build`
2. Push the contents of `dist/` to a `gh-pages` branch (or use the
   `gh-pages` npm package to automate this).
3. Enable GitHub Pages on that branch in your repo settings.

## Before you publish

- [ ] Replace `YOUR_PHOTO_URL_HERE` in `src/App.jsx` (About section) with
      a real photo URL, or add an image file to `public/` and reference it
      as `/your-photo.jpg`.
- [ ] Replace every `your-username` placeholder GitHub link in
      `src/App.jsx` with your real repo URLs (7 projects total).
- [ ] Replace the placeholder live-demo URLs — including
      `your-netflix-clone-demo`, `your-apple-clone-demo`, and
      `your-chatgpt-clone-demo` — with your real deployed links.
- [ ] Update the `mailto:hello@example.com` link in the Contact section
      with your real email.
- [ ] The contact form currently only shows a confirmation message in the
      UI — it doesn't send real email. Wire it to a service like
      [Formspree](https://formspree.io) or a small backend endpoint if you
      want it to actually deliver messages.

## Tech stack

- React 18
- Vite 5
- lucide-react (icons)
- Plain CSS-in-JS (inline styles + a single `<style>` block) — no
  Tailwind/build-step CSS dependency

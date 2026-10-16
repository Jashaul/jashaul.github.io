# jashaul.github.io

Source for my personal portfolio site — a short intro, work experience, and projects.

**Live site:** [jashaul.vercel.app](https://jashaul.vercel.app/)

## Tech stack

- [Next.js 13](https://nextjs.org/) (App Router) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography`
- [Framer Motion](https://www.framer.com/motion/) for the sidebar nav animation
- [Vercel Analytics](https://vercel.com/analytics)

## Project structure

```
app/
  layout.tsx          Root layout, metadata, fonts
  page.tsx            Home page
  experience/page.tsx Experience page
  projects/page.tsx   Projects page
  error.tsx           Error boundary
  globals.css         Global styles
components/
  sidebar.tsx         Animated navigation
  icons.tsx           SVG icons
  analytics.tsx       Vercel Analytics wrapper
public/               Avatar, OG image, fonts, resume PDF, sitemap, robots.txt
```

## Getting started

Requires Node.js 16.8 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint with `eslint-config-next`   |

## Deployment

- **Vercel** — the live site at [jashaul.vercel.app](https://jashaul.vercel.app/) is deployed from this repo.
- **GitHub Pages** — [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) builds and statically exports the site on every push to `main`.

## Credits

Based on [Lee Robinson's Next.js portfolio template](https://vercel.com/templates/next.js/nextjs-portfolio).

## Feedback

Suggestions are welcome — open an issue or reach out on [LinkedIn](https://www.linkedin.com/in/jashaul-d).

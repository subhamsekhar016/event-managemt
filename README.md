# Eventra — Event Management Website

A modern, fully responsive event management website where users can explore upcoming events, view details, and register — built with **HTML5, CSS3 and vanilla JavaScript** (no frameworks, no build step).

> **Live demo:** `<add your Netlify / Vercel / GitHub Pages link here>`
> **Repository:** `<add your GitHub repo link here>`

## Features

**Core requirements**
- Hero section introducing the platform, with animated stats and a live "next event" card
- Featured events section and a full "Upcoming events" grid
- Event cards with image, name, date, venue and short description
- **Search** (name, venue, city, category), **category filters**, and **sorting** (date, price, name)
- Event detail modal with agenda, venue, price and seat availability
- Registration form collecting **name, email, phone and selected event** (plus ticket count)
- **JavaScript validation** with inline error messages, and a confirmation screen with a booking ID
- Responsive on mobile, tablet and desktop (CSS Grid, Flexbox, hamburger menu on small screens)

**Bonus challenges (all implemented)**
- 🌗 Dark / light mode (remembers your choice, respects system preference)
- ⏳ Live countdown timers (hero card and event detail)
- ✨ Animations: scroll reveal, card hover, animated counters, floating background, success bounce
- 💾 **Local Storage** registration management: view and cancel registrations, seat counts update live

**Extras**
- Duplicate registration protection (same email + same event)
- Accessibility: skip link, ARIA labels, focus trap in modal, Esc to close, `prefers-reduced-motion` support
- Graceful image fallback (gradient + emoji if an image fails to load)

## Validation rules

| Field | Rule |
|-------|------|
| Name | Required, min 2 characters, letters/spaces/`. ' -` only |
| Email | Required, valid format (`name@example.com`) |
| Phone | Required, valid Indian mobile: 10 digits starting 6–9 (optional `+91` or `0` prefix) |
| Event | Required, must be a valid event with seats available |
| Terms | Must be accepted |

Errors appear on blur and update as the user types; on submit, focus moves to the first invalid field.

## Project structure

```
eventra/
├── index.html   # Page structure, modal, drawer
├── styles.css   # Design tokens, layout, themes, animations, responsive rules
├── app.js       # Event data, rendering, filters, countdowns, validation, Local Storage
└── README.md
```

## How it works

- **Data:** events live in an `EVENTS` array in `app.js`. To add an event, add an object with `id`, `title`, `category`, `date` (ISO), `venue`, `city`, `price`, `seats`, `desc`, `long`, `agenda`, `emoji`, `grad` and `img`. Categories and filters update automatically.
- **Rendering:** cards are generated from the data; search/filter/sort re-render the grid.
- **Registrations:** saved under the `eventra_regs` key in `localStorage`. Remaining seats = total − demo baseline − registered tickets.
- **Theming:** CSS custom properties switched via `data-theme` on `<html>`; saved in `eventra_theme`.
- **Security:** all dynamic text is HTML-escaped before insertion.

## Run locally

No installation needed. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy

**GitHub Pages:** push to GitHub → *Settings → Pages → Deploy from branch → `main` / root*.
**Netlify:** drag the folder onto app.netlify.com/drop, or connect the repo (no build command, publish directory `.`).
**Vercel:** import the repo; framework preset "Other"; no build command.

## Git workflow

```bash
git init
git add .
git commit -m "feat: initial Eventra event management site"
git branch -M main
git remote add origin https://github.com/<your-username>/eventra.git
git push -u origin main
```

Tip: commit in small steps (e.g. `feat: hero section`, `feat: filters`, `feat: validation`, `docs: README`) to show a clear history.

## Tech stack

HTML5 · CSS3 (Grid, Flexbox, custom properties) · JavaScript (ES6+) · Local Storage API · Intersection Observer API · Google Fonts (Sora, Inter) · Unsplash images

## Notes

Event data is sample data for demonstration. Registrations are stored only in the user's browser and are not sent to a server.

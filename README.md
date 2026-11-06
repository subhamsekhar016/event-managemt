# Eventra — Event Management Website

Eventra is a modern, fully responsive event management website where users can explore upcoming events, view detailed information, and register for the events they like. It is built with **HTML5, CSS3 and vanilla JavaScript** (no frameworks and no build step).

- **Live website:** https://eventra-events-subham.netlify.app
- **GitHub repository:** https://github.com/subhamsekhar016/eventra
- **Author:** Subham Sekhar Patra

## Features

### Core requirements
- **Hero section** introducing the platform, with animated statistics and a live "next event" card.
- **Featured events** section and a full **Upcoming events** grid.
- **Event cards** showing the image, name, date, time, venue and a short description.
- **Search** by name, venue, city or category.
- **Category filters** and **sorting** (soonest first, price, name).
- **Event details** window with description, agenda, venue, price and seat availability.
- **Registration form** collecting the participant's name, email, phone number and selected event (plus number of tickets).
- **JavaScript form validation** with inline error messages.
- **Confirmation message** with a booking ID after a successful registration.
- **Responsive design** for mobile phones, tablets and desktop screens.

### Bonus challenges
- **Dark / light mode** that remembers the user's choice and respects the system preference.
- **Countdown timers** in the hero section and on each event's detail view.
- **Animations**: scroll reveal, card hover effects, animated counters, floating background shapes and an animated success message.
- **Local Storage** registration management: users can view and cancel their registrations, and seat counts update automatically.

### Extras
- Duplicate registration protection (same email for the same event).
- Accessibility: skip link, ARIA labels, keyboard navigation, focus handling in dialogs, `Esc` to close, and support for reduced-motion settings.
- Image fallback: if an event image fails to load, a gradient and emoji are shown instead.

## Form validation rules

| Field | Rule |
|-------|------|
| Name | Required, at least 2 characters, letters, spaces and `. ' -` only |
| Email | Required, must be a valid email format (`name@example.com`) |
| Phone | Required, valid Indian mobile number: 10 digits starting with 6–9 (optional `+91` or `0` prefix) |
| Event | Required, must be a valid event with seats available |
| Terms | Must be accepted |

Errors are shown when a field loses focus and update as the user types. On submit, focus moves to the first invalid field.

## Project structure

```
eventra/
├── index.html   # Page structure, event dialog, registrations panel
├── styles.css   # Design tokens, layout, themes, animations, responsive rules
├── app.js       # Event data, rendering, filters, countdowns, validation, Local Storage
└── README.md
```

## Implementation details

- **Event data:** events are stored in an `EVENTS` array in `app.js`. Adding a new event object automatically updates the cards, categories and filters.
- **Rendering:** event cards are generated with JavaScript from the data. Search, category filter and sorting re-render the grid instantly.
- **Registration:** the form is validated in JavaScript before submission. Valid registrations are saved to the browser's Local Storage under the key `eventra_regs`.
- **Seat availability:** remaining seats are calculated from the event capacity, a sample baseline and the registrations stored on the device.
- **Countdown timers:** calculated from each event's date and refreshed every second.
- **Theming:** CSS custom properties are switched using a `data-theme` attribute on the `<html>` element, and the choice is saved in Local Storage.
- **Responsive layout:** CSS Grid and Flexbox with media queries at 900px, 760px and 520px; the navigation turns into a menu button on small screens.
- **Security:** all dynamic text is HTML-escaped before it is inserted into the page.

## Run locally

No installation is needed. Download or clone the repository and open `index.html` in a browser. To serve it from a local server instead:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The site is deployed on **Netlify** as a static site (no build command; publish directory is the project root). The source code is version-controlled with **Git** and hosted on **GitHub**.

## Tech stack

HTML5 · CSS3 (Grid, Flexbox, custom properties, media queries) · JavaScript (ES6+) · Local Storage API · Intersection Observer API · Google Fonts (Sora, Inter) · Unsplash images

## Notes

Event data is sample data for demonstration purposes. Registrations are stored only in the user's browser and are not sent to a server.

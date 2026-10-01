# Man and Woman: Duo Performance Site

The website for **Man and Woman**, a duo performance act featuring **iothesinger** and **Jean-Francis Varre**.

## Features

- **Animated hero** with a staged load-in and a mobile menu.
- **About, Tour, Video and Contact** pages, each with its own route under the Next.js App Router.
- **Booking contact form** handled by a server-side API route (`/api/contact`). The route uses Nodemailer and a Gmail App Password and can send to several recipients, so no credentials ever reach the browser.

## Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Per-page CSS + Tailwind CSS 4 |
| Email | Nodemailer (Gmail SMTP) |

## Project structure

```
src/
  app/                  routes: /, /about, /tour, /video, /contact
  app/api/contact/      route.ts, server-side email handler
  components/           ManAndWomanHero, AboutPage, TourPage, VideoPage, ContactPage
  styles/               hero, about, tour, video, contact CSS
```

## Running locally

```bash
npm install
npm run dev
```

Create `.env.local` (git-ignored):

```
GMAIL_USER=
GMAIL_APP_PASSWORD=
CONTACT_RECIPIENTS=     # optional, comma-separated
```

---
Designed and developed by **Ayodele Owolabi**, [AO Studio](https://github.com/ayodeleowolabi).

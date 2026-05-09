# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Layer website — fill in a brief description here.

## Stack

- **Framework:** Astro 6 (static site generation)
- **Hosting:** Vercel (auto-deploys on push to `main`)
- **CMS:** TBD — Sanity planned for non-technical admin editing
- **Booking:** MEWS (button embed to start; API integration P1)
- **Locales:** EN (base), JA

## Commands

```bash
npm run dev      # start dev server at localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview production build locally
```

## Architecture

`src/pages/` — file-based routing; each `.astro` file is a page.  
`src/components/` — shared UI components.  
`public/` — static assets served as-is (images, fonts, favicons).

Localization and Sanity CMS integration are not yet set up — placeholders to be added once the CMS is chosen.

## References

| Resource | URL |
|---|---|
| Spring content | https://docs.google.com/document/d/1e56JY-auIzVUng2hPTxb0--GqdBewYBE3-QGXpen3j8/edit?tab=t.0 |
| MEWS notes | https://docs.google.com/document/d/1tB3Ai05emHv6ptxJAvo5ST2WRthBcFfgQvJxkrTuLeg/edit?tab=t.0 |
| Atami photos | https://drive.google.com/drive/folders/1xu9_1D8Uv8Y_XmhMtkSMh6kZ7QkWPxCI |
| Ito photos | https://drive.google.com/drive/folders/1HCmPwKaVyw8bKktfMhRRGFt3JYUGaIIu |
| Atami-Ito-Izu photos | https://drive.google.com/drive/folders/1a0IO7GDZLeBwEeccErHaA-CSFx_r9JzI |
| Ito House photos | https://drive.google.com/drive/folders/1ZJa10ko7Fs_GSA5XO1dVVParg-zNT3-g |
| Brand book (Figma) | https://www.figma.com/file/DNp1sk5tMOX4Y1MrVDbHqA/The-Layer |

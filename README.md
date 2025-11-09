# Antiques Marketplace — **DIKO**

**Commercial demo project built for a real client**. DIKO is a production-grade, frontend-driven antiques marketplace and community platform developed by a small dedicated team (2 frontend developers + 1 designer). The app is frontend-only (no backend) — all functionality and the data “DB” are implemented on the client (local state / `localStorage`) so the product is fully interactive and demo-ready.

## Overview
A multi-section React application combining a full-featured marketplace, a collectors’ community hub, and an expertise/appraisal service. The UI is polished, highly interactive, and carefully crafted to work smoothly on desktops, tablets and phones.

## Key facts
- **Real commercial project** developed for an actual client by a small team.
- **Frontend-driven**: all features and persistent data live in the client (local state / `localStorage`).
- **Responsive everywhere**: desktop, tablets, and phones — consistent UX across devices.
- **High polish**: smooth animations, reveal-on-scroll, hover/active states, image zoom, and many high-performance sliders.

## Main sections & features
### Market
- Product catalog with images, categories, filters, sorting and search.
- Product detail pages and a fully working cart (add/remove items, quantities, totals).
- Cart and checkout flows simulated on the frontend.

### Collectors Club
- Hub with **3 sliders** linking to Exhibitions, Articles and Discussions.
- Read content, propose new exhibitions, and comment on discussions (comments stored in component state and persist until reload).
- Each slider item links to its detail page.

### Expertise
- Information about appraisal services: basic valuation and full expert analysis.
- Simulated order/booking flow for appraisal services.

### Account area
- Account icon opens a user area with subpages: **Account**, **Cart**, **Orders**, **Discussions**, **Settings**.
- All user-area UI flows are implemented and work with local data.

## UI & Interaction details
- **Sticky header** with hover-trigger behavior on desktop; responsive menu for tablets and phones.
- Route changes auto-scroll to top; many elements animate in for a modern feel.
- Multiple smooth sliders (react-slick) and image zoom/pan (react-zoom-pan-pinch).
- Smooth state/interaction animations across the site (hover, active, focus).

## Tech stack
- React.js (TypeScript) — React Context, `useState`, `useRef`, custom hooks  
- Redux Toolkit & RTK Query (selected flows)  
- React Router  
- react-i18next (English + Ukrainian)  
- react-slick (sliders)  
- react-zoom-pan-pinch (image zoom)  
- Vite (dev tooling)  
- HTML5, SCSS, JavaScript (ES6+)

## Internationalization & Currency
- UI in **English and Ukrainian** (switch in header/menu).
- Multi-currency support with local exchange rates (no paid real-time feed).

## How to run locally
1. Clone:
   ```bash
   git clone https://github.com/Valentyn-Radobenko/antiques-market-place
   cd antiques-market-place

2. Install:
   ```bash
   npm install 

3. Start dev server:
   ```bash
   npm run dev

4. Open the app in your browser:
   ```bash
   http://localhost:5173

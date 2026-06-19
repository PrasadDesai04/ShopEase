# ShopEase— React E-commerce Storefront

A premium fashion e-commerce storefront built with **React 18** and **Vite**. Features a fully interactive product catalogue with live search, multi-filter sorting, a slide-out cart, wishlist toggling, and scroll-reveal animations — all built using functional components and React Hooks.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

- 🛍️ **Product Catalogue** — Responsive grid with badges for New/Sale items
- 🔍 **Live Search** — Real-time filtering with keyword highlighting
- 🎛️ **Filter & Sort** — Filter by category, badge type, and price range; sort by price, name, or discount
- 🛒 **Shopping Cart** — Slide-out cart with quantity controls and live total calculation
- ❤️ **Wishlist Toggle** — Per-product wishlist state
- 🎬 **Scroll Animations** — Elements reveal on scroll using `IntersectionObserver`
- 🖱️ **Custom Cursor** — Animated cursor with hover states
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library |
| **Vite** | Build tool & dev server |
| **CSS3** | Custom styling (CSS variables, Grid, Flexbox, animations) |
| **Google Fonts** | Cormorant Garamond + DM Sans |

---

## 📁 Project Structure

```
luxe-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation, search & cart triggers
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── Marquee.jsx         # Scrolling announcement strip
│   │   ├── Categories.jsx      # Category browsing grid
│   │   ├── ProductsSection.jsx # Holds filter/sort state + renders grid
│   │   ├── FilterBar.jsx       # Category/badge/price/sort controls
│   │   ├── ResultsMeta.jsx     # Result count + active filter tags
│   │   ├── ProductCard.jsx     # Single product card (wishlist, add-to-cart)
│   │   ├── SearchOverlay.jsx   # Full-screen live search modal
│   │   ├── CartSidebar.jsx     # Slide-out cart drawer
│   │   ├── Banner.jsx          # Promotional banner section
│   │   ├── Features.jsx        # Shipping/returns/security feature strip
│   │   ├── Testimonials.jsx    # Customer review cards
│   │   ├── Newsletter.jsx      # Email signup form (controlled input)
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Toast.jsx           # Toast notification
│   │   └── CustomCursor.jsx    # Custom animated cursor
│   ├── hooks/
│   │   ├── useReveal.js        # Custom hook: scroll-reveal via IntersectionObserver
│   │   └── useCursor.js        # Custom hook: cursor position tracking
│   ├── data/
│   │   └── products.js         # Product catalogue, testimonials, search tags
│   ├── App.jsx                 # Root component — holds cart/search/UI state
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 React Concepts Used

This project was built to demonstrate practical use of core React concepts:

- **Functional Components** — every component is a function using Hooks
- **`useState`** — cart items, filters, search query, wishlist toggles, toast visibility
- **`useEffect`** — scroll listener, search auto-focus, Escape key listener, hover tracking (with cleanup functions for all of them)
- **`useMemo`** — avoids re-filtering/re-sorting the product list on every render
- **`useRef`** — DOM references for the search input and scroll-reveal targets
- **Custom Hooks** — `useReveal` (IntersectionObserver) and `useCursor` (mouse tracking)
- **Props & Lifting State Up** — cart and filter state live in parent components and are passed down
- **Controlled Components** — search input and newsletter email input
- **Conditional Rendering** — empty cart state, no-results state, active filter tags
- **List Rendering with Keys** — product grids, testimonials, cart items all keyed by unique IDs

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/luxe-react.git
cd luxe-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📌 Roadmap

- [ ] Connect to a Node.js/Express + MongoDB backend for real product data
- [ ] User authentication (login/signup)
- [ ] Persist cart to `localStorage` or backend
- [ ] Checkout flow with payment integration
- [ ] Product detail page with React Router

---

## 📄 License

This project is open source and available for learning purposes.

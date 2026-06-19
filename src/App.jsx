import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import ProductsSection from './components/ProductsSection';
import Banner from './components/Banner';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import CartSidebar from './components/CartSidebar';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';
import { useCursor } from './hooks/useCursor';
import { products } from './data/products';

export default function App() {
  // ── Cart state ──
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ── Search state ──
  const [searchOpen, setSearchOpen] = useState(false);

  // ── Navbar scroll state ──
  const [scrolled, setScrolled] = useState(false);

  // ── Toast state ──
  const [toast, setToast] = useState({ message: '', visible: false });
  const toastTimer = useRef(null);

  // ── Custom cursor ──
  const { pos, ringPos, hovering, setHovering } = useCursor();

  // Track scroll position to add/remove navbar 'scrolled' styling
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track hover on interactive elements for the custom cursor effect
  useEffect(() => {
    function onEnter() { setHovering(true); }
    function onLeave() { setHovering(false); }

    const selector = 'a, button, .cat-card, .search-result-card, .product-card';
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
    // Re-run after cart/search changes since new buttons can appear (cart items, search results)
  }, [cart, searchOpen, cartOpen, setHovering]);

  function showToast(message) {
    setToast({ message, visible: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2600);
  }

  function handleAddToCart(id) {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, qty: 1 }];
    });

    showToast(`"${product.name}" added to cart ✓`);
  }

  function handleChangeQty(idx, delta) {
    setCart((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], qty: updated[idx].qty + delta };
      return updated.filter((item) => item.qty > 0);
    });
  }

  function handleSelectSearchResult(id) {
    setSearchOpen(false);
    const card = document.querySelector(`[data-id="${id}"]`);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const el = document.querySelector(`[data-id="${id}"]`);
      if (!el) return;
      el.style.outline = '2px solid var(--gold)';
      el.style.outlineOffset = '4px';
      setTimeout(() => {
        el.style.outline = '';
        el.style.outlineOffset = '';
      }, 2200);
    }, 700);
  }

  function handleCategoryClick(categoryKey) {
    // Scroll to products; ProductsSection manages its own filter state internally,
    // so we scroll first and let the user refine from the filter bar.
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <CustomCursor pos={pos} ringPos={ringPos} hovering={hovering} />
      <Toast message={toast.message} visible={toast.visible} />

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        onSelectResult={handleSelectSearchResult}
      />

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onChangeQty={handleChangeQty}
      />

      <Navbar
        scrolled={scrolled}
        cartCount={cartCount}
        onOpenSearch={() => setSearchOpen(true)}
        onToggleCart={() => setCartOpen((open) => !open)}
      />

      <Hero />
      <Marquee />
      <Categories onCategoryClick={handleCategoryClick} />
      <ProductsSection products={products} onAddToCart={handleAddToCart} />
      <Banner onShopSale={() => {}} />
      <Features />
      <Testimonials />
      <Newsletter onSubscribe={(email) => showToast(`Subscribed with ${email} ✓`)} />
      <Footer />
    </>
  );
}

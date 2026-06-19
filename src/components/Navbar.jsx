export default function Navbar({ scrolled, cartCount, onOpenSearch, onToggleCart }) {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">ShopEase<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#categories">Collections</a></li>
        <li><a href="#products">New Arrivals</a></li>
        <li><a href="#banner">Sale</a></li>
        <li><a href="#testimonials">Reviews</a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-icon-btn" onClick={onOpenSearch}>🔍</button>
        <button className="nav-icon-btn" style={{ position: 'relative' }} onClick={onToggleCart}>
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        <button className="nav-icon-btn">👤</button>
      </div>
    </nav>
  );
}

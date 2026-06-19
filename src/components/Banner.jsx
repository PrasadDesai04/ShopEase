import { useReveal } from '../hooks/useReveal';

export default function Banner({ onShopSale }) {
  const revealRef = useReveal();

  return (
    <div id="banner">
      <div className="banner-section reveal" ref={revealRef}>
        <div className="banner-img">
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&auto=format&fit=crop&q=80" alt="Sale" />
        </div>
        <div className="banner-content">
          <div className="section-label">Limited Time</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Up to 40% Off <em>Select</em> Pieces</h2>
          <p className="banner-desc">
            A curated edit of our most-loved styles at exceptional prices. Once they're gone, they're gone.
          </p>
          <a href="#products" className="btn-gold" onClick={onShopSale}>Shop the Sale</a>
        </div>
      </div>
    </div>
  );
}

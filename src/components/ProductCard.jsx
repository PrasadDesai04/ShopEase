import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function ProductCard({ product, index, onAddToCart }) {
  const [wishlisted, setWishlisted] = useState(false);
  const revealRef = useReveal();

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  function handleWishlistClick(e) {
    e.stopPropagation();
    setWishlisted((prev) => !prev);
  }

  return (
    <div
      className="product-card reveal"
      ref={revealRef}
      style={{ transitionDelay: `${index * 0.07}s` }}
      data-id={product.id}
    >
      <div className="product-img-wrap">
        <img src={product.img} alt={product.name} loading="lazy" />
        <span className={`product-badge ${product.badge}`}>
          {product.badge === 'sale' ? (discount ? `-${discount}%` : 'Sale') : 'New'}
        </span>
        <div className="product-actions">
          <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
          <button
            className="wishlist-btn"
            onClick={handleWishlistClick}
            style={{ color: wishlisted ? 'var(--gold)' : '' }}
          >
            {wishlisted ? '♥' : '♡'}
          </button>
        </div>
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-sub">{product.sub}</div>
      <div className="product-price">
        <span className="price-current">₹{product.price.toLocaleString('en-IN')}</span>
        {product.oldPrice && (
          <span className="price-old">₹{product.oldPrice.toLocaleString('en-IN')}</span>
        )}
      </div>
      <div className="stars">{product.stars}</div>
    </div>
  );
}

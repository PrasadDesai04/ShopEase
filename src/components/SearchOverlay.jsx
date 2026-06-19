import { useState, useEffect, useRef } from 'react';
import { searchSuggestions } from '../data/products';

export default function SearchOverlay({ isOpen, onClose, products, onSelectResult }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Focus the input shortly after the overlay opens (mirrors the original UX)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const q = query.trim().toLowerCase();
  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.sub.toLowerCase().includes(q) ||
          p.badge.toLowerCase().includes(q)
      )
    : [];

  function highlight(text) {
    if (!q) return text;
    const parts = text.split(new RegExp(`(${q})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === q ? <span key={i} style={{ color: 'var(--gold)' }}>{part}</span> : part
    );
  }

  return (
    <div className={`search-overlay ${isOpen ? 'open' : ''}`}>
      <button className="search-close-btn" onClick={onClose}>✕</button>
      <div className="search-box-wrap">
        <span className="search-label">Search our collection</span>
        <div className="search-input-row">
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="What are you looking for?"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-clear" onClick={() => setQuery('')}>✕</button>
        </div>
        <div className="search-tags">
          {searchSuggestions.map((s) => (
            <button key={s} className="search-tag" onClick={() => setQuery(s)}>{s}</button>
          ))}
        </div>
      </div>

      {q && (
        <div className="search-results-wrap">
          <div className="search-results-label">
            {results.length
              ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
              : `No results for "${query}"`}
          </div>
          <div className="search-results-grid">
            {results.length === 0 ? (
              <div className="search-no-result">Try a different keyword — like "dress", "bag", or "men".</div>
            ) : (
              results.map((p) => (
                <div className="search-result-card" key={p.id} onClick={() => onSelectResult(p.id)}>
                  <img className="search-result-img" src={p.img} alt={p.name} />
                  <div>
                    <div className="search-result-name">{highlight(p.name)}</div>
                    <div className="search-result-price">₹{p.price.toLocaleString('en-IN')}</div>
                    <div className="search-result-badge">{p.category} · {p.badge}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

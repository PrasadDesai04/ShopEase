export default function FilterBar({ filters, setFilters, sort, setSort }) {
  function handlePriceChange(e) {
    setFilters((prev) => ({ ...prev, maxPrice: parseInt(e.target.value) }));
  }

  const pricePct = ((filters.maxPrice - 999) / (15000 - 999)) * 100;

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">Category</span>
        {['all', 'women', 'men', 'accessories'].map((val) => (
          <button
            key={val}
            className={`filter-chip ${filters.category === val ? 'active' : ''}`}
            onClick={() => setFilters((prev) => ({ ...prev, category: val }))}
          >
            {val === 'all' ? 'All' : val.charAt(0).toUpperCase() + val.slice(1)}
          </button>
        ))}
      </div>

      <div className="filter-divider"></div>

      <div className="filter-group">
        <span className="filter-label">Type</span>
        {[
          { val: 'all', label: 'All' },
          { val: 'new', label: 'New' },
          { val: 'sale', label: 'On Sale' },
        ].map((opt) => (
          <button
            key={opt.val}
            className={`filter-chip ${filters.badge === opt.val ? 'active' : ''}`}
            onClick={() => setFilters((prev) => ({ ...prev, badge: opt.val }))}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="filter-divider"></div>

      <div className="filter-group price-range-wrap">
        <span className="filter-label">Max Price</span>
        <input
          className="price-slider"
          type="range"
          min="999"
          max="15000"
          step="500"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          style={{ background: `linear-gradient(to right, var(--gold) 0%, var(--gold) ${pricePct}%, var(--border) ${pricePct}%)` }}
        />
        <span className="price-val">₹{filters.maxPrice.toLocaleString('en-IN')}</span>
      </div>

      <div className="filter-divider"></div>

      <div className="filter-group">
        <span className="filter-label">Sort</span>
        <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name-asc">Name: A–Z</option>
          <option value="discount">Biggest Discount</option>
        </select>
      </div>
    </div>
  );
}

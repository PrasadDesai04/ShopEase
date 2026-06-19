export default function ResultsMeta({ filters, setFilters, sort, setSort, count }) {
  const tags = [];
  if (filters.category !== 'all') tags.push({ label: `Category: ${filters.category}`, key: 'category' });
  if (filters.badge !== 'all') tags.push({ label: `Type: ${filters.badge}`, key: 'badge' });
  if (filters.maxPrice < 15000) tags.push({ label: `Under ₹${filters.maxPrice.toLocaleString('en-IN')}`, key: 'maxPrice' });

  function removeFilter(key) {
    if (key === 'maxPrice') {
      setFilters((prev) => ({ ...prev, maxPrice: 15000 }));
    } else {
      setFilters((prev) => ({ ...prev, [key]: 'all' }));
    }
  }

  function clearAll() {
    setFilters({ category: 'all', badge: 'all', maxPrice: 15000 });
    setSort('default');
  }

  return (
    <div className="results-meta">
      <div className="results-count">
        <strong>{count}</strong> product{count !== 1 ? 's' : ''} found
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div className="active-filters">
          {tags.map((t) => (
            <div className="active-filter-tag" key={t.key}>
              {t.label} <button onClick={() => removeFilter(t.key)}>✕</button>
            </div>
          ))}
        </div>
        {tags.length > 0 && (
          <button className="clear-all-btn" onClick={clearAll}>Clear All</button>
        )}
      </div>
    </div>
  );
}

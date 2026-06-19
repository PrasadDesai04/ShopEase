import { useState, useMemo } from 'react';
import FilterBar from './FilterBar';
import ResultsMeta from './ResultsMeta';
import ProductCard from './ProductCard';

export default function ProductsSection({ products, onAddToCart }) {
  const [filters, setFilters] = useState({ category: 'all', badge: 'all', maxPrice: 15000 });
  const [sort, setSort] = useState('default');

  // Recompute the visible list only when products, filters, or sort change
  const filteredProducts = useMemo(() => {
    let list = products.filter(
      (p) =>
        (filters.category === 'all' || p.category === filters.category) &&
        (filters.badge === 'all' || p.badge === filters.badge) &&
        p.price <= filters.maxPrice
    );

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'discount')
      list = [...list].sort((a, b) => {
        const da = a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0;
        const db = b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0;
        return db - da;
      });

    return list;
  }, [products, filters, sort]);

  function clearAllFilters() {
    setFilters({ category: 'all', badge: 'all', maxPrice: 15000 });
    setSort('default');
  }

  return (
    <section className="section products-section" id="products">
      <div className="section-header">
        <div>
          <div className="section-label">Hand-Picked For You</div>
          <h2 className="section-title">New <em>Arrivals</em></h2>
        </div>
        <a href="#" className="view-all-link">View All</a>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />

      <ResultsMeta
        filters={filters}
        setFilters={setFilters}
        sort={sort}
        setSort={setSort}
        count={filteredProducts.length}
      />

      <div className="products-grid">
        {filteredProducts.length === 0 ? (
          <div className="no-results show">
            <div className="no-results-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your filters or browse a different category.</p>
            <button onClick={clearAllFilters}>Clear All Filters</button>
          </div>
        ) : (
          filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} onAddToCart={onAddToCart} />
          ))
        )}
      </div>
    </section>
  );
}

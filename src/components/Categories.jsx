import { useReveal } from '../hooks/useReveal';

const categories = [
  { key: 'women', name: 'Women', count: '148 Products', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80' },
  { key: 'men', name: 'Men', count: '96 Products', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80' },
  { key: 'accessories', name: 'Accessories', count: '64 Products', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80' },
];

export default function Categories({ onCategoryClick }) {
  const revealRef = useReveal();

  return (
    <section className="section" id="categories">
      <div className="section-header">
        <div>
          <div className="section-label">Browse by Category</div>
          <h2 className="section-title">Shop Our <em>Collections</em></h2>
        </div>
        <a href="#" className="view-all-link">View All</a>
      </div>
      <div className="categories-grid reveal" ref={revealRef}>
        {categories.map((cat) => (
          <div className="cat-card" key={cat.key} onClick={() => onCategoryClick(cat.key)}>
            <img src={cat.img} alt={cat.name} />
            <div className="cat-card-overlay"></div>
            <div className="cat-card-content">
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{cat.count}</div>
            </div>
            <div className="cat-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

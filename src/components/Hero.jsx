export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">New Collection 2026</div>
        <h1 className="hero-title">Wear What<br />You <em>Truly</em><br />Deserve</h1>
        <p className="hero-desc">
          Handcrafted luxury for those who appreciate the quiet elegance of exceptional quality. Every piece tells a story.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">Shop Now</a>
          <a href="#categories" className="btn-outline">Explore</a>
        </div>
      </div>
      <div className="hero-image-panel">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80" alt="Hero" />
        <div className="hero-float-card">
          <div className="label">This Season</div>
          <div className="value">240+</div>
          <div className="sub">New Arrivals Added</div>
        </div>
      </div>
    </section>
  );
}

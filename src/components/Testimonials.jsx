import { useReveal } from '../hooks/useReveal';
import { testimonials } from '../data/products';

export default function Testimonials() {
  const revealRef = useReveal();

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-header">
        <div>
          <div className="section-label">What Our Clients Say</div>
          <h2 className="section-title">Loved by <em>Thousands</em></h2>
        </div>
      </div>
      <div className="testimonials-grid reveal" ref={revealRef}>
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-title">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

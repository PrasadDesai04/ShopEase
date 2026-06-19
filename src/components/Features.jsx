import { useReveal } from '../hooks/useReveal';

const features = [
  { icon: '🚚', title: 'Free Shipping', desc: 'Complimentary shipping on all orders above ₹2,999. Delivered in 3–5 business days.' },
  { icon: '↩', title: '30-Day Returns', desc: "Not satisfied? Return or exchange within 30 days of delivery, no questions asked." },
  { icon: '🔒', title: 'Secure Checkout', desc: 'SSL-encrypted payments and trusted gateways for a completely safe shopping experience.' },
  { icon: '💎', title: 'Premium Quality', desc: 'Every item is carefully sourced and quality-checked before it reaches your doorstep.' },
];

export default function Features() {
  const revealRef = useReveal();

  return (
    <div className="features-section reveal" ref={revealRef} style={{ margin: '80px 60px 0' }}>
      {features.map((f) => (
        <div className="feature-item" key={f.title}>
          <div className="feature-icon">{f.icon}</div>
          <div className="feature-title">{f.title}</div>
          <p className="feature-desc">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

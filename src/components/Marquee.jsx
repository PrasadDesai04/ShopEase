const marqueeText = [
  'New Collection 2026', '·', 'Free Shipping Over ₹2999', '·',
  'Handcrafted Luxury', '·', '30-Day Returns', '·', 'Premium Quality', '·',
];

export default function Marquee() {
  const items = [...marqueeText, ...marqueeText];
  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {items.map((t, i) => (
          <span key={i} className={t === '·' ? 'dot' : ''}>{t}</span>
        ))}
      </div>
    </div>
  );
}

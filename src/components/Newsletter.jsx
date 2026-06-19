import { useState } from 'react';

export default function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (!email.trim()) return;
    onSubscribe(email);
    setEmail('');
  }

  return (
    <section className="newsletter-section">
      <div>
        <h2 className="newsletter-title">Stay <em>Ahead</em> of the Season</h2>
        <p className="newsletter-desc">
          Subscribe for early access to new collections, exclusive offers, and curated style guides delivered to your inbox.
        </p>
      </div>
      <div>
        <div className="newsletter-form">
          <div className="input-row">
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-submit" onClick={handleSubmit}>Subscribe</button>
          </div>
          <p>By subscribing you agree to our Privacy Policy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}

export default function CartSidebar({ isOpen, onClose, cart, onChangeQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart <span>({count})</span></h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', color: 'var(--muted)', fontSize: '14px' }}>
              Your cart is empty
            </div>
          ) : (
            cart.map((item, idx) => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-variant">Size: M · Color: Default</div>
                  <div className="cart-item-bottom">
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => onChangeQty(idx, -1)}>−</button>
                      <span className="qty-val">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onChangeQty(idx, 1)}>+</button>
                    </div>
                    <span className="cart-item-price">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="continue-btn" onClick={onClose}>Continue Shopping</button>
        </div>
      </div>
    </>
  );
}

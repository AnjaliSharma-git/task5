import React from "react";

function CartModal({ cart, closeModal, removeFromCart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="modal-product">
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;

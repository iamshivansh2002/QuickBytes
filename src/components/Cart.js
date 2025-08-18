


import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItems';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddNow = () => {
    navigate('/');
  };

  const totalPrice = cartItems.reduce((total, item) => {
    // Remove anything that’s not a digit or dot, then parse to float
    const priceString = item.price.toString().replace(/[^\d.]/g, '');
    const price = parseFloat(priceString);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="cart-page">
      <div className="cart-content">
        <div className="cart-header">
          <h1 className="Cart">Cart Items - {cartItems.length}</h1>
          <button className="clear-cart" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button className="add-now-btn" onClick={handleAddNow}>
              Add Now
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}

            <div className="total-price">
              <strong>Total: ₹{totalPrice.toFixed(2)}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;





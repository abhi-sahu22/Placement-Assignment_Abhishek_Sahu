import { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart'); 
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
      />
    ));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {renderCartItems()}
          <hr className="my-4" />
          <p className="text-xl font-semibold mb-2">Total: ${getTotalPrice()}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

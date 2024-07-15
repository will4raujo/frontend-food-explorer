import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('@foodexplorer:cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const notifyCartChange = () => {
    const event = new CustomEvent('cartUpdated', { detail: cart });
    window.dispatchEvent(event);
  };

  function addToCart({ dishId, quantity }) {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.dishId === dishId);

      if (quantity === 0) {
        return prevCart.filter(item => item.dishId !== dishId);
      }

      if (itemIndex === -1) {
        return [...prevCart, { dishId, quantity }];
      }

      const newCart = [...prevCart];
      newCart[itemIndex] = { dishId, quantity };
      return newCart;
    });
  }

  function removeFromCart(dishId) {
    setCart(prevCart => prevCart.filter(item => item.dishId !== dishId));
  }

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cart));
    notifyCartChange();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
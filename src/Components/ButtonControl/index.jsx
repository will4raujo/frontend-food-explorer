import { Container } from "./styles";
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useCart } from "../../hooks/cart";

export function ButtonControl({ onQuantityChange, dishId }) {
  const [quantity, setQuantity] = useState(0);
  const [displayQuantity, setDisplayQuantity] = useState(`0${quantity}`);
  const { cart } = useCart();

  const handleMinus = () => {
    setQuantity(prev => Math.max(prev - 1, 0));
  };

  const handlePlus = () => {
    setQuantity(prev => prev + 1);
  };

  useEffect(() => {
    if (quantity < 10) {
      setDisplayQuantity(`0${quantity}`);
    } else {
      setDisplayQuantity(quantity.toString());
    }
    
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);
  
  useEffect(() => {
    const item = cart.find(item => item.dishId === dishId);
    if (item) {
      setQuantity(item.quantity);
    }
  }, [cart, dishId]);

  return (
    <Container>
        <div className='control-container'>
          <button onClick={handleMinus}>
            <FiMinus />
          </button>
          <span>{displayQuantity}</span>
          <button onClick={handlePlus}>
            <FiPlus />
          </button>
        </div>
    </Container>
  );
}
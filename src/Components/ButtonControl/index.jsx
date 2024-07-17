import { Container } from "./styles";
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export function ButtonControl({ onQuantityChange, clearQuantity }) {
  const [quantity, setQuantity] = useState(0);
  const [displayQuantity, setDisplayQuantity] = useState(`0${quantity}`);

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
    if (clearQuantity) {
      setQuantity(0);
      clearQuantity = false;
    }
  }, [clearQuantity]);

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
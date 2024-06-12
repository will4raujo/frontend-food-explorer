import { Container } from './styles';
import { ButtonControl } from '../ButtonControl';
import { Button } from '../Button';
import { FiHeart } from 'react-icons/fi';
// import { PiPencilSimpleLight } from 'react-icons/pi';
import { useState, useEffect } from 'react';

export function Card({ image, title, description, price, onClick, favorite = false }) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);


  return (
    <Container favorite={isFavorite}>
      <button className='fav-button' onClick={handleFavorite}>
        <FiHeart />
      </button>
      {/* <PiPencilSimpleLight /> */}
      <div className='content-wrapper' onClick={onClick}>

        <img src={image} alt='Card' />

        <h3>{title + ' >'}</h3>
        <p>{description}</p>
        <span className='price'>{price}</span>
      </div>
      <div className='action-buttons'>
        <ButtonControl />
        <Button>Incluir</Button>
      </div>

    </Container>
  );
}

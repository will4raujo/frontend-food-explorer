import { Container } from './styles';
import { ButtonControl } from '../ButtonControl';
import { Button } from '../Button';
import { FiHeart } from 'react-icons/fi';
import { PiPencilSimpleLight } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Card({ image, title, description, price, onClick, favorite = false }) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleEdit = () => {
    //temporarily hardcoded
    navigate('/dish/1');
  }
  
  return (
    <Container favorite={isFavorite.toString()}>
      {user.role === 'customer' && <button className='fav-button' onClick={handleFavorite}>
        <FiHeart />
      </button>}
      {user.role === 'admin' && <button className='edit-button' onClick={handleEdit}>
        <PiPencilSimpleLight />
      </button>}
      <div className='content-wrapper' onClick={onClick}>

        <img src={image} alt='Card' />

        <h3>{title + ' >'}</h3>
        <p>{description}</p>
        <span className='price'>{price}</span>
      </div>

      {user.role === 'customer' && 
        <div className='action-buttons'>
          <ButtonControl />
          <Button>Incluir</Button>
        </div>
      }

    </Container>
  );
}

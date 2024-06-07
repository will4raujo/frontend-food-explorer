import { Container } from './styles';
import { ButtonControl } from '../ButtonControl';
import { FiHeart } from 'react-icons/fi';
import { PiPencilSimpleLight } from 'react-icons/pi';

export function Card({ image, title, description, price }) {
  let quantity = 0;

  return (
    <Container>
      <FiHeart />
      {/* <PiPencilSimpleLight /> */}
      <img src={image} alt='Card' />

      <h3>{title + ' >'}</h3>
      <p>{description}</p>
      <span className='price'>{price}</span>

      <ButtonControl />
    </Container>
  );
}

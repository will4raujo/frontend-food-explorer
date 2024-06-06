import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card } from './styles';

export function Slider() {

  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
    </Splide>
  );
}
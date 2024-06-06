import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { Card } from "../Card";
import { Container } from "./styles";

export function Slider() {
  return (
    <Container>
      <Splide
        hasTrack={false}
        options={{
          rewind: false,
          perPage: 3,
          gap: 10,

        }}
      >
        <SplideTrack>
          <SplideSlide>
            <Card />
          </SplideSlide>
        </SplideTrack>
        
      </Splide>
    </Container>
  );
}

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { Card } from "../Card";
import { Container } from "./styles";

export function Slider(
  products,
  sliderTitle,
) {
  sliderTitle = "Refeições";
  products = [
    {
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      description: "Description 1Description 1Description 1Description 1Description 1",
      price: "R$ 10,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      description: "Description 2",
      price: "R$ 20,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      description: "Description 3",
      price: "R$ 30,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 4",
      description: "Description 4",
      price: "R$ 40,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 5",
      description: "Description 5",
      price: "R$ 50,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 6",
      description: "Description 6",
      price: "R$ 60,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 7",
      description: "Description 7",
      price: "R$ 70,00",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Product 8",
      description: "Description 8",
      price: "R$ 80,00",
    },
  ];

  const optionsMobile = {
    rewind: false,
    gap: 0,
    arrows: false,
    fixedWidth: 230,
    pagination: false,
    perPage: 3,
  };

  const optionsDesktop = {
    rewind: true,
    gap: 0,
    pagination: false,
    fixedWidth: 330,
    perPage: 3,
  };
  return (
    <Container className="splide-mobile">
      <h2>{sliderTitle}</h2>
      <Splide
        hasTrack={false}
        options={optionsDesktop}
      >
        <SplideTrack>
          {products.map((product, index) => (
            <SplideSlide key={`product_${index}`}>
              <Card
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </Container>
  );
}

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { Card } from "../Card";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Slider( products, sliderTitle ) {
  
  sliderTitle = "Refeições";
  products = [
    {
      image: "src/assets/product_images/product-0.png",
      title: "Product 1",
      description: "Description 1Description 1Description 1Description 1Description 1",
      price: "R$ 10,00",
    },
    {
      image: "src/assets/product_images/product-1.png",
      title: "Product 2",
      description: "Description 2Description 2Description 2Description 2Description 2",
      price: "R$ 20,00",
    },
    {
      image: "src/assets/product_images/product-2.png",
      title: "Product 3",
      description: "Description 3Description 3Description 3Description 3Description 3",
      price: "R$ 30,00",
    },
    {
      image: "src/assets/product_images/product-3.png",
      title: "Product 4",
      description: "Description 4Description 4Description 4Description 4Description 4",
      price: "R$ 40,00",
    },
    {
      image: "src/assets/product_images/product-4.png",
      title: "Product 5",
      description: "Description 5Description 5Description 5Description 5Description 5",
      price: "R$ 50,00",
    },
    {
      image: "src/assets/product_images/product-5.png",
      title: "Product 6",
      description: "Description 6Description 6Description 6Description 6Description 6",
      price: "R$ 60,00",
    },
    {
      image: "src/assets/product_images/product-6.png",
      title: "Product 7",
      description: "Description 7Description 7Description 7Description 7Description 7",
      price: "R$ 70,00",
    },
    {
      image: "src/assets/product_images/product-7.png",
      title: "Product 8",
      description: "Description 8Description 8Description 8Description 8Description 8",
      price: "R$ 80,00",
    },
    {
      image: "src/assets/product_images/product-8.png",
      title: "Product 9",
      description: "Description 9Description 9Description 9Description 9Description 9",
      price: "R$ 90,00",
    },
    {
      image: "src/assets/product_images/product-9.png",
      title: "Product 10",
      description: "Description 10Description 10Description 10Description 10Description 10",
      price: "R$ 100,00",
    },
    {
      image: "src/assets/product_images/product-10.png",
      title: "Product 11",
      description: "Description 11Description 11Description 11Description 11Description 11",
      price: "R$ 110,00",
    },
    {
      image: "src/assets/product_images/product-11.png",
      title: "Product 12",
      description: "Description 12Description 12Description 12Description 12Description 12",
      price: "R$ 120,00",
    }
  ];

  const navigate = useNavigate()

  const optionsMobile = {
    rewind: true,
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

  const [options, setOptions] = useState(() => {
    return window.innerWidth > 768 ? optionsDesktop : optionsMobile;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOptions(optionsDesktop);
      } else {
        setOptions(optionsMobile);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <h2>{sliderTitle}</h2>
      <Splide
        hasTrack={false}
        options={options}                                 
      >
        <SplideTrack>
          {products.map((product, index) => (
            <SplideSlide key={`product_${index}`}>
              <Card
                onClick={() => navigate(`/dish/${index}`)}
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

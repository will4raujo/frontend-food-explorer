import { Container } from "./styles";
import { Button } from "../Button";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
// import productImage from "../../assets/product_images/product-1.png";
import { PiPencilSimpleLight } from "react-icons/pi";

export function Card( { image, title, description, price }) {
  let quantity = 0;           

  return (
    <Container>
      <FiHeart />  
      <PiPencilSimpleLight />
      <img src={image} alt="Card" />
      
      <h2>{title + " >"}</h2>
      <p>{description}</p>
      <span className="price">{price}</span>

      <div className="control-container">
        <button>
          <FiMinus />
        </button>
        <span>{quantity}</span>
        <button>
          <FiPlus />
        </button>
      </div>

      <Button>Incluir</Button>
    </Container>
  );
}
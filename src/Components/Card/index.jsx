import { Container } from "./styles";
import { Button } from "../Button";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { PiPencilSimpleLight } from "react-icons/pi";

export function Card( { image, title, description, price }) {
  let quantity = 0;           

  return (
    <Container>
      <FiHeart />  
      {/* <PiPencilSimpleLight /> */}
      <img src={image} alt="Card" />
      
      <h3>{title + " >"}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      
      <div className="buttons-container">
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
      </div>
    </Container>
  );
}
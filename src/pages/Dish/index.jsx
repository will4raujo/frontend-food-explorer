import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ButtonText } from "../../Components/ButtonText";
import { PiCaretLeftLight } from "react-icons/pi";
import { ButtonControl } from "../../Components/ButtonControl";
import { Button } from "../../Components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import api from "../../services/api";

export function Dish() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dish, setDish] = useState();
  const [quantity, setQuantity] = useState(1);
  const [clearQuantity, setClearQuantity] = useState(false);
  const { addToCart } = useCart();
  

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleSendToCart = () => {
    const dishId = Number(id);
    addToCart({dishId, quantity});
    setClearQuantity(true);
  }

  useEffect(() => {
    api.get(`/dishes/${id}`).then(response => {
      const dishData = response.data;
      setDish({
        ...dishData,
        image_url: `${api.defaults.baseURL}/files/${dishData.image_url}`
      });
    });
  }, [id]);
  
  return (
    <Container>
      <Header />
      <main>
        <div className="col-1">
          <ButtonText icon={PiCaretLeftLight} to="/">
            voltar
          </ButtonText>
          <img src={dish?.image_url} alt={dish?.name} />
        </div>
        <div className="col-2">
          <h1>{dish?.name}</h1>
          <p>{dish?.description}</p>
          <div className="ingredients">
            {dish?.ingredients.map(ingredient => (
              <span key={ingredient.id}>{ingredient.name}</span>
            ))}
          </div>
          {user.role === 'customer' && <div className="buttons-container">
            <ButtonControl  onQuantityChange={handleQuantityChange} clearQuantity={clearQuantity}/>
            <Button onClick={handleSendToCart}>
              {`incluir ∙ R$ ${dish?.price}`}
            </Button>
          </div>}
          {user.role === 'admin' && <div className="buttons-container">
            <Button onClick={() => navigate(`/dish/edit/${id}`)}>
              {`editar`}
            </Button>
          </div>
          }
        </div>
      </main>
      <Footer />
    </Container>
  );
}

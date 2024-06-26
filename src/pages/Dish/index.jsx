import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ButtonText } from "../../Components/ButtonText";
import { PiCaretLeftLight } from "react-icons/pi";
import { ButtonControl } from "../../Components/ButtonControl";
import { Button } from "../../Components/Button";
import { useParams } from "react-router-dom";

export function Dish() {
  const { id } = useParams();

  const productImage = `/src/assets/product_images/product-${id}.png`;

  return (
    <Container>
      <Header />
      <main>
        <div className="col-1">
          <ButtonText icon={PiCaretLeftLight} to="/">
            voltar
          </ButtonText>
          <img src={productImage} alt="Nome do prato" />
        </div>
        <div className="col-2">
          <h1>Nome do prato</h1>
          <p>Descrição do prato</p>
          <div className="tags">
            <span>alface</span>
            <span>cebola</span>
            <span>pão naan</span>
            <span>pepino</span>
            <span>rabanete</span>
            <span>tomate</span>
          </div>
          <div className="buttons-container">
            <ButtonControl />
            <Button>
              {`incluir ∙ R$ 25,00`}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

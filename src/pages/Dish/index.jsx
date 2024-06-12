import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { ButtonText } from "../../Components/ButtonText";
import { PiCaretLeftLight } from "react-icons/pi";
import { ButtonControl } from "../../Components/ButtonControl";
import { Button } from "../../Components/Button";
import orderIcon from "../../assets/orderIcon.svg";

export function Dish() {
  return (
    <Container>
      <Header />
      <main>
        <div className="col-1">
          <ButtonText icon={PiCaretLeftLight}>voltar</ButtonText>
          <img
            src="src/assets/product_images/product-2.png"
            alt="Nome do prato"
          />
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
              <img src={orderIcon} alt="Notification" />
              Pedir . R$ 25,00
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

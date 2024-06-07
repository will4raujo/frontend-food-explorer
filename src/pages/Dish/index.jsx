import { Container } from "./styles";
import { Header } from "../../Components/Header";
import {FiArrowLeft} from 'react-icons/fi'
import {ButtonControl} from '../../Components/ButtonControl'

export function Dish() {
  return (
    <Container>
      <Header />
      <main>
        <a>
          <FiArrowLeft />
          voltar
        </a>
        <img src="" alt="Nome do prato" />
        <h1>Nome do prato</h1>
        <p>Descrição do prato</p>
        <div className="tags">
          <span>Tag 1</span>
          <span>Tag 2</span>
          <span>Tag 3</span>
        </div>
        <ButtonControl />
      </main>
    </Container>
  );
}
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Orders() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <h1>Meus Pedidos</h1>
          <p>Confira o status dos seus pedidos</p>
        </div>
        <div>
          <button>Ver todos</button>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
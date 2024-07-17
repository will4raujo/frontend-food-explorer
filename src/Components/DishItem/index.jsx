import { Container } from './styles';

export function DishItem({ image, name, price, quantity, handleRemoveItem }) {
  return (
    <Container>
        <div>
          <img src={image} alt="Imagem do pedido" />
        </div>
        <div>
          <div>
            <h2>{`${quantity} x ${name}`}</h2>
            <span>R$ {price.toFixed(2).replace('.', ',')}</span>
          </div>
          <span onClick={handleRemoveItem}>Excluir</span>
        </div>
    </Container>
  )
}
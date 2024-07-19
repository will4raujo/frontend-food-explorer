import { Container } from './styles'

export function DishItem({ image, name, price, quantity, handleRemoveItem, removeText }) {
  return (
    <Container>
        <div>
          <img src={image} alt='Imagem do pedido' />
        </div>
        <div>
          <div>
            {quantity && <h2>{`${quantity} x ${name}`}</h2>}
            {!quantity && <h2>{name}</h2>}
            {price && <span>R$ {price.toFixed(2).replace('.', ',')}</span>}
          </div>
          <span onClick={handleRemoveItem}>{removeText}</span>
        </div>
    </Container>
  )
}
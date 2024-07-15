import { useState, useEffect } from "react"
import { Header } from "../../Components/Header"
import { Container, Item, Payment, Orders } from "./styles"
import { Footer } from "../../Components/Footer"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import api from "../../services/api"
import creditCardIcon from "../../assets/icons/credit-card.svg"
import pixIcon from "../../assets/icons/pix.svg"
import qrCode from "../../assets/images/qrcode.png"
import clock from "../../assets/icons/clock.svg"
import circleCheck from "../../assets/icons/circle-check.svg"
import forkKnife from "../../assets/icons/fork-knife.svg"
import { useCart } from "../../hooks/cart"

export function MyOrders() {
  
  const [showOrder, setShowOrder] = useState(true)
  const [showPayments, setShowPayments] = useState(false)
  
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [status, setStatus] = useState('')

  const { cart, clearCart } = useCart()
  const [dishes, setDishes] = useState([])
  const [total, setTotal] = useState(0)

  const handleShowPayments = (e) => {
    e.preventDefault();
    setShowPayments(true);
    setShowOrder(false);
  }

  const handleFinishPayment = (e) => {
    e.preventDefault();
    setStatus('pending');

    api.post('/orders', {
      dishes: dishes.map(dish => ({
        id: dish.id,
        name: dish.name,
        quantity: dish.quantity
      })),
      total,
      payment_method: paymentMethod,
      status: 'pending'
    }).then(response => {
      alert('Pedido realizado com sucesso!')
      clearCart()
    }).catch(error => {
      alert({ error })
    })
  }

  function OrderStatus() {
    switch (status) {
      case 'pending':
        return (
          <div>
            <div className="waiting-payment">
              <img src={clock} alt="Relógio" />
              <p>Aguardando pagamento no caixa</p>                    
            </div>
          </div>
        )
      case 'confirmed':
        return (
          <div className="confirmed-payment">
            <img src={circleCheck} alt="Círculo com check" />
            <p>Pagamento confirmado</p>
            <p>Seu pedido está a caminho</p>
            <Button title="Acompanhar Pedido" />
          </div>
        )
      case 'delivered':
        return (
          <div className="delivered-order">
            <img src={forkKnife} alt="Garfo e Faca" />
            <p>Pedido entregue</p>
            <Button title="Fazer outro pedido" />
          </div>
        )
      default:
        return (
          <form>
            <Input type="text" text="Número do Cartão" />
            <div className="row-2">
              <Input type="text" text="Validade" />
              <Input type="text" text="CVC" />
            </div>
            <Button title="Finalizar Pagamento" onClick={handleFinishPayment} />
          </form>
        )
    }
  }

  useEffect(() => {
    const fetchDishes = async () => {
      const dishPromises = cart.map(async item => {
        const response = await api.get(`/dishes/${item.dishId}`)
        return {
          ...response.data,
          quantity: item.quantity,
          image_url: `${api.defaults.baseURL}/files/${response.data.image_url}`,
        }
      })

      const dishData = await Promise.all(dishPromises)
      setDishes(dishData)
    }
    fetchDishes()
  }, []);

  useEffect(() => {
    const totalValue = dishes.reduce((acc, dish) => {
      return acc + dish.price * dish.quantity
    }, 0)
    setTotal(totalValue)
  }, [dishes])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowPayments(true)
      } else {
        setShowPayments(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <Container>
        <Header />
        <main>
          {showOrder &&
            <Orders>
              <h1>Meu pedido</h1>
              <div>
                {dishes.map((dish, index) => (
                  <Item key={index}>
                    <div>
                      <img src={dish.image_url} alt="Imagem do pedido" />
                    </div>
                    <div>
                      <div>
                        <h2>{`${dish.quantity} x ${dish.name}`}</h2>
                        <span>R$ {dish.price.toFixed(2).replace('.', ',')}</span>
                      </div>
                        <span>Excluir</span>
                    </div>
                  </Item>
                ))}
              </div>
              <p>Total: R$ {total.toFixed(2)}</p>
              { !showPayments &&
                <Button title="Avançar" onClick={handleShowPayments} />
              }
            </Orders>
          }
          {showPayments && (
            <Payment>
              <h1>Pagamento</h1>
              <div className="payment-container">
                <button onClick={() => setPaymentMethod('pix')}>
                  <img src={pixIcon} alt="Pix" />
                  PIX
                </button>
                <button onClick={() => setPaymentMethod('credit_card')}>
                  <img src={creditCardIcon} alt="Cartão de Crédito" />
                  Crédito
                </button>
                <div>
                  {paymentMethod === 'pix' ? <img src={qrCode} alt="QR Code" /> : <OrderStatus />}
                </div>
              </div>
            </Payment>
          )}
        </main>
        <Footer />
      </Container>
    </div>
  )
}
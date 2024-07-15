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

export function MyOrders() {
  const image = `${api.defaults.baseURL}/files/salada-ravanello.png`
  
  const [showOrder, setShowOrder] = useState(true)
  const [showPayments, setShowPayments] = useState(false)
  
  const [paymentMethod, setPaymentMethod] = useState('pix')
  const [status, setStatus] = useState('')

  const handleShowPayments = (e) => {
    e.preventDefault();
    setShowPayments(true);
    setShowOrder(false);
  }

  const handleFinishPayment = (e) => {
    e.preventDefault();
    setStatus('pending');
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
                <Item>
                  <div>
                    <img src={image} alt="Imagem do pedido" />
                  </div>
                  <div>
                    <h2>prato 1</h2>
                    <span>Remover dos favoritos</span>
                  </div>
                </Item>
                <Item>
                  <div>
                    <img src={image} alt="Imagem do prato" />
                  </div>
                  <div>
                    <h2>prato 2</h2>
                    <span>Remover dos favoritos</span>
                  </div>
                </Item>
                <Item>
                  <div>
                    <img src={image} alt="Imagem do prato" />
                  </div>
                  <div>
                    <h2>prato 3</h2>
                    <span>Remover dos favoritos</span>
                  </div>
                </Item>
              </div>
              <p>Total: R$ 100,00</p>
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
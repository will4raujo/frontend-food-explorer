import { useState, useEffect } from "react";
import { Header } from "../../Components/Header";
import { Container, Item, Payment, Orders } from "./styles";
import { Footer } from "../../Components/Footer";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { DishItem } from "../../Components/DishItem";
import api from "../../services/api";
import creditCardIcon from "../../assets/icons/credit-card.svg";
import pixIcon from "../../assets/icons/pix.svg";
import qrCode from "../../assets/images/qrcode.png";
import clock from "../../assets/icons/clock.svg";
import circleCheck from "../../assets/icons/circle-check.svg";
import forkKnife from "../../assets/icons/fork-knife.svg";
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";

export function MyOrders() {
  const [showOrder, setShowOrder] = useState(true);
  const [showPayments, setShowPayments] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [status, setStatus] = useState('');

  const { cart, clearCart, removeFromCart } = useCart();
  const [dishes, setDishes] = useState([]);
  const [total, setTotal] = useState(0);

  const [orderId, setOrderId] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('@foodexplorer:cart'));
    return storedCart ? storedCart.id : null;
  });
  
  const [orderHasStarted, setOrderHasStarted] = useState(false);

  const navigate = useNavigate();

  const handleShowPayments = (e) => {
    e.preventDefault();
    setShowPayments(true);
    setShowOrder(false);
  };

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
    }).then(response => {
      toastr.success(response.data.message);
      localStorage.setItem('@foodexplorer:cart', JSON.stringify({ id: response.data.id, items: cart.items }));
      setOrderId(response.data.id);
      setOrderHasStarted(true);
    }).catch(error => {
      toastr.error(error);
    });
  };

  const handleRemoveItem = (dishId) => {
    const confirm = window.confirm('Deseja realmente remover este item do carrinho?');
    if (confirm){ 
      removeFromCart(dishId)
      if (cart.items.length === 0) {
        setShowOrder(false);
        navigate('/')
      }
    }
  };

  useEffect(() => {
    let intervalId;

    const consultOrderStatus = () => {
      if (orderId !== null) {
        api.get(`/orders/${orderId}`)
          .then(response => {
            setStatus(response.data);
          })
          .catch(error => {
            console.warn(error);
          });
      } else {
        toastr.error('Pedido não encontrado');
      }
    };

    if (orderId !== null) {
      setOrderHasStarted(true);
    }

    if (orderHasStarted && orderId !== null && status !== 'finished') {
      intervalId = setInterval(() => {
        consultOrderStatus();
      }, 1000);
    }

    if (status === 'finished') {
      clearCart();
    }

    return () => clearInterval(intervalId);
  }, [orderId, orderHasStarted, status]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (status === 'finished') {
        clearCart();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [status, clearCart]);

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
        );
      case 'preparing':
        return (
          <div className="confirmed-payment">
            <img src={circleCheck} alt="Círculo com check" />
            <p>Pagamento aprovado</p>
          </div>
        );
      case 'finished':
        return (
          <div className="finished-order">
            <img src={forkKnife} alt="Garfo e Faca" />
            <p>Pedido entregue</p>
          </div>
        );
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
        );
    }
  }

  useEffect(() => {
    const fetchDishes = async () => {
      const dishPromises = cart.items.map(async item => {
        const response = await api.get(`/dishes/${item.dishId}`);
        return {
          ...response.data,
          quantity: item.quantity,
          image_url: `${api.defaults.baseURL}/files/${response.data.image_url}`,
        };
      });

      const dishData = await Promise.all(dishPromises);
      setDishes(dishData);
    };
    fetchDishes();
  }, [cart.items]);

  useEffect(() => {
    const totalValue = dishes.reduce((acc, dish) => {
      return acc + dish.price * dish.quantity;
    }, 0);
    setTotal(totalValue);
  }, [dishes]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowPayments(true);
      } else {
        setShowPayments(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
                  <DishItem key={index} image={dish.image_url} name={dish.name} price={dish.price} quantity={dish.quantity} handleRemoveItem={() => handleRemoveItem(dish.id)} removeText={'Excluir'} />
                ))}

                {dishes.length === 0 && <p>Nenhum item no carrinho</p>}
              </div>
              <p>Total: R$ {total.toFixed(2)}</p>
              { !showPayments &&
                <Button title="Avançar" onClick={handleShowPayments} />
              }
            </Orders>
          }
          {showPayments && dishes.length > 0 && (
            <Payment $paymentmethod={paymentMethod}>
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
  );
}
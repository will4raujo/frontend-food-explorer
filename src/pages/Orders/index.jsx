import React, { useEffect, useState } from 'react';
import { Container, Card } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Select } from '../../components/Select';
import api from '../../services/api';

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  const options = [
    { value: 'pending', label: 'Pendente' },
    { value: 'confirmed', label: 'Preparando' },
    { value: 'delivered', label: 'Finalizado' }
  ]

  const updateOrderStatus = (orderId, status) => {
    api.put(`/orders/${orderId}`, { status })
  }

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
    updateOrderStatus(updatedOrders[index].id, newStatus);
  }

  useEffect(() => {
    api.get('/orders')
      .then(response => {
        const formattedOrders = response.data.map(order => {
          order.created_at = new Date(order.created_at).toLocaleString('pt-BR', {
            timeZone: 'UTC',
            dateStyle: 'short',
            timeStyle: 'short'
          }).replace(/\/\d{4}/, '').replace(/:/g, 'h').replace(',', ' às');
          order.id = order.id.toString().padStart(6, '0');
          return order;
        });
        setOrders(formattedOrders);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <h1>Pedidos</h1>
        {isMobile && (
          <>
            {orders.map((order, index) => (
              <Card key={index}>
                <div>
                  <p>{`${order.id} - ${order.created_at}`}</p>
                </div>
                <p>{order.detailing}</p>
                <Select
                  name="status"
                  title=""
                  value={order.status}
                  setValue={(value) => handleStatusChange(index, value)}
                  options={options}
                  semaphore={order.status}
                />
              </Card>
            ))}
          </>
        )}
        { !isMobile && (
            <> 
            {orders.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>
                        <Select
                          name="status"
                          title=""
                          value={order.status}
                          setValue={(value) => handleStatusChange(index, value)}
                          options={options}
                          semaphore={order.status}
                        />
                      </td>
                      <td>{order.id}</td>
                      <td>
                        {order.detailing}
                      </td>
                      <td>{order.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) :
              <h1> Não há pedidos</h1>
            }
            </>
          )
        }
      </main>
      <Footer />
    </Container>
  );
}
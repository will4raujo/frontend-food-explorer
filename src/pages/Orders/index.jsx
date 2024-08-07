import { useEffect, useState } from 'react'
import { Container, Card, Table, Tr } from './styles'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { Select } from '../../Components/Select'
import { Loading } from '../../Components/Loading'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'
import toastr from 'toastr'

export function Orders() {
  const [orders, setOrders] = useState([])
  const [isMobile, setIsMobile] = useState(true)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  const options = [
    { value: 'pending', label: 'Pendente' },
    { value: 'preparing', label: 'Preparando' },
    { value: 'finished', label: 'Finalizado' }
  ]

  const updateOrderStatus = (orderId, status) => {
    api.put(`/orders/${orderId}`, { status }).then(response => {
      toastr.success('Status atualizado com sucesso!')
      const id = Number(response.data.order_id)
      localStorage.setItem('@foodexplorer:order', JSON.stringify({ id, status }))
    })
  }

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders]
    updatedOrders[index].status = newStatus
    setOrders(updatedOrders)
    updateOrderStatus(updatedOrders[index].id, newStatus)
  }

  useEffect(() => {
    api.get('/orders')
      .then(response => {
        const formattedOrders = response.data.map(order => {
          let orderDate = new Date(order.created_at);
          orderDate.setHours(orderDate.getHours() - 3);

          order.created_at = orderDate.toLocaleString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            dateStyle: 'short',
            timeStyle: 'short'
          }).replace(/\/\d{4}/, '').replace(/:/g, 'h').replace(',', ' às');

          order.id = order.id.toString().padStart(6, '0');
          return order
        })
        setOrders(formattedOrders)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <Header />
      <main>
        {loading ? <Loading width={100} height={100} /> : (<>
          {user.role === 'customer' && (
            <>
              <h1>Histórico de pedidos</h1>
              {isMobile && (
                <>
                  {orders.map((order, index) => (
                    <Card key={index} $semaphore={order.status}>
                      <div>
                        <div className='mobile-row-one'>
                          <div>{order.id}</div>
                          <div>
                            {order.status === 'pending' && 'Pendente'}
                            {order.status === 'preparing' && 'Praparando'}
                            {order.status === 'finished' && 'Finalizado'}
                          </div>
                          <div>{order.created_at}</div>
                        </div>
                      </div>
                      <p>{order.detailing}</p>
                    </Card>
                  ))}
                </>
              )}
              {!isMobile && (
                <>
                  {orders.length > 0 ? (
                    <Table >
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
                          <Tr key={index} $semaphore={order.status}>
                            <td>
                              <div className='table-status'>
                                {order.status === 'pending' && 'Pendente'}
                                {order.status === 'preparing' && 'Praparando'}
                                {order.status === 'finished' && 'Finalizado'}
                              </div>
                            </td>
                            <td>{order.id}</td>
                            <td>
                              {order.detailing}
                            </td>
                            <td>{order.created_at}</td>
                          </Tr>
                        ))}
                      </tbody>
                    </Table>
                  ) :
                    <h1> Não há pedidos</h1>
                  }
                </>
              )}
            </>
          )}
          {user.role === 'admin' && (
            <>
              <h1>Pedidos</h1>
              {isMobile && (
                <>
                  {orders.map((order, index) => (
                    <Card key={index}>
                      <div>
                        {user.role === 'customer' &&
                          <div className='mobile-row-one'>
                            <div>{order.id}</div>
                            <div>{order.status}</div>
                            <div>{order.created_at}</div>
                          </div>
                        }
                      </div>
                      <p>{order.detailing}</p>
                      {user.role === 'admin' && <Select
                        name='status'
                        title=''
                        value={order.status}
                        setValue={(value) => handleStatusChange(index, value)}
                        options={options}
                        semaphore={order.status}
                      />}

                    </Card>
                  ))}
                </>
              )}
              {!isMobile && (
                <>
                  {orders.length > 0 ? (
                    <Table>
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
                          <Tr key={index}>
                            <td>
                              <Select
                                name='status'
                                title=''
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
                          </Tr>
                        ))}
                      </tbody>
                    </Table>
                  ) :
                    <h1> Não há pedidos</h1>
                  }
                </>
              )}
            </>
          )}
        </>)}
      </main>
      <Footer />
    </Container>
  )
}
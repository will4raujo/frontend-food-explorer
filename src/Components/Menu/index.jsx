import { Container, Header, Nav, Content } from './styles'
import { InputSearch } from '../InputSearch'
import { Footer } from '../Footer'
import closeIcon from '../../assets/icons/close.svg'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'


export function Menu({ isOpen, onClose }) {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    signOut()
  }

  return (
    <Container isopen={isOpen.toString()}>
      <Header>
        <div onClick={onClose}>
          <img src={closeIcon} alt="Close" />
          Menu
        </div>
      </Header>
      <Content>
        <InputSearch />
        <Nav>
          <ul>
            {user.role === 'admin' && <li onClick={() => navigate('/dish')}>Novo prato</li>}
            {user.role === 'customer' && <li>Histórico de pedidos</li>}
            {user.role === 'customer' && <li onClick={() => navigate('/favorites')}>Favoritos</li>}
            {user.role === 'customer' && <li onClick={() => navigate('/orders')}>Histórico de pedidos</li>}
            <li onClick={handleLogout}>Sair</li>
          </ul> 
        </Nav>
      </Content>
      <Footer />
    </Container>
  )
}
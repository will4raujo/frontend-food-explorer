import { Container, Header, Nav, Content } from './styles'
import { InputSearch } from '../InputSearch'
import { Footer } from '../Footer'
import closeIcon from '../../assets/icons/close.svg'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'


export function Menu({ isOpen, onClose }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <Container isOpen={isOpen}>
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
            <li>Sair</li>
          </ul> 
        </Nav>
      </Content>
      <Footer />
    </Container>
  )
}
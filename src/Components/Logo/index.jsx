import { Container } from './styles'
import logo from '../../assets/logo.svg'

export function Logo({ isAdmin = false}) {
  return (
    <Container>
      <div className='logo-name-container'>
        <img src={logo} alt='logo' />
        <span className='logo-name'>food explorer</span>
      </div>
      {isAdmin && 
        <div className='admin-tag-container'>
          <span className='admin-tag'>admin</span>
        </div>
      }
    </Container>
  )
}
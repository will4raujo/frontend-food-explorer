import { Container } from './styles';
import { FiSearch } from 'react-icons/fi';

export function InputSearch() {
    return (
        <Container>
          <FiSearch />
          <input type="text" placeholder="Pesquisar pratos" />
      </Container>
    )
}
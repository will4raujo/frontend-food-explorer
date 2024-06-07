import { Container } from "./styles";
import { Button } from '../Button';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function ButtonControl() {
  return (
    <Container>
      <div className='buttons-container'>
        <div className='control-container'>
          <button>
            <FiMinus />
          </button>
          <span>01</span>
          <button>
            <FiPlus />
          </button>
        </div>

        <Button>Incluir</Button>
      </div>
    </Container>
  );
}
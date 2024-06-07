import { Container } from "./styles";
import { FiMinus, FiPlus } from 'react-icons/fi';

export function ButtonControl() {
  return (
    <Container>
        <div className='control-container'>
          <button>
            <FiMinus />
          </button>
          <span>01</span>
          <button>
            <FiPlus />
          </button>
        </div>
    </Container>
  );
}
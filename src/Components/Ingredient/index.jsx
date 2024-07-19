import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function Ingredient({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew}>
      {!isNew && 
        <div>
          {value}
          <button onClick={onClick} type='button'>
            <FiX />
          </button>
        </div>}
      {isNew && (
        <>
          <input
            type='text'
            name='ingredient'
            readOnly={!isNew}
            value={value}
            {...rest}
          />
          <button onClick={onClick} type='button'>
            <FiPlus /> 
          </button>
        </>
      )}
    </Container>
  )
}
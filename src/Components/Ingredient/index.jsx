import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function Ingredient({ isnew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isnew.toString()}>
      {!isnew && 
        <div>
          {value}
          <button onClick={onClick} type="button">
            <FiX />
          </button>
        </div>}
      {isnew && (
        <>
          <input
            type="text"
            name="ingredient"
            readOnly={!isnew}
            value={value}
            {...rest}
          />
          <button onClick={onClick} type="button">
            <FiPlus /> 
          </button>
        </>
      )}
    </Container>
  );
}
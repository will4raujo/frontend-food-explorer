import { Logo } from "../Logo";
import { Container, BurgerMenu } from "./styles";
import { InputSearch } from "../InputSearch";
import orderIcon from "../../assets/orderIcon.svg";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";

export function Header() {
    const orders = 0;

    return (
        <Container>
            <BurgerMenu className="burger-menu">
                <span/><span/><span/>
            </BurgerMenu>
            <div className='logo-container'>
                <Logo/>
            </div>
            <div className="search-container">
                <InputSearch/>
            </div>
            <div className="desktop-button-container">
                <Button title={`Pedidos (${orders})`}>
                    <img src={orderIcon} alt="Notification"/>
                </Button>
            </div>
            <div className="mobile-button-container">
                <img src={orderIcon} alt="Notification"/>
            </div>
            <FiLogOut className="logout-icon" size={32}/>
        </Container>
    )
}
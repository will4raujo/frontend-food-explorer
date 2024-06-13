import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Container, BurgerMenu } from "./styles";
import { InputSearch } from "../InputSearch";
import orderIcon from "../../assets/orderIcon.svg";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const navigate = useNavigate();
    const orders = 0;
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <Container>
            <BurgerMenu className="burger-menu" onClick={handleMenu}>
                <span/><span/><span/>
            </BurgerMenu>
            <div className='logo-container' onClick={ () => navigate('/')}>
                <Logo isAdmin/>
            </div>
            <div className="search-container">
                <InputSearch/>
            </div>
            <div className="desktop-button-container">
                <Button title={`Pedidos (${orders})`} onClick={() => navigate('/dish')}>
                    <img src={orderIcon} alt="Notification"/>
                </Button>
            </div>
            <div className="mobile-button-container">
                <img src={orderIcon} alt="Notification"/>
            </div>
            <FiLogOut className="logout-icon" />
            {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={handleMenu} />}
        </Container>
    )
}
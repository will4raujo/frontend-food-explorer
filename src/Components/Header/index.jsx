import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Container, BurgerMenu, LogOut } from "./styles";
import { InputSearch } from "../InputSearch";
import orderIcon from "../../assets/orderIcon.svg";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const navigate = useNavigate();
    const orders = 0;
    const { signOut } = useAuth();

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const handleLogout = () => {
        signOut();
    }

    const { user } = useAuth();

    return (
        <Container>
            <BurgerMenu className="burger-menu" onClick={handleMenu}>
                <span/><span/><span/>
            </BurgerMenu>
            <div className='logo-container' onClick={ () => navigate('/')}>
                <Logo isAdmin={user?.role === 'admin'}/>
            </div>
            <div className="search-container">
                <InputSearch/>
            </div>
            <div className="desktop-button-container">
                {user.role === 'customer' &&                
                    <Button title={`Pedidos (${orders})`} onClick={() => navigate('/orders')} >
                        <img src={orderIcon} alt="Notification"/>
                    </Button>
                }
                {user.role === 'admin' &&
                    <Button title="Novo prato" onClick={() => navigate('/dish/edit/new')}/>
                } 
            </div>

            <div className="mobile-button-container">
                { user.role === 'customer' &&
                    <img src={orderIcon} alt="Notification" onClick={() => navigate('/orders')}/>
                }
            </div>

            <LogOut className="logout-icon" onClick={handleLogout}>
                <FiLogOut className="logout-icon"/>
            </LogOut>
            
            {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={handleMenu} />}
        </Container>
    )
}
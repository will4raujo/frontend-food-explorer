import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Container, BurgerMenu, LogOut } from "./styles";
import { InputSearch } from "../InputSearch";
import orderIcon from "../../assets/orderIcon.svg";
import { Button } from "../Button";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";
import { useCart } from "../../hooks/cart";

export function Header() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [total, setTotal] = useState('');

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const { cart } = useCart();

  const handleLogout = () => {
    navigate('/');
    signOut();
  };

  const { user } = useAuth();

  const updateTotal = () => {
    const storedCart = localStorage.getItem('@foodexplorer:cart');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    const totalQuantity = `(${parsedCart.items?.reduce((acc, item) => acc + item.quantity, 0)})`;
    setTotal(totalQuantity);
  };

  useEffect(() => {
    updateTotal();

    const handleCartUpdated = (event) => {
      updateTotal();
    };

    window.addEventListener('cartUpdated', handleCartUpdated);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdated);
    };
  }, []);

  useEffect(() => {
    updateTotal();
  }, [cart]);

  return (
    <Container>
      <BurgerMenu className="burger-menu" onClick={handleMenu}>
        <span /><span /><span />
      </BurgerMenu>
      <div className='logo-container' onClick={() => navigate('/')}>
        <Logo isAdmin={user?.role === 'admin'} />
      </div>
      <div className="search-container">
        <InputSearch />
      </div>
      {user.role === 'admin' &&
        <ButtonText onClick={() => navigate('/dish/edit/new')}>Novo prato</ButtonText>
      }
      <div className="desktop-button-container">
        {user.role === 'customer' &&
          <Button title={`Pedidos ${total}`} onClick={() => navigate('/my-orders')}>
            <img src={orderIcon} alt="Notification" />
          </Button>
        }
        {user.role === 'admin' &&
          <Button title="Pedidos" onClick={() => navigate('/orders')} />
        }
      </div>

      <div className="mobile-button-container">
        {user.role === 'customer' &&
          <img src={orderIcon} alt="Notification" onClick={() => navigate('/my-orders')} />
        }
      </div>

      <LogOut className="logout-icon" onClick={handleLogout}>
        <FiLogOut className="logout-icon" />
      </LogOut>

      {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={handleMenu} />}
    </Container>
  );
}
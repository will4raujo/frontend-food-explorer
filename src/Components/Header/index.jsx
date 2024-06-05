import { Logo } from "../Logo";
import { Container, BurgerMenu } from "./styles";
import notificationIcon from "../../assets/notificationIcon.svg";

export function Header() {
    return (
        <Container>
            <BurgerMenu>
                <span/>
                <span/>
                <span/>
            </BurgerMenu>
            <Logo/>
            <img src={notificationIcon} alt="Notificações"/>
        </Container>
    )
}
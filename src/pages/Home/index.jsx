import { Header } from "../../Components/Header";
import { Banner, Container, Content, Footer } from "./styles";
import imageBanner from '../../assets/images/pngegg_2.png';
import { Logo } from "../../Components/Logo";

export function Home() {
    return (
        <Container>
            <Header />
            <Banner>
                <img src={imageBanner} alt="Banner" />
                <div className="text-container">
                  <h1>Sabores inigualáveis</h1>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>
            </Banner>
            <Content>

            </Content>
            <Footer>
              <Logo />
              &copy; 2024 - Todos os direitos reservados
            </Footer>
            
        </Container>
    )
}
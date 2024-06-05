import { Header } from "../../Components/Header";
import { Banner, Container, Content } from "./styles";
import { Footer } from "../../Components/Footer";
import imageBanner from '../../assets/images/pngegg_2.png';
import { Menu } from "../../Components/Menu";


export function Home() {
    return (
        // <Container>
        //     <Header />
        //     <Banner>
        //         <img src={imageBanner} alt="Banner" />
        //         <div className="text-container">
        //           <h1>Sabores inigualáveis</h1>
        //           <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        //         </div>
        //     </Banner>
        //     <Content>

        //     </Content>
        //     <Footer />
        // </Container>
        <Menu />
    )
}
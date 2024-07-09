import { Header } from "../../Components/Header";
import { Banner, Container, Content } from "./styles";
import { Footer } from "../../Components/Footer";
import { Slider } from "../../Components/Slider";
import imageBanner from '../../assets/images/bannerHome.svg'

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
                <Slider category={{value: 'meals', label: 'Refeições'}} /> 
                <Slider category={{value: 'desserts', label: 'Sobremesas'}} />
                <Slider category={{value: 'drinks', label: 'Bebidas'}} />
            </Content>
            <Footer />
        </Container>
    )
}
import { Container, Form } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { ButtonText } from "../../Components/ButtonText";

export function SignUp() {

    return (
        <Container>
                <Logo/>
                <Form>
                    <h1 className="form-title">Cria sua conta</h1>
                    <Input text={'Seu nome'} type={'text'} placeholder='Exemplo: Maria da Silva'/>
                    <Input text={'Email'} type={'email'} placeholder='Exemplo: exemplo@exemplo.com.br'/>
                    <Input text={'Senha'} type={'password'} placeholder='No mínimo 6 caracteres'/>
                    <Button title={"Criar conta"}></Button>

                    <ButtonText to="/" >Já tenho uma conta</ButtonText>
                </Form>
        </Container>
    )
}
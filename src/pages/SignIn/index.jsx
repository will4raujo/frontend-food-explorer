import { Container, Form } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { ButtonText } from "../../Components/ButtonText";

export function SignIn() {
    return (
        <Container>
                <Logo/>
                <Form>
                    <h1 className="form-title">Faça login</h1>
                    <Input text={'Email'} type={'email'} placeholder='Exemplo: exemplo@exemplo.com.br'/>
                    <Input text={'Senha'} type={'password'} placeholder='No mínimo 6 caracteres'/>
                    <Button title={"Entrar"}></Button>

                    <ButtonText >Criar conta</ButtonText>
                </Form>
        </Container>
    )
}
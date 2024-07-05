import { Container, Form } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { ButtonText } from "../../Components/ButtonText";
import { useState } from "react";
import { useAuth } from '../../hooks/auth';


export function SignIn() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth()


    const handleSignIn = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            return alert('Preencha todos os campos')
        }

        signIn({ email, password })
    }

    return (
        <Container>
                <Logo/>
                <Form>
                    <h1 className="form-title">Faça login</h1>
                    <Input text={'Email'} type={'email'} placeholder='Exemplo: exemplo@exemplo.com.br' onChange={(e) => setEmail(e.target.value)}/>
                    <Input text={'Senha'} type={'password'} placeholder='No mínimo 6 caracteres' onChange={(e) => setPassword(e.target.value)}/>
                    <Button title={"Entrar"} onClick={handleSignIn}/>

                    <ButtonText to="/register" >Criar conta</ButtonText>
                </Form>
        </Container>
    )
}
import { Container, Form } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { ButtonText } from "../../Components/ButtonText";
import { useState } from "react";
import { useAuth } from '../../hooks/auth';
import toastr from 'toastr';
import { navigate } from 'react-router-dom';


export function SignIn() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth()
    const navigate = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            return toastr.error('Preencha todos os campos')
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

                    <ButtonText onClick={() => navigate('/register')} >Criar conta</ButtonText>
                </Form>
        </Container>
    )
}
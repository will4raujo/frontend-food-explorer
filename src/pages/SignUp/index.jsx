import { Container, Form } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { ButtonText } from "../../Components/ButtonText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toastr from 'toastr';

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            return toastr.error('Preencha todos os campos')
        }

        if (password.length < 6) {
            return toastr.error('A senha deve ter no mínimo 6 caracteres')
        }

        api.post('/users', { name, email, password })
        .then(() => {
            toastr.success('Usuário criado com sucesso')
            navigate('/')
        })
        .catch((error) => {
            if (error.response) {
                toastr.error(error.response.data.message)
            } else {
                toastr.error('Erro ao criar usuário')
            }
        })
    }
       
    return (
        <Container>
                <Logo/>
                <Form>
                    <h1 className="form-title">Cria sua conta</h1>
                    <Input text={'Seu nome'} type={'text'} placeholder='Exemplo: Maria da Silva' onChange={(e) => setName(e.target.value)} required/>
                    <Input text={'Email'} type={'email'} placeholder='Exemplo: exemplo@exemplo.com.br' onChange={(e) => setEmail(e.target.value)} required/>
                    <Input text={'Senha'} type={'password'} placeholder='No mínimo 6 caracteres' onChange={(e) => setPassword(e.target.value)} required/>
                    <Button title={"Criar conta"} onClick={handleSignUp}/>
                    <ButtonText onClick={() => navigate('/')} >Já tenho uma conta</ButtonText>
                </Form>
        </Container>
    )
}
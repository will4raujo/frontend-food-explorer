import { Container, Form } from "./styles";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { ButtonText } from "../../Components/ButtonText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            return alert('Preencha todos os campos')
        }

        api.post('/users', { name, email, password })
        .then(() => {
            alert('Usuário criado com sucesso')
            navigate('/')
        })
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Erro ao criar usuário')
            }
        })
    }
       
    return (
        <Container>
                <Logo/>
                <Form>
                    <h1 className="form-title">Cria sua conta</h1>
                    <Input text={'Seu nome'} type={'text'} placeholder='Exemplo: Maria da Silva' onChange={(e) => setName(e.target.value)}/>
                    <Input text={'Email'} type={'email'} placeholder='Exemplo: exemplo@exemplo.com.br' onChange={(e) => setEmail(e.target.value)}/>
                    <Input text={'Senha'} type={'password'} placeholder='No mínimo 6 caracteres' onChange={(e) => setPassword(e.target.value)}/>
                    <Button title={"Criar conta"} onClick={handleSignUp}/>
                    <ButtonText to="/" >Já tenho uma conta</ButtonText>
                </Form>
        </Container>
    )
}
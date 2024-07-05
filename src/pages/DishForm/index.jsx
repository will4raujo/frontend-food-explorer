import { Container, FileInput, SubmitButton, GhostButton } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Input } from "../../Components/Input";
import { Select } from "../../Components/Select";
import { Ingredient } from "../../Components/Ingredient";
import { ButtonText } from "../../Components/ButtonText";
import { Section } from "../../Components/Section";
import { TextArea } from "../../Components/TextArea";
import { PiCaretLeftLight, PiUploadSimple } from "react-icons/pi";
import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function DishForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = () => {
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  }

  const navigate = useNavigate();

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const formatCurrency = (value) => {
    const numberValue = parseFloat(value.replace(/\D/g, '')) / 100
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numberValue)
  }

  const handlePriceChange = (e) => {
    if (e.target.value === '') {
      setPrice('')
      return
    }
    const value = e.target.value;
    const formattedValue = formatCurrency(value)
    setPrice(formattedValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      category,
      price: parseFloat(price.replace(/\D/g, '')) / 100,
      description,
      ingredients,
    }
    try {
      await api.post("/dishes", data);
      alert("Prato cadastrado com sucesso!");
      navigate('/');

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={PiCaretLeftLight} to='/'>voltar</ButtonText>
        <h1>Novo prato</h1>
        <form>
          <div className="col-3">
            <FileInput>
              <h2>Imagem do prato</h2>
              <label htmlFor="image">
                <PiUploadSimple size={24} />
                Selecione imagem
                <input type="file" id="image" />
              </label>
            </FileInput>
            <Input type="text" name="name" text={"Nome do prato"} placeholder={"Nome do prato"} onChange={(e) => setName(e.target.value)} />
            <Select 
              title="Categoria" 
              name="category" 
              value={category} 
              setValue={setCategory} 
              options={[
                { value: "massas", label: "Massas" },
                { value: "carnes", label: "Carnes" },
                { value: "saladas", label: "Saladas" },
                { value: "sobremesas", label: "Sobremesas" }
              ]} 
            />
          </div>
          <div className="col-2">
            <Section title="Ingredientes">
              {ingredients.map((_, index) => (
                <Ingredient
                  key={index}
                  placeholder={"Ingrediente"}
                  onClick={() => removeIngredient(index)}
                  value={ingredients[index]}
                />
              ))}
              <Ingredient placeholder={"Adicionar"} isNew onClick={addIngredient} onChange={(e) => setIngredient(e.target.value)} value={ingredient} />
            </Section>
            <Input
              type="text"
              name="price"
              text={"Preço"}
              placeholder={"R$ 00,00"}
              onChange={handlePriceChange}
              value={price}
            />
          </div>
          <TextArea
            text={"Descrição"}
            placeholder={
              "Fale brevemente sobre o prato, seus ingredientes e composição"
            }
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <div className="action-buttons">
          <GhostButton>Excluir prato</GhostButton>
          <SubmitButton onClick={handleSubmit}>Salvar alterações</SubmitButton>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

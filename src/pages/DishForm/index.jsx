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
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toastr from 'toastr';
import api from "../../services/api";

export function DishForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [imageFile, setImageFile] = useState(null)

  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = () => {
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  }
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    const confirm = window.confirm('Deseja mesmo sair? Todas as alterações serão perdidas.');
    if (confirm) {
      navigate('/');
    }
  }

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const formatCurrency = (value) => {
    const parsedPrice = parseFloat(value.replace(/\D/g, '')) / 100
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parsedPrice)
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

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    
    setImageFile(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", parseFloat(price.replace(/\D/g, '')) / 100);
    formData.append("description", description);
    formData.append("ingredients", JSON.stringify(ingredients)); // Converta o array para string
    
    if (imageFile) {
        formData.append("image", imageFile);
    }
    try {
      if (id === 'new') {
          await api.post("/dishes", formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          toastr.success("Prato cadastrado com sucesso!");
          navigate('/');

      } else {
          await api.put(`/dishes/${id}`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          toastr.success("Prato atualizado com sucesso!");
          navigate('/');
      }
  } catch (error) {
      console.error(error);
  }
  }

  const handleDelete = async () => {
    const confirm = window.confirm("Tem certeza que deseja excluir este prato?");

    if (confirm) {
      try {
        await api.delete(`/dishes/${id}`);
        toastr.success("Prato excluído com sucesso!");
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    if ( id !== 'new') {
      const fetchDish = async () => {
        const { data } = await api.get(`/dishes/${id}`);
        setName(data.name);
        setCategory(data.category);
        setIngredients(data.ingredients.map(ingredient => ingredient.name));
        setPrice(data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
        setDescription(data.description);
      }
      fetchDish();
    }
  }, [id]);

  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={PiCaretLeftLight} onClick={handleGoBack}>voltar</ButtonText>
        <h1>Novo prato</h1>
        <form>
          <div className="col-3">
            <FileInput>
              <h2>Imagem do prato</h2>
              <label htmlFor="image">
                <PiUploadSimple size={24} />
                Selecione imagem
                <input type="file" id="image" onChange={handleUploadImage} />
              </label>
            </FileInput>
            <Input type="text" name="name" text={"Nome do prato"} placeholder={"Nome do prato"} value={name} onChange={(e) => setName(e.target.value)} />
            <Select 
              title="Categoria" 
              name="category" 
              value={category} 
              setValue={setCategory} 
              options={[
                { value: "meals", label: "Refeições" },
                { value: "desserts", label: "Sobremesas" },
                { value: "drinks", label: "Bebidas" },
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <div className="action-buttons">
          {id !== 'new' && <GhostButton onClick={handleDelete}>Excluir prato</GhostButton>}
          <SubmitButton onClick={handleSubmit}>Salvar alterações</SubmitButton>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

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

export function DishForm() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={PiCaretLeftLight}>voltar</ButtonText>
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
            <Input type="text" name="name" text={"Nome do prato"} />
            <Select />
          </div>
          <div className="col-2">
            <Section title="Ingredientes">
              <Ingredient value={"aaa"} />
              <Ingredient placeholder={"isNew"} isNew />
            </Section>
            <Input
              type="text"
              name="price"
              text={"Preço"}
              placeholder={"R$ 00,00"}
            />
          </div>
          <TextArea
            text={"Descrição"}
            placeholder={
              "Fale brevemente sobre o prato, seus ingredientes e composição"
            }
          />
        </form>
        <div className="action-buttons">
          <GhostButton>Excluir prato</GhostButton>
          <SubmitButton>Salvar alterações</SubmitButton>
        </div>
      </main>
      <Footer />
    </Container>
  );
}

import { Container, FileInput } from './styles';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Input } from '../../Components/Input';
import { Select } from '../../Components/Select';
import { Ingredient } from '../../Components/Ingredient';
import { ButtonText } from '../../Components/ButtonText';
import { Section } from '../../Components/Section';
import { PiCaretLeftLight, PiUploadSimple } from 'react-icons/pi';

export function DishForm() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={PiCaretLeftLight}>voltar</ButtonText>
        <h1>Novo prato</h1>
        <form>
          <FileInput>
            <h2>Imagem do prato</h2>
            <label htmlFor='image'>
              <PiUploadSimple size={24} />
              Selecione imagem
              <input type='file' id='image' />
            </label>
          </FileInput>
          <Input type='text' name='name' text={'Nome do prato'} />
          <Select />
          <Section title='Ingredientes'>
            <Ingredient value={'aaa'} />
            <Ingredient placeholder={'isNew'} isNew />
          </Section>
        </form>
      </main>
      <Footer />
    </Container>
  );
}

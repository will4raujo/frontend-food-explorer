import { Container, SearchResults } from './styles';
import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import api from '../../services/api';

export function InputSearch() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search === '') {
      api.get(`/dishes`).then(response => {
        setResults(response.data);
      });
    }

    if (search.length > 3) {
      api.get(`/dishes/search?q=${search}`).then(response => {
        setResults(response.data);
      });
    }
  }, [search]);

  return (
    <Container>
      <FiSearch />
      <input 
        type="text" 
        placeholder="Busque por pratos ou ingredientes" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      {search && (
        <SearchResults>
          <ul>
            {results.map(result => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </SearchResults>
      )}
    </Container>
  );
}
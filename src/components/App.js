//styles
import '../styles/App.scss';

//components
import callToApi from '../services/api';
import CharactersList from './CharactersList';

//hooks etc.
import { useState, useEffect } from 'react';

function App() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  console.log(characterData);
  return (
    <div className="App">
      <header></header>
      <main>
        <form>
          <label>
            Busca por personaje:
            <input />
          </label>
          <label>
            Selecciona la casa:
            <input />
          </label>
        </form>
        <ul className="characters-list">
          <CharactersList characterData={characterData} />
        </ul>
      </main>
    </div>
  );
}

export default App;

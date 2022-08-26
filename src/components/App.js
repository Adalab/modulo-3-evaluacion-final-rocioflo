//styles
import '../styles/App.css';

//components
import callToApi from '../services/api';

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
          <li>
            <img className="character-pic" />
            <p className="character-name"></p>
            <p className="character-species"></p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

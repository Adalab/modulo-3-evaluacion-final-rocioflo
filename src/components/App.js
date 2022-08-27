//styles
import '../styles/App.scss';

//components
import callToApi from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';

//hooks etc.
import { useState, useEffect } from 'react';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [filteredData, setFilteredData] = useState({
    name: '',
    species: '',
    gender: '',
    house: '',
    status: '',
  });
  const [filteredCharacterList, setFilteredCharacterList] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      setCharacterData(data);
      setFilteredCharacterList(data);
    });
  }, []);

  const handleFilteredData = (inputId, inputValue) => {
    setFilteredData({ ...filteredData, [inputId]: inputValue });

    const filteredCharacterList = characterData.filter((character) => {
      return character.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredCharacterList(filteredCharacterList);
  };

  return (
    <div className="App">
      <header></header>
      <main>
        <Filters
          filteredData={filteredData}
          handleFilteredData={handleFilteredData}
        />
        <ul className="characters-list">
          <CharactersList filteredCharacterList={filteredCharacterList} />
        </ul>
      </main>
    </div>
  );
}

export default App;

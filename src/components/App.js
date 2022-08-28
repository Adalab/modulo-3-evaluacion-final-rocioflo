//styles
import '../styles/App.scss';

//components
import callToApi from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

//hooks etc.
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  pathname,
  matchPath,
  useLocation,
} from 'react-router-dom';

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [filteredByName, setFilteredByName] = useState('');
  const [filteredByHouse, setFilteredByHouse] = useState('Gryffindor');

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    callToApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  //Filters
  const handleFilterByName = (inputValue) => {
    setFilteredByName(inputValue);
  };

  const handleFilterByHouse = (inputValue) => {
    setFilteredByHouse(inputValue);
    handleFilters();
  };

  const handleFilters = (nameValue) => {
    const filteredCharacters = characterData.filter((character) => {
      return (
        character.name.includes(nameValue) &&
        character.house === filteredByHouse
      );
    });

    return setFilteredList(filteredCharacters);
  };

  //Characters in detail

  const { pathname } = useLocation();
  const routeData = matchPath('/CharacterDetail/:id', pathname);

  const characterFound = routeData !== null ? routeData.params.id : null;

  return (
    <div className="App">
      <header>
        <h1>Lalala</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilters={handleFilters}
                  handleFilterByName={handleFilterByName}
                  filteredByName={filteredByName}
                  handleFilterByHouse={handleFilterByHouse}
                />
                <CharactersList
                  characterData={characterData}
                  filteredList={filteredList}
                />
              </>
            }
          />
          <Route
            path={`/CharacterDetail/${characterFound}`}
            element={
              <CharacterDetail
                characterData={characterData}
                characterFound={characterFound}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

//styles
import '../styles/App.scss';

//components
import callToApi from '../services/api';
import CharactersList from './CharactersList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

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
  const [filters, setFilters] = useState({
    name: '',
    species: '',
    gender: 'male',
    house: 'Gryffindor',
    status: '',
  });
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callToApi().then((data) => {
      setCharacterData(data);
      setFilteredList(data.sort((a, b) => a.name.localeCompare(b.name)));
      setIsLoading(false);
    });
  }, []);

  //Filters

  const handleFilters = (ev) => {
    ev.preventDefault();

    const id = ev.target.id;
    const value = ev.target.value;
    const newFilters = {
      ...filters,
      [id]: value,
    };

    const filteredData = characterData.filter((character) => {
      return (
        character.name.toLowerCase().includes(newFilters.name.toLowerCase()) &&
        character.house === newFilters.house &&
        character.gender === newFilters.gender
      );
    });

    setFilters({ ...filters, [id]: value });
    setFilteredList(filteredData);
  };

  //Reset button

  const handleReset = () => {
    setFilters({
      name: '',
      species: '',
      gender: 'male',
      house: 'Gryffindor',
      status: '',
    });
    setFilteredList(characterData);
  };

  //Characters in detail

  const { pathname } = useLocation();
  const routeData = matchPath('/CharacterDetail/:id', pathname);
  const characterFound = routeData !== null ? routeData.params.id : null;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilters={handleFilters}
                  filters={filters}
                  handleReset={handleReset}
                />
                <CharactersList
                  filteredList={filteredList}
                  isLoading={isLoading}
                  filters={filters}
                />
              </>
            }
          />
          <Route
            path={`/CharacterDetail/${characterFound}`}
            element={
              <CharacterDetail
                filteredList={filteredList}
                characterFound={characterFound}
                characterData={characterData}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

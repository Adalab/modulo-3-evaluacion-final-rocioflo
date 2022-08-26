import '../styles/App.css';
// import callToApi from '../services/api';
//import PropTypes from 'prop-types';

function App() {
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

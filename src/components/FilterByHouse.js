function FilterByHouse({ handleFilterByHouse }) {
  const handleSelect = (ev) => {
    const inputValue = ev.target.value;

    handleFilterByHouse(inputValue);
  };

  return (
    <label>
      Selecciona la casa:
      <select id="house" onChange={handleSelect}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </label>
  );
}

export default FilterByHouse;

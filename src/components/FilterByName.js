function FilterByName({ handleFilteredData, filteredData }) {
  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    handleFilteredData(inputId, inputValue);
  };

  return (
    <label>
      Busca por personaje:
      <input id="name" onChange={handleInput} value={filteredData.name} />
    </label>
  );
}
export default FilterByName;

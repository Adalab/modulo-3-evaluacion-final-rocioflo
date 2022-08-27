function FilterByName({ handleFilterByName, filteredByName, handleFilters }) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    handleFilterByName(inputValue);
    handleFilters(inputValue);
  };

  return (
    <label>
      Busca por personaje:
      <input id="name" onChange={handleInput} value={filteredByName} />
    </label>
  );
}
export default FilterByName;

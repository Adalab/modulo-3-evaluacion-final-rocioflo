function FilterByName({
  // handleFilterByName,
  filteredByName,
  setFilteredByName,
  handleFilters,
}) {
  const handleInput = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    // handleFilterByName(inputValue);
    setFilteredByName(inputValue);
    handleFilters();
  };

  return (
    <label>
      Busca por personaje
      <input id="name" onChange={handleInput} value={filteredByName} />
    </label>
  );
}
export default FilterByName;

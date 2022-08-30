function ListOrder({ listOrdering }) {
  const changeOrder = () => {
    listOrdering();
  };

  return (
    <label className="list-order-label">
      Ordenar alfabéticamente
      <input type="checkbox" onChange={changeOrder}></input>
    </label>
  );
}
export default ListOrder;

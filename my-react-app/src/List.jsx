import PropTypes from "prop-types"
const List = (props) => {
  const category = props.category;
  const items = props.items;
  //  items.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  // items.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // items.sort((a, b) => a.calories - b.calories) // NUMERIC
  // items.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC

  // const lowCalitems = items.filter(item => fruit.calories < 100) FILTRING items < 100
  // const highCalitems = items.filter(fruit => fruit.calories >= 100) //FILTRING items >= 100

  const listItems = items.map((item) => (
    <li key={item.id} >
      {item.name}: &nbsp;
      <b>{item.calories} </b>{" "}
    </li>
  ));
  return(<>
    <h3 className="list-category" >{category}</h3>
    <ol className="list-items" >{listItems} </ol>
  </>);
};
List.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
                                            }) ),
    category: PropTypes.string
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List;

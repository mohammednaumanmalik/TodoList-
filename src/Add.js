import { Button } from "react-bootstrap";
function Add(props) {
  const deleteItem = (key) => {
    const newList = props.itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.setItemList(newList);
  };
  return (
    <div className="Add-todo">
      {props.itemList.map((itemObj) => {
        return (
          <div className="paragraph">
            <p className="td">{itemObj.item}</p>
            <Button
              className="btn btn-primary btn-sm  text-right ml-4"
              id="buttons"
              onClick={() => deleteItem(itemObj.key)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default Add;

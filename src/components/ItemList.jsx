import React from "react";
import Item from "./Item";

function List({ array, filter }) {
  const filteredArray = filter === "All" ? array : array.filter(item => {
    if (filter === "Completed") {
      return item.status === true;
    } else if (filter === "Uncompleted") {
      return item.status === false;
    }
  });
  return (
    <ul>
      {filteredArray.map((item) => (<Item key={item.id} item={item} />))}
    </ul>
  );
}

export default List;

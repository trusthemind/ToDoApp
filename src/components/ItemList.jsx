import React from "react";
import Item from "./Item";

function List({ array, filter, passStatus }) {
  const filteredArray = array.filter(item => {
    if (filter === "All") {
      return true; 
    } else if (filter === "Completed") {
      return item.status === true; 
    } else if (filter === "Uncompleted") {
      return item.status === false; 
    }
  });

  return (
    <ul>
      {filteredArray.map((item) => (
        <Item key={item.id} item={item} passStatus={passStatus} />
      ))}
    </ul>
  );
}

export default List;

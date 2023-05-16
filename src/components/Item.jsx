import React, { useState } from "react";

function Item({ item}) {
  let [status, setStatus] = useState(item.status);
  let changeStatus = () => {
    setStatus(!status);
  };
  const itemStyle = {textDecoration: status ? "line-through" : "none"};

  return (
    <li style={itemStyle} onClick={changeStatus}>{item.name}</li>
  );
}

export default Item;

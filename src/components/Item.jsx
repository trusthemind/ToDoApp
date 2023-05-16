import React, { useState } from "react";

function Item({ item, passStatus}) {
  let [status, setStatus] = useState(item.status);
  let changeStatus = () => {
    passStatus(item.id)
  };
  const itemStyle = {textDecoration: item.status ? "line-through" : "none"};

  return (
    <li style={itemStyle} onClick={changeStatus}>{item.name}</li>
  );
}

export default Item;

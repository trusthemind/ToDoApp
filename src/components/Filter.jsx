import React, { useState } from "react";

function Filter({ passFunc }) {
  let [filterValue, setFilter] = useState("All");
  const selectChange = (e) => {
    setFilter(e.target.value);
    passFunc(filterValue);
  };

  return (
    <select onChange={selectChange} value={filterValue}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
}

export default Filter;

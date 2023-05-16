import React from "react";

function Filter({ passFunc }) {
  const selectChange = (e) => {
    const selectedValue = e.target.value;
    passFunc(selectedValue);
  };

  return (
    <select onChange={selectChange}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
}

export default Filter;

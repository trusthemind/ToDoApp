import React, { useState } from "react";

function Input({passFunc}) {
  const [input, setInput] = useState("");
    
  const onSubmit = (e) => {
    e.preventDefault();
    passFunc(input);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Enter your Plan" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;

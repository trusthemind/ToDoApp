import logo from './logo.svg';
import './App.css';
import List from './components/ItemList';
import Input from './components/Add';
import Filter from './components/Filter';
import { useState } from 'react';

function App() {
  let [todoArray, setArray] = useState([
    { id: 1, name: "test", status: true },
  ]);
  let [FilterValue, setFilter] = useState("");

  let getValue = (input) => {
    const newItem = {
      id: todoArray.length + 1,
      name: input,
      status: false
    }
    setArray(prevArray => [...prevArray, (newItem)]);
  }
  let getFilter = (filter) => {
    setFilter(filter);
  }

  return (
    <div className="App">
      <Input passFunc={getValue} />
      <Filter passFunc={getFilter} />
      <List array={todoArray} filter={FilterValue}/>
    </div>
  );
}

export default App;

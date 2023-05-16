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
  let getStatus = (id) => {
    let index = todoArray.findIndex((item) => item.id === id);
    let newItem = { ...todoArray[index], status: !todoArray[index].status }
    setArray([...todoArray.slice(0, index), newItem, ...todoArray.slice(index + 1)])
  }

  return (
    <div className="App">
      <Input passFunc={getValue} />
      <Filter passFunc={getFilter} />
      <List array={todoArray} filter={FilterValue} passStatus={getStatus} />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import DisplayList from './components/DisplayList';

function App() {

  const initialArray = [
    {
      topic: 'Get MERN black belt.',
      completed: false,
      id: 18
    },
    {
      topic: 'Throw a party.',
      completed: false,
      id: 92,
    },
    {
      topic: 'Feed the cat.',
      completed: false,
      id: 334
    },
    {
      topic: 'Go on a date.',
      completed: false,
      id: 921
    },
  ];

  const [listArray, setListArray] = useState(initialArray);

  return (
    <div className="App">
      <TodoList 
        listArray={listArray}
        setListArray={setListArray}
      />
      <DisplayList 
        listArray={listArray}
        setListArray={setListArray}
      />
    </div>
  );
}

export default App;

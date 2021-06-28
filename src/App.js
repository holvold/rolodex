import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from './Components/CardList/CardList.jsx';

function App() {

  const [monsters, setMonsters] = useState([]); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setMonsters(data));
  },[]);

  return (
    <div className="App">
      <CardList monsters={monsters} /> 
    </div>
  );
}

export default App;

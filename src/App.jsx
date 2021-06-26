import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [monsters, setMonsters] = useState([]); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setMonsters(data));
  });

  return (
    <div className="App">
      {/* {monsters.map( monster => <h1>{monster.name}</h1>)} */}
      {monsters.map(monster => (
        <h1 key={monster.id}> {monster.name} </h1>
      ))}
    </div>
  );
}

export default App;

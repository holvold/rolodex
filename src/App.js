import './App.css'
import React, { useEffect, useState } from 'react'
import CardList from './Components/CardList/CardList.jsx'
import SearchBox from './Components/SearchBox/SearchBox.jsx'

function App() {

  const [monsters, setMonsters] = useState([]); 
  const [searchField, setSearchField] = useState(''); 
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setMonsters(data));
  },[]);

  const filteredMonsters = monsters.filter(
    monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search for monster" handleChange={e => setSearchField(e.target.value) } />
      <CardList monsters={filteredMonsters} /> 
    </div>
  );
}

export default App;

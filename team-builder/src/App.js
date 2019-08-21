import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Roster from './components/Roster'


import Data from "./data"; 

function App() {

  const [roster, setRoster] = useState(Data);

  const addPlayer = player => {
    console.log("AddPlayer");
    setRoster([...roster, player]);
  };

  return (
    <div className="App">
      <h1>Player Creation Station</h1>
      <Form addPlayer={addPlayer}/>
      <h1>Current Roster</h1>
      <Roster players={roster} />
      
    </div>
  );
}

export default App;

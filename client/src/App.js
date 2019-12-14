import React from 'react';
import GetPlayers from "./components/GetPlayers";
import Toggle from "./components/Toggle";


function App() {
  return (
    <div className="App">
      <Toggle />
      <h1>World Cup Women</h1>
      <GetPlayers />
    </div>
  );
}

export default App;

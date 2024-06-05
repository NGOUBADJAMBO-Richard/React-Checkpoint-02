// Import the PlayerList.js into the App.js (root component), and render the PlayerList.
// src/App.js

import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App">
      <h1>Football Players List</h1>
      <PlayersList />
    </div>
  );
}

export default App;
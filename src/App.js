import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Data from './data';

function App() {
  return (
    <main>
      {/* <h1> Exercise - Pokedex</h1> */}
      <Pokedex pokemonList={ Data } />
    </main>

  );
}

export default App;

import React, { useState } from 'react';
import Input from './components/input.js';
import PokemonImg from './components/pokemonimg.js';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('turtwig');
  const [imgUrl, setImgUrl] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png');
  const [inputText, setInputText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        Who's that Pokemon?
      </header>
      <PokemonImg imgUrl={imgUrl}/>
      <Input pokemon={pokemon} setPokemon={setPokemon} imgUrl={imgUrl} setImgUrl={setImgUrl} inputText={inputText} setInputText={setInputText}/>
    </div>
  );
}

export default App;

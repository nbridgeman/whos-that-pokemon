import React, { useState } from 'react';
import Input from './components/input.js';
import PokemonImg from './components/pokemonimg.js';
import Options from './components/options.js';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [inputText, setInputText] = useState('');
  const [minPoke, setMinPoke] = useState(1);
  const [maxPoke, setMaxPoke] = useState(905);

  return (
    <div className="App">
      <header className="App-header">
        Who's that Pokemon?
      </header>
      <PokemonImg imgUrl={imgUrl}/>
      <Input pokemon={pokemon} setPokemon={setPokemon} imgUrl={imgUrl} setImgUrl={setImgUrl} inputText={inputText} setInputText={setInputText} minPoke={minPoke} maxPoke={maxPoke}/>
      <Options minPoke={minPoke} setMinPoke={setMinPoke} maxPoke={maxPoke} setMaxPoke={setMaxPoke}/>
    </div>
  );
}

export default App;

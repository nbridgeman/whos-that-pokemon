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
  const [autoAdv, setAutoAdv] = useState(true);

  const childProps = {
    pokemon,
    setPokemon,
    imgUrl,
    setImgUrl,
    inputText,
    setInputText,
    minPoke,
    setMinPoke,
    maxPoke,
    setMaxPoke,
    autoAdv,
    setAutoAdv,
  }

  return (
    <div className="App">
      <header className="App-header">
        Who's that Pokemon?
      </header>
      <PokemonImg {...childProps}/>
      <Input {...childProps}/>
      <Options {...childProps}/>
    </div>
  );
}

export default App;

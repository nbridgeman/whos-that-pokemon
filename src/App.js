import React, { useState } from 'react';
import Input from './components/input.js';
import PokemonImg from './components/pokemonimg.js';
import Options from './components/options.js';
import Buttons from './components/buttons.js';
import Name from './components/name.js';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [inputText, setInputText] = useState('');
  const [minPoke, setMinPoke] = useState(1);
  const [maxPoke, setMaxPoke] = useState(905);
  const [autoAdv, setAutoAdv] = useState(true);
  const [revealed, setRevealed] = useState(false);

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
    revealed,
    setRevealed,
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Who's that Pokemon?</h1>
      </header>
      <PokemonImg {...childProps}/>
      <Name {...childProps}/>
      <Input {...childProps}/>
      <Buttons {...childProps}/>
      <Options {...childProps}/>
    </div>
  );
}

export default App;

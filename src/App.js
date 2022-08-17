import React, { useState } from 'react';
import Input from './components/input.js';
import PokemonImg from './components/pokemonimg.js';
import Options from './components/options.js';
import Name from './components/name.js';
import Score from './components/score.js';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [inputText, setInputText] = useState('');
  const [minPoke, setMinPoke] = useState(1);
  const [maxPoke, setMaxPoke] = useState(905);
  const [autoAdv, setAutoAdv] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [artworkUrl, setArtworkUrl] = useState('other/official-artwork/');
  const [pokemonSeen, setPokemonSeen] = useState(0);
  const [pokemonCorrect, setPokemonCorrect] = useState(0);

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
    artworkUrl,
    setArtworkUrl,
    pokemonSeen,
    setPokemonSeen,
    pokemonCorrect,
    setPokemonCorrect,
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Who's that Pokemon?</h1>
      </header>
      <div className='info'>
        <Options {...childProps}/>
        <PokemonImg {...childProps}/>
        <Score {...childProps}/>
      </div>
      <Name {...childProps}/>
      <Input {...childProps}/>
    </div>
  );
}

export default App;

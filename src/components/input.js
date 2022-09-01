import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reveal from './reveal';

function Input(props) {
    const {pokemon, setPokemon, setImgUrl, inputText, setInputText, minPoke, maxPoke, autoAdv, revealed, setRevealed, artworkUrl, pokemonSeen, pokemonCorrect, setPokemonSeen, setPokemonCorrect} = props;
    const [pokeNum, setPokeNum] = useState(0);

    function getImg() {
        // TO-DO: Bug when image does not exist
        setImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${artworkUrl}${pokeNum}.png`); 
    }

    function getRandomPokemon() {
        let pokeId = Math.floor(Math.random() * (maxPoke - minPoke + 1)) + minPoke;
        setPokeNum(pokeId);
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`).then((res) => {setPokemon(res.data['name'])});
    }

    function inputHandler(e) {
        setInputText(e.target.value);
    }

    function checkIfEqual() {
        let newInput = inputText.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').toLowerCase();
        let newPokemon = pokemon.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '').toLowerCase();
        if (newInput === newPokemon) {
            return true;
        }
        return false;
    }

    function submitHandler(e) {
        e.preventDefault();
        if (checkIfEqual()) {
            if (autoAdv) {
                if (!revealed) {
                    setPokemonCorrect(pokemonCorrect + 1);
                }
                setRevealed(false);
                setPokemonSeen(pokemonSeen + 1);
                getRandomPokemon();
                setInputText('');
            } else {
                setRevealed(true);
                setPokemonSeen(pokemonSeen + 1);
                setPokemonCorrect(pokemonCorrect + 1);
            }
        }
    }

    function skipHandler(e) {
        e.preventDefault();
        setRevealed(false);
        setPokemonSeen(pokemonSeen + 1);
        getRandomPokemon();
        setInputText('');
    }
    
    useEffect(() => {getImg()}, [pokemon, artworkUrl]);
    useEffect(() => {getRandomPokemon()}, [minPoke, maxPoke]);

    return (
        <form>
            <input value={inputText} onChange={inputHandler} className='text-box'></input>
            <button onClick={submitHandler} type="submit" className='submit'>Guess</button>
            <Reveal {...props} />
            <button onClick={skipHandler} className='skip'>Skip</button>
        </form>
    )
}

export default Input;
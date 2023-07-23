import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reveal from './reveal';

function Input(props) {
    const {pokemon, setPokemon, setImgUrl, inputText, setInputText, minPoke, maxPoke, autoAdv, revealed, setRevealed, artworkUrl, pokemonSeen, pokemonCorrect, setPokemonSeen, setPokemonCorrect, setCorrect} = props;
    const [pokeNum, setPokeNum] = useState(0);
    const [buttonText, setButtonText] = useState("Guess");

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
        if (revealed) {
            getRandomPokemon();
            setInputText('');
            setRevealed(false);
            setButtonText("Guess");
        } else {
            setPokemonSeen(pokemonSeen + 1);
            if (checkIfEqual()) {
                setPokemonCorrect(pokemonCorrect + 1);
                setCorrect(true);
                setRevealed(false);
                getRandomPokemon();
                setInputText('');
            } else {
                setCorrect(false);
                setRevealed(true);
                setPokemonSeen(pokemonSeen + 1);
                setButtonText("Next"); 
                
            }
        }
    }
    
    useEffect(() => {getImg()}, [pokemon, artworkUrl]);
    useEffect(() => {getRandomPokemon()}, [minPoke, maxPoke]);

    return (
        <form>
            <input value={inputText} onChange={inputHandler} className='text-box'></input>
            <button onClick={submitHandler} type="submit" className='submit'>{buttonText}</button>
            {/* /* <Reveal {...props} />
            <button onClick={skipHandler} className='skip'>Skip</button> */}
        </form>
    )
}

export default Input;
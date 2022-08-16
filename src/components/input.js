import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Input(props) {
    const {pokemon, setPokemon, setImgUrl, inputText, setInputText, minPoke, maxPoke, autoAdv, revealed, setRevealed, artworkUrl} = props;

    function getRandomPokemon() {
        let pokeNum = Math.floor(Math.random() * (maxPoke - minPoke + 1)) + minPoke;
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeNum}`).then((res) => {setPokemon(res.data['name'])});
        setImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${artworkUrl}${pokeNum}.png`); // TO-DO: bug when image doesn't exist
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
                setRevealed(false);
                getRandomPokemon();
                setInputText('');
            } else {
                setRevealed(true); // TO-DO: idk something else
            }
        }
    }

    function skipHandler(e) {
        e.preventDefault();
        setRevealed(false);
        getRandomPokemon();
        setInputText('');
    }
    
    useEffect(() => {getRandomPokemon()}, [minPoke, maxPoke, artworkUrl]);

    return (
        <form>
            <input value={inputText} onChange={inputHandler}></input>
            <button onClick={submitHandler} type="submit">Guess</button>
            <button onClick={skipHandler}>Skip</button>
        </form>
    )
}

export default Input;
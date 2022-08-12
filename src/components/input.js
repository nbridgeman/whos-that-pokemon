import React, { useEffect } from 'react';
import axios from 'axios';

function Input(props) {
    function checkHasImage(pokeNum) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`).then((res) => {if (res.data['sprites']['other']['official-artwork']['front_default'] == null) {return false;}});
        return true;
    }

    function getRandomPokemon() {
        let pokeNum = Math.floor(Math.random() * (props.maxPoke - props.minPoke + 1)) + props.minPoke;
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeNum}`).then((res) => {props.setPokemon(res.data['name'].replace('-', ' '))});
        props.setImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`);
        if (!checkHasImage(pokeNum)) {
            getRandomPokemon();
        }
    }

    function inputHandler(e) {
        props.setInputText(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if ((props.inputText.toLowerCase()) === props.pokemon) {
            getRandomPokemon();
            props.setInputText('');
        } 
    }

    function skipHandler(e) {
        e.preventDefault();
        getRandomPokemon();
    }
    
    useEffect(() => {getRandomPokemon()}, []);

    return (
        <form>
            <input value={props.inputText} onChange={inputHandler}></input>
            <button onClick={submitHandler} type="submit">Guess</button>
            <button onClick={skipHandler}>Skip</button>
        </form>
    )
}

export default Input;
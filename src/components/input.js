import React from 'react';
import axios from 'axios';

function Input(props) {
    function getRandomPokemon() {
        let pokeNum = Math.floor(Math.random() * (905 - 1)) + 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeNum}`).then((res) => {props.setPokemon(res.data['name'])});
        props.setImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`);
        if (!props.imgUrl) {
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
    
    return (
        <form>
            <input value={props.inputText} onChange={inputHandler}></input>
            <button onClick={submitHandler} type="submit">Guess</button>
            <button onClick={skipHandler}>Skip</button>
        </form>
    )
}

export default Input;
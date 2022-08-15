import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Input(props) {
    const {pokemon, setPokemon, setImgUrl, inputText, setInputText, minPoke, maxPoke, autoAdv} = props;

    // const [imgExists, setImgExists] = useState(true);

    // function checkHasImage(pokeNum) {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`).then((res) => {if (res.data['sprites']['other']['official-artwork']['front_default'] === null) {console.log('here'); setImgExists(false)} else {setImgExists(true)}});
    // }

    async function getRandomPokemon() {
        let pokeNum = Math.floor(Math.random() * (maxPoke - minPoke + 1)) + minPoke;
        // checkHasImage(pokeNum);
        // console.log(imgExists);
        // if (imgExists === false) {
        //     console.log('here');
        //     getRandomPokemon();
        // }
        await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeNum}`).then((res) => {setPokemon(res.data['name'].replace('-', ' '))});
        setImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`); // TO-DO: bug when image doesn't exist
    }

    function inputHandler(e) {
        setInputText(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if ((inputText.toLowerCase()) === pokemon) {
            if (autoAdv) {
                getRandomPokemon();
                setInputText('');
            } else {
                console.log('correct'); // TO-DO: idk something else
            }
        }
    }

    function skipHandler(e) {
        e.preventDefault();
        getRandomPokemon();
        setInputText('');
    }
    
    useEffect(() => {getRandomPokemon()}, [minPoke, maxPoke]);

    return (
        <form>
            <input value={inputText} onChange={inputHandler}></input>
            <button onClick={submitHandler} type="submit">Guess</button>
            <button onClick={skipHandler}>Skip</button>
        </form>
    )
}

export default Input;
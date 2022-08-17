import React from "react";

function Score(props) {
    const {pokemonSeen, setPokemonSeen, pokemonCorrect, setPokemonCorrect} = props;

    function clickHandler(e) {
        e.preventDefault();
        setPokemonSeen(0);
        setPokemonCorrect(0);
    }

    return (
        <div className='score'>
            <p>{pokemonCorrect} / {pokemonSeen}</p>
            <button onClick={clickHandler}>Reset</button>
        </div>
    )
}

export default Score;
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
            <p className='count'>{pokemonCorrect} / {pokemonSeen}</p>
            <button onClick={clickHandler} className='reset'>Start Over</button>
        </div>
    )
}

export default Score;
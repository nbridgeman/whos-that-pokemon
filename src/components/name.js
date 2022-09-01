import React from 'react';

function Name(props) {
    const {pokemon, revealed} = props;

    function getPokemonName() {
        return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    }

    if (revealed) {
        return (
            <div>
                <p className='poke-name'>{getPokemonName()}</p>
            </div>
        )
    } else {
        return (
            <div>
                <p className='poke-name'>-----</p>
            </div>
        )
    }
}

export default Name;
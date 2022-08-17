import React from 'react';

function Name(props) {
    const {pokemon, revealed} = props;

    function getPokemonName() {
        return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    }

    if (revealed) {
        return (
            <div>
                <h3>{getPokemonName()}</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h3>-----</h3>
            </div>
        )
    }
}

export default Name;
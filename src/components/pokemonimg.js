import React from 'react';

function PokemonImg(props) {
    const {imgUrl, pokemon} = props;
    const altText = 'pokemon named ' + pokemon;

    return (
        <div className='pokeImg'>
            <img src={imgUrl} alt={altText}></img>
        </div>
    )
}

export default PokemonImg;
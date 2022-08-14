import React from 'react';

function PokemonImg(props) {
    const {imgUrl} = props;

    return (
        <div className='pokeImg'>
            <img src={imgUrl} alt='pokemon'></img>
        </div>
    )
}

export default PokemonImg;
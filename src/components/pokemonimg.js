import React from 'react';

function PokemonImg(props) {
    

    return (
        <div className='pokeImg'>
            <img src={props.imgUrl} alt='pokemon'></img>
        </div>
    )
}

export default PokemonImg;
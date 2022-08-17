import React, { useState } from 'react';
import Slider from './options/slider.js';
import AutoAdvance from './options/autoadvance.js';
import ToggleSprite from './options/togglesprite.js';

function Options(props) {
    const {setMaxPoke, setMinPoke, setArtworkUrl, setPokemonSeen, setPokemonCorrect} = props;

    const [optShown, setOptShown] = useState(false);
    const [minSliderVal, setMinSliderVal] = useState(1);
    const [maxSliderVal, setMaxSliderVal] = useState(8);
    const [isChecked, setIsChecked] = useState(false);

    const sliderProps = {
        setMaxPoke,
        setMinPoke,
        minSliderVal,
        setMinSliderVal,
        maxSliderVal,
        setMaxSliderVal,
        setPokemonSeen,
        setPokemonCorrect,
    }

    const spriteProps = {
        setArtworkUrl,
        isChecked,
        setIsChecked,
    }

    function setShown() {
        setOptShown(!optShown);
    }

    if (optShown) {
        return (
            <div className='options'>
                <button onClick={setShown}>Hide Options</button>
                <Slider {...sliderProps}/>
                <AutoAdvance {...props}/>
                <ToggleSprite {...spriteProps}/>
            </div>
        )
    } else {
        return (
            <div className='options'>
                <button onClick={setShown}>Show Options</button>
            </div>
        )
    }
    
}

export default Options;
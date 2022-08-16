import React, { useState } from 'react';
import Slider from './options/slider.js';
import AutoAdvance from './options/autoadvance.js';
import ToggleSprite from './options/togglesprite.js';

function Options(props) {
    const {setMaxPoke, setMinPoke, setArtworkUrl} = props;

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
                <Slider {...sliderProps}/>
                <AutoAdvance {...props}/>
                <ToggleSprite {...spriteProps}/>
                <button onClick={setShown}>Hide</button>
            </div>
        )
    } else {
        return (
            <button onClick={setShown}>Options</button>
        )
    }
    
}

export default Options;
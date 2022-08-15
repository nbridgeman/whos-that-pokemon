import React, { useState } from 'react';
import Slider from './options/slider.js';
import AutoAdvance from './options/autoadvance.js';

function Options(props) {
    const {setMaxPoke, setMinPoke} = props;

    const [optShown, setOptShown] = useState(false);
    const [minSliderVal, setMinSliderVal] = useState(1);
    const [maxSliderVal, setMaxSliderVal] = useState(8);

    const sliderProps = {
        setMaxPoke,
        setMinPoke,
        minSliderVal,
        setMinSliderVal,
        maxSliderVal,
        setMaxSliderVal,
    }

    function setShown() {
        setOptShown(!optShown);
    }

    if (optShown) {
        return (
            <div className='options'>
                <Slider {...sliderProps}/>
                <AutoAdvance {...props}/>
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
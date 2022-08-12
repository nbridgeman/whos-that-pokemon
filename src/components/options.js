import React, { useState, useEffect } from 'react';

function Options(props) {
    const [sliderValue, setSliderValue] = useState(8);
    const genMax = [151, 100, 135, 107, 156, 72, 88, 96];

    function setMaxPokeNum() {
        let sum = 0;
        for (let i = 0; i < sliderValue; i++) {
            sum += genMax[i];
        }
        props.setMaxPoke(sum);
    }

    function sliderHandler(e) {
        setSliderValue(e.target.value);
    }

    useEffect(setMaxPokeNum, [sliderValue]);
    
    return (
        <div>
            <input type={'range'} min={'1'} max={'8'} onChange={sliderHandler} step={1}/>
            <p>Gen 1 - Gen {sliderValue}</p>
        </div>
    )
}

export default Options;
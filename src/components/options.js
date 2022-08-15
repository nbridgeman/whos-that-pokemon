import React, { useState } from 'react';
import Slider from './options/slider.js';
import AutoAdvance from './options/autoadvance.js';

function Options(props) {
    const [optShown, setOptShown] = useState(false);

    function setShown() {
        setOptShown(!optShown);
    }

    if (optShown) {
        return (
            <div className='options'>
                <Slider {...props}/>
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
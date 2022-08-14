import React from 'react';
import Slider from './options/slider.js';
import AutoAdvance from './options/autoadvance.js';

function Options(props) {

    return (
        <div className='options'>
            <Slider {...props}/>
            <AutoAdvance {...props}/>
        </div>
    )
}

export default Options;
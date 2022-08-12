import React from 'react';

function Options(props) {
    const genMax = [151, 252, 386, 493];

    function sliderHandler(e) {
        props.setMaxPoke(genMax[e.target.value - 1]);
    }
    
    return (
        <div>
            <input type={'range'} min={'1'} max={'4'} onChange={sliderHandler} step={1}/>
        </div>
    )
}

export default Options;
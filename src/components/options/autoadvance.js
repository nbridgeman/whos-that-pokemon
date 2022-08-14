import React from 'react';

function AutoAdvance(props) {
    const {autoAdv, setAutoAdv} = props;

    function changeHandler() {
        setAutoAdv(!autoAdv);
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={autoAdv} onChange={changeHandler}/>
                Auto Advance
            </label>
        </div>
    )
}

export default AutoAdvance;
import React from "react";

function Buttons(props) {
    const {revealed, setRevealed} = props;

    function revealHandler(e) {
        setRevealed(!revealed);
    }

    return (
        <button onClick={revealHandler}>Reveal</button>
    )
}

export default Buttons;
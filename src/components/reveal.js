import React from "react";

function Reveal(props) {
    const {revealed, setRevealed} = props;

    function revealHandler(e) {
        e.preventDefault();
        setRevealed(!revealed);
    }

    return (
        <button onClick={revealHandler}>Reveal</button>
    )
}

export default Reveal;
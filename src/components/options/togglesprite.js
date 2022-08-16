import React from "react";

function ToggleSprite(props) {
    const {setArtworkUrl, isChecked, setIsChecked} = props;

    const artwork = 'other/official-artwork/';
    const sprite = '';

    function handleChange() {
        if (isChecked) {
            setArtworkUrl(artwork);
        } else {
            setArtworkUrl(sprite);
        }
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <label>
                <input type='checkbox' checked={isChecked} onChange={handleChange}/>
                Toggle Sprites
            </label>
        </div>
    )
}

export default ToggleSprite;
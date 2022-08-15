import React from 'react';

function Name(props) {
    const {pokemon, revealed} = props;

    if (revealed) {
        return (
            <div>
                <h3>{pokemon}</h3>
            </div>
        )
    }
}

export default Name;
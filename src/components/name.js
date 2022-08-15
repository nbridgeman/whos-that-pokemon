import React from 'react';

function Name(props) {
    const {pokemon, revealed} = props;

    if (revealed) {
        return (
            <div>
                <h1>{pokemon}</h1>
            </div>
        )
    }
}

export default Name;
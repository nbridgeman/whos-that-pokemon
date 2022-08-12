import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Options(props) {
    const [sliderValue, setSliderValue] = useState(8);
    const [numGens, setNumGens] = useState(8);
    const [genNums, setGenNums] = useState([]);
    const [loading, setLoading] = useState(true);

    function getNumGens() {
        axios.get('https://pokeapi.co/api/v2/generation').then((res) => {setNumGens(res.data['count'])});
    }

    function getGenNums() {
        for (let i = 0; i < numGens; i++) {
            let oldGenNums = genNums;
            axios.get(`https://pokeapi.co/api/v2/generation/${i + 1}`).then((res) => {oldGenNums.push((res.data['pokemon_species']).length)});
            setGenNums(oldGenNums);
        }
        setLoading(false);
    }

    function setMaxPokeNum() {
        if (loading) { return }
        let sum = 0;
        for (let i = 0; i < sliderValue; i++) {
            sum += genNums[i];
        }
        props.setMaxPoke(sum);
    }

    function sliderHandler(e) {
        setSliderValue(e.target.value);
    }

    useEffect(() => {getNumGens(); getGenNums();}, []);
    useEffect(() => {setMaxPokeNum()}, [sliderValue]);
    
    return (
        <div>
            <input type={'range'} min={'1'} max={numGens} onChange={sliderHandler} step={1} />
            <p>Gen 1 - Gen {sliderValue}</p>
        </div>
    )
}

export default Options;
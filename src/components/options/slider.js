import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Slider(props) {
    const {setMaxPoke, setMinPoke, minSliderVal, setMinSliderVal, maxSliderVal, setMaxSliderVal} = props;

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
        for (let i = 0; i < maxSliderVal; i++) {
            sum += genNums[i];
        }
        setMaxPoke(sum);
    }

    function setMinPokeNum() {
        if (loading) {return}
        let sum = 1;
        for (let i = 0; i < minSliderVal - 1; i++) {
            sum += genNums[i];
        }
        setMinPoke(sum);
    }

    function sliderHandler(e) {
        if (e.target.name === 'min') {
            setMinSliderVal(e.target.value);
        } else {
            setMaxSliderVal(e.target.value);
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        setMinPokeNum();
        setMaxPokeNum();
    }

    useEffect(() => {getNumGens(); getGenNums();}, []);
    
    return (
        <div>
            <form>
                <label>
                    <input name={'min'} type={'range'} min={'1'} max={maxSliderVal} onInput={sliderHandler} step={1} value={minSliderVal} />
                    Min: Gen {minSliderVal}
                </label>
                <label>
                    <input name={'max'} type={'range'} min={minSliderVal} max={numGens} onInput={sliderHandler} step={1} value={maxSliderVal}/>
                    Max: Gen {maxSliderVal}
                </label>
                <button onClick={submitHandler}>Apply</button>
            </form>
        </div>
    )
}

export default Slider;
import React from 'react'


export default function Picker({ head, torso, legs, onHeadChange, onTorsoChange, onLegsChange, catchPhrase, addCatchPhrase, handleClick}) {
    return (
        <div>
            <label>
                Head
                <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
                    <option></option>
                </select>
            </label>

            <label>
                Torso
                <select value={torso} onChange={(e) => onTorsoChange(e.target.value)}>
                    <option></option>
                </select>
            </label>

            <label>
                Legs
                <select value={legs} onChange={(e) => onLegsChange(e.target.value)}>
                    <option></option>
                </select>
            </label>
            <label>
                Add A Catchphrase
                <input value={catchPhrase} onChange={(e) => addCatchPhrase(e.target.value)}></input>
                <button type='button' onClick={() => handleClick()}> Add </button>
            </label>
        </div>
    )
}

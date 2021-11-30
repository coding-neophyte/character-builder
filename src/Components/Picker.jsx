import React from 'react'


export default function Picker({ head, torso, legs, onHeadChange, onTorsoChange, onLegsChange, catchPhrase, addCatchPhrase, handleClick}) {

    const headOptions = ['bird', 'dog', 'duck']
    const torsoOptions = ['blue', 'fancy', 'pink', 'red']
    const legOptions = ['baggy', 'slim', 'loose', 'bootcut']



    return (
        <div>
            <label>
                Head
                <select value={head} onChange={(e) => onHeadChange(e.target.value)}>
                    {headOptions.map(headOp => <option key={headOp}>{headOp}</option>)}
                </select>
            </label>

            <label>
                Torso
                <select value={torso} onChange={(e) => onTorsoChange(e.target.value)}>
                    {torsoOptions.map(middle => <option key={middle}>{middle}</option>)}
                </select>
            </label>

            <label>
                Legs
                <select value={legs} onChange={(e) => onLegsChange(e.target.value)}>
                    {legOptions.map(leg => <option key={leg}>{leg}</option>)}
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

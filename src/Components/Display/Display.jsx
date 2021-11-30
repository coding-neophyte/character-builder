import React from 'react'

export default function Display({catchPhrases}) {
    return (
        <div>
            {catchPhrases.map(phrase => <p>{phrase}</p>)}
        </div>
    )
}

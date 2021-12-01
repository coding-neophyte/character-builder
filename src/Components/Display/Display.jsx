import React from 'react'

export default function Display({catchPhrases}) {
    return (
        <div>
            {catchPhrases.map(phrase => <p key={phrase}>{phrase}</p>)}
        </div>
    )
}

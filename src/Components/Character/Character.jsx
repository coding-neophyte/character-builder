import React from 'react'

export default function Character({ head, torso, legs }) {
    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <article className='head' style={{
                backgroundImage: `url(./${head}.png)`,
                height: 150,
                width: 150,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',}}> </article>


            <article className='torso'style={{
                backgroundImage: `url(./${torso}.png)`,
                height: 150,
                width: 150,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}> </article>


            <article className='legs'style={{
                backgroundImage: `url(./${legs}.png)`,
                height: 150,
                width: 150,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',}}> </article>

        </section>
    )
}

import React from 'react'

function Results ({characters}){
    return (<div>
        <ul>
            {characters.map(character =>{
                return <li key={character}>{character.name}</li>
            })}
        </ul>
    </div>)
}

export default Results
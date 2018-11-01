import React from 'react'
import ResultsItem from './ResultsItem'

function Results ({character}){

    // // to grab the whole object and destructure; needs to work with single object only [0]
    // function format (key, value) {
    //     if (typeof value === 'string') {
    //         return value.includes('http') ? <a href={value} target='_blank'>{value}</a> : <strong>{value}</strong>;

    //     // if nested array
    //     } else if (typeof value === 'object') {
    //         return (<ul>
    //         {value.map (item => {
    //             return item.includes('http') ? <li key={item}><a href={item} target='_blank'>{item}</a></li> : <li>{item}</li>;
    //         })}
    //         </ul>)
    //     }
    // }


    return (<div>
        <ul>

        {/* {characters.map(character => {
            return <li key={character}>{character.name}</li>
        })} */}

        {/* {Object.keys(character).map(item => {
            const characterValue = character[item];
            return (<li key={item}>{item}: {format(item, characterValue)}</li>)
        })} */}
        
        {Object.values(character).map(item => {
                return <ResultsItem key={item.name} item={item} />
            })}
       
        </ul>
    </div>)
}

export default Results
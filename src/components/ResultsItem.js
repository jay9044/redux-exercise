import React from 'react'

function ResultsItem({item}){

    return (
            <li key={item.name}>{item.name}</li>
            )

    }
export default ResultsItem
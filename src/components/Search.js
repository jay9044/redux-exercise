import React from 'react';

function Search({characterString, handleChange , submitSearch}){
    return(
        <form onSubmit={(event) => {
        event.preventDefault()
        submitSearch(characterString)
        }}> 
        <label>Search</label>
            <input type='text' onChange={(event) => handleChange(event.target.value)} value={characterString}/>
        </form>
    )
 }


export default Search;
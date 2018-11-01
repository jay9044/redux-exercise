import React from 'react';

function Search({characterString, categoryString, handleChange, submitSearch, handleSelect}){
    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            submitSearch(characterString, categoryString)
        }}> 

             <select 
                value={categoryString}
                onChange={event => handleSelect(event.target.value)} 
                >
                <option value="people">People</option>
                <option value="vehicles">vehicles</option>
                <option value="planets">planets</option>
                <option value="films">films</option>
                <option value="species">species</option>
                <option value="starships">starships</option> 
            </select>

            <label>Search</label>
            <input 
                type='text'
                value={characterString}
                onChange={ event => handleChange(event.target.value) }
            />


        </form>
    )
 }


export default Search;
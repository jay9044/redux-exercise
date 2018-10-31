export function setCharacterString(characterString){
    console.log('SET_CHARACTER_STRING', characterString)
    return {
        type: 'SET_CHARACTER_STRING',
        characterString
    };
};

export function receiveResults(body){
   
    return {
    type: 'RECEIVE_CHARACTERS',
    characters: body.results
    }
}

export function fetchCharacters(characterString){
    return function(dispatch, getState){
        fetch(`https://swapi.co/api/people/?search=${characterString}`)
        .then(response => response.json())
        .then(body => {
            dispatch(receiveResults(body))
            dispatch(setCharacterString(""))
        })
        .catch(function(error){

        })
       
    }
}
export function setCharacterString(characterString){
    console.log('SET_CHARACTER_STRING', characterString)
    return {
        type: 'SET_CHARACTER_STRING',
        characterString
    };
};

export function setCategoryString(categoryString){
    console.log('SET_CATEGORY_STRING', categoryString)
    return {
        type: 'SET_CATEGORY_STRING',
        categoryString
    };
};

export function receiveResult(body){
    return {
        type: 'RECEIVE_CHARACTER',
        character: body.results
    }
}

export function fetchCharacters(characterString, categoryString){
    return function(dispatch, getState){
        fetch(`https://swapi.co/api/${categoryString}/?search=${characterString}`)
        .then(response => response.json())
        .then(body => {
            dispatch(receiveResult(body))
            dispatch(setCharacterString(""))
        })
        .catch(function(error){

        })
       
    }
}
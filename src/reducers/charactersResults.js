function charactersResults(state = [], action){
    switch(action.type){
        case 'RECEIVE_CHARACTERS':
            console.log('RECEIVE_CHARACTERS', action.characters)
            return action.characters
        default:
        return state
    }
}

export default charactersResults
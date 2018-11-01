function characterResult(state = {}, action){
    switch(action.type){
        case 'RECEIVE_CHARACTER':
            console.log('RECEIVE_CHARACTER', action.character)
            return action.character
        default:
        return state
    }
}

export default characterResult
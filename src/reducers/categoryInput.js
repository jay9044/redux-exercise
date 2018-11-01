function categoryInput(state = 'people', action){

  switch (action.type) {
    case 'SET_CATEGORY_STRING':
    return action.categoryString
    default:
      return state
  }
}

export default categoryInput;

import { connect } from 'react-redux'
import Search from '../components/Search'
import { setCharacterString, fetchCharacters } from '../actions';


const mapStateToProps = state => {
    return {
        characterString: state.characterInput
    }
}


const mapDispatchToProps = dispatch => {
    return {
        handleChange: characterString => dispatch(setCharacterString(characterString)) ,
        submitSearch: (characterString) => {
            console.log(characterString)
            dispatch(fetchCharacters(characterString))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);
  
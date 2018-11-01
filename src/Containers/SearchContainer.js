import { connect } from 'react-redux'
import Search from '../components/Search'
import { setCharacterString, setCategoryString, fetchCharacters } from '../actions';


const mapStateToProps = state => {
    return {
        characterString: state.characterInput,
        categoryString: state.categoryInput
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: characterString => dispatch(setCharacterString(characterString)),
        handleSelect: categoryString => dispatch(setCategoryString(categoryString)),
        submitSearch: (characterString, categoryString) => {
            // console.log(characterString)
            dispatch(fetchCharacters(characterString, categoryString))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);
  
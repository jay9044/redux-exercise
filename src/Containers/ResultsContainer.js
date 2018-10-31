import { connect } from 'react-redux'
import Results from '../components/Results'




const mapStateToProps = state => {
    return {
        characters: state.charactersResults    
    }
}

export default connect(
    mapStateToProps,
  )(Results);
  
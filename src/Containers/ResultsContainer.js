import { connect } from 'react-redux'
import Results from '../components/Results'

const mapStateToProps = state => {
    return {
        character: state.characterResult    
    }
}

export default connect(
    mapStateToProps,
  )(Results);
  
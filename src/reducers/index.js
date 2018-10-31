import { combineReducers } from 'redux';
import characterInput from './characterInput';
import charactersResults from './charactersResults'

export default combineReducers({
  characterInput,
  charactersResults
});

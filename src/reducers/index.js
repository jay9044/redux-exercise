import { combineReducers } from 'redux';
import characterInput from './characterInput';
import characterResult from './characterResult';
import categoryInput from './categoryInput'

export default combineReducers({
  characterInput,
  characterResult,
  categoryInput
});

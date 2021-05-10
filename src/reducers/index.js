//yahan all reducers ko combine kartay hain index file mn
import changeTheNumber from './udDown';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({
    changeTheNumber
})
export default rootReducer;
import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';

export default combineReducers({
    items: recipeReducer
});

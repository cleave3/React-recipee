import axios from 'axios';
import { SEARCH_RECIPES, FETCH_RECIPES } from './types';

export const fetchRecipies = async () => dispatch => {
    const res = await axios(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`);
    const data = res.json();

    dispatch({
        type: FETCH_RECIPES,
        payload: data
    })
};
 
export const searchRecipies = async (query) => dispatch => {
    const res = await axios(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}&q=${query}`);
    const data = res.json();

    dispatch({
        type: SEARCH_RECIPES,
        payload: data
    })
};
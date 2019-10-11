import axios from 'axios';
import { SEARCH_RECIPES, FETCH_RECIPES } from './types';

const PREFIX = 'https://cors-anywhere.herokuapp.com';
const API_KEY = '052e9d1c13ebd75a5305709b27547e88';
export const fetchRecipes = () => async dispatch => {
    const data = await axios(
        `${PREFIX}/https://www.food2fork.com/api/search?key=${API_KEY}`
    );
    console.log('fetch called');

    dispatch({
        type: FETCH_RECIPES,
        payload: data
    });
};

export const searchRecipes = query => async dispatch => {
    const data = await axios(
        `${PREFIX}/https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`
    );
    console.log('search called');
    console.log(data);
    dispatch({
        type: SEARCH_RECIPES,
        payload: data
    });
};

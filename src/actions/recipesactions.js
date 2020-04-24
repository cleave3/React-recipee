import axios from 'axios';
import { SEARCH_RECIPES, GET_DETAILS, SEARCH_FAILED, GET_DETAILS_FAILED, GET_SIMILAR_FAILED, LOADING } from './types';

const key = 'apiKey=9dabead26b34449e87503b1434e1122f';
const baseurl = 'https://api.spoonacular.com/recipes/';

export const setLoading = () => dispatch => {
    dispatch({ type: LOADING, payload: true });
};

export const searchRecipes = (query, offset, number) => async dispatch => {
    try {
        const data = await axios(`${baseurl}/search?query=${query}&offset=${offset}&number=${number}&${key}`);
        dispatch({ type: SEARCH_RECIPES, payload: data });
    } catch (error) {
        dispatch({ type: SEARCH_FAILED, payload: error });
    }
};

export const getRecipeDetail = id => async dispatch => {
    try {
        const data = await axios(`${baseurl}/${id}/information?includeNutrition=false&${key}`);
        dispatch({ type: GET_DETAILS, payload: data });
    } catch (error) {
        dispatch({ type: GET_DETAILS_FAILED, payload: error });
    }
};

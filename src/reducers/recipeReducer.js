import { SEARCH_RECIPES, FETCH_RECIPES } from '../actions/types';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                items: action.payload
            };
        case SEARCH_RECIPES:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};

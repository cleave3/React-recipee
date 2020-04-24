import { SEARCH_RECIPES, GET_DETAILS, SEARCH_FAILED, GET_DETAILS_FAILED, LOADING } from '../actions/types';

const initialState = {
    recipies: [],
    searcherror: false,
    detail: [],
    loading: true,
    detailerror: false,
    similar: [],
    similarerror: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCH_RECIPES:
            return {
                ...state,
                recipies: action.payload,
                searcherror: false,
                loading: false
            };
        case SEARCH_FAILED:
            return {
                ...state,
                searcherror: true,
                loading: false
            };
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
                detailerror: false,
                loading: false
            };

        case GET_DETAILS_FAILED:
            return {
                ...state,
                detailerror: true,
                loading: false
            };

        default:
            return state;
    }
};

import { SEARCH_RECIPES, GET_DETAILS, SEARCH_FAILED, GET_DETAILS_FAILED, LOADING, GET_RANDOM, GET_RANDOM_FAILED } from '../actions/types';

const initialState = {
    loading: true,
    recipies: [],
    detail: [],
    random: [],
    detailerror: false,
    searcherror: false,
    randomerror: false
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

        case GET_RANDOM:
            return {
                ...state,
                random: action.payload,
                randomerror: false,
                loading: false
            };

        case GET_RANDOM_FAILED:
            return {
                ...state,
                randomerror: true,
                loading: false
            };

        default:
            return state;
    }
};

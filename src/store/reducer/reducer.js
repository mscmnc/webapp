import * as actionTypes from '../actions/actionTypes';
import shortId from 'shortid';

const initialState = {
    data: null,
    query: null,
    loading: true,
    savedQuery: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case actionTypes.SEARCH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.SAVE_QUERY:
        return {
            ...state,
            savedQuery: state.savedQuery.concat({id: shortId.generate() ,query: action.savedQuery})
        };
        case actionTypes.DELETE_QUERY:
            const updatedQueries = state.savedQuery.filter( result => result.id !== action.delId ); 
            return {            
                ...state,
                savedQuery: updatedQueries
            };
        default:
        return state;
    }
}

export default reducer;
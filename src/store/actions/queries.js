import * as actionTypes from './actionTypes'; 

export const savedQuery = (savedQuery) => {
    return {
        type: actionTypes.SAVE_QUERY,
        savedQuery: savedQuery
    };
};

export const deleteQuery = (deleteId) => {
    return {
        type: actionTypes.DELETE_QUERY,
        delId: deleteId
    };
};
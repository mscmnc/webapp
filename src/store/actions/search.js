import * as actionTypes from './actionTypes'; 
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export const searchStart = () => {
    return {
        type: actionTypes.SEARCH_START
    };
};

export const searchSuccess = (data) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        data: data,
        loading: false
    };
};

export const searchFail = (error) => {
    return {
        type: actionTypes.SEARCH_FAIL,
        error: error,
        loading: false
    };
};

export const getRandom = () => {
    return dispatch => {
        dispatch(searchStart());

        axios({
            method: 'GET',
            url: 'https://api.unsplash.com/photos/random/?client_id='+API_KEY,
            params: {'count': '12', orientation: 'landscape'}
        }).then( response => {
            dispatch(searchSuccess(response.data));
        }).catch( error => {
            dispatch(searchFail());
        })

    } 
}

export const getResultsBySearch = (query) => {
    return dispatch => {
        dispatch(searchStart());

        axios({
            method: 'GET',
            url: 'https://api.unsplash.com/search/photos/?client_id='+API_KEY,
            params: {'per_page': '12', orientation: 'landscape', query: query }
        }).then( response => {
            console.log('Lietuva');
            dispatch(searchSuccess(response.data.results));
        }).catch( error => {
            dispatch(searchFail());
        })

    }
}
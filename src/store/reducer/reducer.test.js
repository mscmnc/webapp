import reducer from './reducer';
import * as actionTypes from '../actions/actionTypes';

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: null,
            query: null,
            loading: true,
            savedQuery: [],
            error: null
        });
    });;

    it('should store data if search is succeeded', () => {
        expect(reducer({
            data: null,
            query: null,
            loading: true,
            savedQuery: [],
            error: null
        }, {
            type: actionTypes.SEARCH_SUCCESS,
            data: 'some-data'
        })).toEqual({
            data: 'some-data',
            query: null,
            loading: false,
            savedQuery: [],
            error: null
        });
    }); 
});
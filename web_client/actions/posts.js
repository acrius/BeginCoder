import {SET_SELECTED_FILTERS,
        SET_SELECTED_SORTING,
        SET_SELECTED_PAGE,
        GET_POSTS_REQUEST,
        GET_POSTS_SUCCESS,
        GET_POSTS_FAILED,
        GET_FILTERS_REQUEST,
        GET_FILTERS_SUCCESS,
        GET_FILTERS_FAILED,
        GET_SORTINGS_REQUEST,
        GET_SORTINGS_SUCCESS,
        GET_SORTINGS_FAILED} from '../constants/posts.js'
import {POSTS_QUERY_STRING,
        FILTERS_QUERY_STRING,
        SORTINGS_QUERY_STRING} from '../constants/queries.js'

const actionOfQueryOptions = {
    'selectedFilters': SET_SELECTED_FILTERS,
    'selectedSorting': SET_SELECTED_SORTING,
    'selectedPage': SET_SELECTED_PAGE
};

export function getFilters() {
    return (dispatch) => {
        dispatch({
            type: GET_FILTERS_REQUEST
        });

        try {
            filters = fetch(FILTERS_QUERY_STRING).then(response => response.json());

            dispatch({
                type: GET_FILTERS_SUCCESS,
                payload: filters
            });

        } catch(e) {
            dispatch({
                type: GET_FILTERS_FAILED,
                payload:new Error(e)
            });
        }
    }
}

export function getSortings() {
    return (dispatch) => {
        dispatch({
            type: GET_SORTINGS_REQUEST
        });

        try {
            sortings = fetch(SORTINGS_QUERY_STRING).then(response => response.json).results;

            dispatch({
                type: GET_SORTINGS_SUCCESS,
                payload: sortings
            });
        } catch(e) {
            dispatch({
                type: GET_SORTINGS_FAILED,
                payload: new Error(e)
            });
        }
    }
}

export function setSelectedQueryOptions(optionName, optionValue) {
    return (dispatch, getState) => {
        dispatch({
            type: actionOfQueryOptions[optionName],
            payload: optionValue
        });

        currentState = getState();

        queryOptions = {};
        for (stateField in actionOfQueryOptions) {
            queryOptions[stateField] = stateField == optionName ? optionValue : currentState[stateField];
        }

        getPostsWithOptions(dispatch, quieryOptions);
    }
}

export function getPosts(queryOptions) {
    return (dispatch) => {
        getPostsWithOptions(dispatch, quieryOptions);
    }
}

function getPostsWithOptions(dispatch, quieryOptions) {
    dispatch({
        type: GET_POSTS_REQUEST,
        payload: queryOptions
    });

    try {
        data = loadPosts(queryOptions);

        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: data
        });
    } catch(e) {
        dispatch({
            type: GET_POSTS_FAILED,
            error: true,
            payload: new Error(e)
        });
    }
}

function loadPosts(queryOptions) {
    return fetch(POSTS_QUERY_STRING + getOptionsString(queryOptions)).then(response => response.json());
}

function getOptionsString(queryOptions) {
    const pageString = queryOptions.selectedPage ? '?page=' + queryOptions.selectedPage : '?';
    const sortString = 'sort=' + queryOptions.sorting;
    const filterStrings = queryOptions.length > 0 ? '&filter=[' + queryOptions.filters.join(',') + ']' : '';

    return pageString + sortString + filterString;
}

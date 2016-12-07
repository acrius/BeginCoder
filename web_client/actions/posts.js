import {SET_SELECTED_FILTERS,
        SET_SELECTED_SORTING,
        GET_POSTS_REQUEST,
        GET_POSTS_SUCCESS,
        GET_POSTS_FAILED} from '../constants/posts.js'
import {POSTS_QUERY_STRING} from '../constants/queries.js'

export function setSelectedFilters(selectedFilters) {
    return {
        type: SET_SELECTED_FILTERS,
        payload: selectedFilters
    };
}

export function setSelectedSorting(selectedSorting) {
    return {
        type: SET_SELECTED_SORTING,
        payload: selectedSorting
    };
}

function getOptionsString(queryOptions) {
    const pageString = queryOptions.selectedPage ? '?page=' + queryOptions.selectedPage : '?';
    const sortString = 'sort=' + queryOptions.sorting;
    const filterStrings = queryOptions.length > 0 ? '&filter=[' + queryOptions.filters.join(',') + ']' : '';

    return pageString + sortString + filterString;
}

function loadPosts(queryOptions) [
    return fetch(POSTS_QUERY_STRING + getOptionsString(queryOptions)).then(response => response.json());
]

export function getPosts(queryOptions) {
    return (dispatch) => {
        dispatch({
            type: GET_POSTS_REQUEST,
            payload: queryOptions
        });

        try {
            data = loadPosts(queryOptions);

            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: data
            })
        catch(e) {
            dispatch({
                type: GET_POSTS_FAILED,
                error: true,
                payload: new Error(e)
            })
        }

    };
}

import {GET_POSTS_REQUEST,
        GET_POSTS_SUCCESS,
        GET_POSTS_FAILED} from '../constants/PostsConstants.js'
import {POSTS_QUERY_STRING} from '../../main/constants/QueriesConstants.js'

export function getPosts() {
    return (dispatch, getState) => {
        getPostsWithOptions(dispatch, getState);
    }
}

export function getPostsWithOptions(dispatch, getState) {
    const queryOptions = getStateOfQueryOptions(getState());
    dispatch({
        type: GET_POSTS_REQUEST,
        payload: queryOptions
    });

    try {
        loadPosts(queryOptions).then( postsData =>
                                        dispatch({
                                            type: GET_POSTS_SUCCESS,
                                            payload: postsData
                                        })
                                    );
    } catch(e) {
        dispatch({
            type: GET_POSTS_FAILED,
            error: true,
            payload: new Error(e)
        });
    }
}

export function getStateOfQueryOptions(state) {
    return {
        selectedSorting: state.sortings.selectedSorting,
        selectedFilters: state.filters.selectedFilters,
        selectedPage: state.pages.selectedPage
    };
}

function loadPosts(queryOptions) {
    return fetch(POSTS_QUERY_STRING + getOptionsString(queryOptions)).then(response => response.json());
}

function getOptionsString(queryOptions) {
    const pageString = queryOptions.selectedPage ? '?page=' + queryOptions.selectedPage + "&" : '?';
    const sortString = 'sorting=' + queryOptions.selectedSorting;
    const filtersString = queryOptions.selectedFilters.length > 0 ? '&filters=[' + queryOptions.selectedFilters.join(',') + ']' : '';

    return pageString + sortString + filtersString;
}

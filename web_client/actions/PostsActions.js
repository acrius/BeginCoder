import {GET_POSTS_REQUEST,
        GET_POSTS_SUCCESS,
        GET_POSTS_FAILED} from '../constants/posts/PostsConstants.js'
import {POSTS_QUERY_STRING} from '../constants/QueriesConstants.js'

export function getPosts() {
    return (dispatch, getState) => {
        getPostsWithOptions(dispatch, getStateOfQueryOptions(getState()));
    }
}

export function getStateOfQueryOptions(state) {
    return {
        selectedSorting: state.sortings.selectedSorting,
        selectedFilters: state.filters.selectedFilters,
        selectedPage: state.pages.selectedPage
    };
}

export function getPostsWithOptions(dispatch, queryOptions) {
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

function loadPosts(queryOptions) {
    return fetch(POSTS_QUERY_STRING + getOptionsString(queryOptions)).then(response => response.json());
}

function getOptionsString(queryOptions) {
    const pageString = queryOptions.selectedPage ? '?page=' + queryOptions.selectedPage : '?';
    const sortString = 'sort=' + queryOptions.sorting;
    const filtersString = queryOptions.length > 0 ? '&filter=[' + queryOptions.filters.join(',') + ']' : '';

    return pageString + sortString + filtersString;
}

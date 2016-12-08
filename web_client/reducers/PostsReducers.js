import {combineReducers} from 'redux'
import {GET_POSTS_REQUEST,
        GET_POSTS_SUCCESS,
        GET_POSTS_FAILED,
        GET_FILTERS_REQUEST,
        GET_FILTERS_SUCCESS,
        GET_FILTERS_FAILED,
        GET_SORTINGS_REQUEST,
        GET_SORTINGS_SUCCESS,
        GET_SORTINGS_FAILED,
        SET_SELECTED_PAGE,
        SET_SELECTED_SORTING,
        SET_SELECTED_FILTERS} from '../constants/PostsConstants.js'

const postsInitialState = {
    posts: [],
    selectedSorting: '-date',
    selectedFilters: [],
    postsFetching: false,
    postsError: '',
    selectedPage: 1,
    countPage: 1
};

const filtersInitialState = {
    filters: [],
    filtersFetching: false,
    filtersError: ''
}

const sortingsIntitalState = {
    sortings: [],
    sortingsFetching: false,
    sortingsError: ''
}

const postInitialsState = {
    id: 0,
    title: '',
    date: null,
    content: '',
    views: 0,
    useful: 0
}

function posts(state = postsInitialState, action) {
    let newState = state;
    switch (action.type) {
        case GET_POSTS_REQUEST:
            newState = {
                ...state,
                selectedSorting: action.payload.selectedSorting,
                selectedFilters: action.payload.selectedFilters,
                selectedPage: action.payload.selectedPage,
                postsFetching: true,
                postsError: ''
            };
            break;
        case GET_POSTS_SUCCESS:
            newState = {
                ...state,
                posts: action.payload.results,
                countPage: action.payload.countPage,
                postsFetching: false,
                postsError: ''
            };
            break;
        case GET_POSTS_FAILED:
            newState = {
                ...state,
                postsError: action.payload.message,
                postsFetching:false
            };
            break;
        case SET_SELECTED_FILTERS:
            newState = {
                ...state,
                selectedFilters: action.payload
            };
            break;
        case SET_SELECTED_SORTING:
            newState = {
                ...state,
                selectedSorting: action.payload
            };
            break;
        case SET_SELECTED_PAGE:
            newState = {
                ...state,
                selectedPage: action.payload
            };
            break;
    }
    return newState;
}

function filters(state = sortingsIntitalState, action) {
    let newState = state;
    switch (action.type) {
        case GET_FILTERS_REQUEST:
            newState = {
                ...state,
                filtersFetching: true,
                filtersError: ''
            };
            break;
        case GET_FILTERS_SUCCESS:
            newState = {
                ...state,
                filters: action.payload,
                filtersFetching: false,
                filtersError: ''
            };
            break;
        case GET_FILTERS_FAILED:
            newState = {
                ...state,
                filtersFetching: false,
                filtersError: action.payload.message
            };
            break;
    }
    return newState;
}

function sortings(state = postInitialsState, action) {
    let newState = state;
    switch (action.type) {
        case GET_SORTINGS_REQUEST:
            newState = {
                ...state,
                sortingsFetching: true,
                sortingsError: ''
            };
            break;
        case GET_SORTINGS_SUCCESS:
            newState = {
                ...state,
                sortings: action.payload,
                sortingsFetching: false,
                sortingsError: ''
            };
            break;
        case GET_SORTINGS_FAILED:
            newState = {
                ...state,
                sortingsFetching: false,
                sortingsError: action.payload.message
            }
            break;
    }
    return newState;
}

export default combineReducers({posts, filters, sortings});

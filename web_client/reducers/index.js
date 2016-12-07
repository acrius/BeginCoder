import {combineReducers} from 'redux'
import {GET_POSTS_REQUEST, GET_POSTS_REQUEST, GET_POSTS_FAILED} from '../constants/posts.js'

const postsInitialState = {
    posts: [],
    selectedSorting: '-date',
    selectedFilters: [],
    fetching: false,
    error: '',
    selectedPage: 1,
    countPage: 1
};

const filtersInitialState = {
    filters: []
}

const sortingsIntitalState = {
    sortings: []
}

const postInitialsState = {
    id: 0,
    title: '',
    date: null,
    content: '',
    views: 0,
    useful: 0
}

posts = function(state = postsInitialState, action) {
    let newState;
    switch (action.type) {
        case GET_POSTS_REQUEST:
            newState = {
                ...state,
                selectedSorting: action.payload.selectedSorting,
                selectedFilters: action.payload.selectedFilters,
                selectedPage:action.payload.selectedPage,
                fetching: true,
                error: ''
            };
            break;
        case GET_POSTS_SUCCESS:
            newState = {
                ...state,
                posts: action.payload.results,
                countPage: action.payload.countPage,
                fetching: false,
                error: ''
            };
            break;
        case GET_POSTS_FAILED:
            newState = {
                ...state,
                error: action.payload.message, fetching:false
            };
            break;
        default:
            newState = state;
    }
    return newState;
}

filters = function(state = filtersInitialState) {
    return state;
}

sortings = function(state = sortingsIntitalState) {
    return state;
}

post = function(state = postInitialsState) {
    return state;
}

export default combineReducers({posts, filters, sortings, post});

import {GET_POSTS_REQUEST,
        GET_POSTS_SUCCESS,
        GET_POSTS_FAILED} from '../constants/PostsConstants.js'

const postsInitialState = {
    posts: [],
    postsFetching: false,
    postsError: ''
};

export default (state = postsInitialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_POSTS_REQUEST:
            newState = {
                postsFetching: true,
                postsError: ''
            };
            break;
        case GET_POSTS_SUCCESS:
            newState = {
                posts: action.payload.results,
                postsFetching: false,
                postsError: ''
            };
            break;
        case GET_POSTS_FAILED:
            newState = {
                postsError: action.payload.message,
                postsFetching: false
            };
            break;
    }
    return {
        ...state,
        ...newState
    };
}

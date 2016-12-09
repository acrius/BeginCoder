import {GET_POST_REQUEST,
        GET_POST_SUCCESS,
        GET_POST_FAILED} from '../constants/PostConstants.js'

const postInitialsState = {
    id: 0,
    title: '',
    date: null,
    content: '',
    views: 0,
    useful: 0,
    fetching: false,
    error: ''
}


export default (state = postInitialsState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_POST_REQUEST:
            newState = {
                fetching: true,
                id: action.payload
            };
            break;
        case GET_POST_SUCCESS:
            newState = {
                ...action.payload,
                fetching: false
            }
        case GET_POST_FAILED:
            newState = {
                error: action.payload.message,
                fetching: false
            }
    }
    return {
        ...state,
        ...newState
    };
}

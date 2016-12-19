import {LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_ERROR} from '../constants/UserConstants.js'

const userInitialState = {
        user: null,
        userFetching: false,
        userError: false,
        isAuthentificated: false
};

export default (state = userInitialState, action) => {
    let newState = {};
    switch (action.type) {
        case LOGIN_REQUEST:
            newState = {
                userFetching: true,
                error: false
            };
            break;
        case LOGIN_SUCCESS:
            newState = {
                user: action.payload,
                userFetching: false,
                error: false
            };
            break;
        case LOGIN_ERROR:
            newState = {
                userFetching: false,
                userError: true
            };
            break;
    }
    return {
        ...state,
        ...newState
    };
}

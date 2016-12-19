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
                isAuthentificated: false,
                userError: false
            };
            break;
        case LOGIN_SUCCESS:
            newState = {
                user: action.payload,
                userFetching: false,
                isAuthentificated: true,
                userError: false
            };
            break;
        case LOGIN_ERROR:
            newState = {
                userFetching: false,
                isAuthentificated: false,
                userError: true
            };
            break;
    }
    return {
        ...state,
        ...newState
    };
}

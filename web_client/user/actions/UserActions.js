import {LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        VK_CONNECTED} from '../constants/UserConstants.js'


export function login() {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_REQUEST,
            error: false
        });
        VK.Auth.login((request) => {
            if (request.session) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: request.session.user,
                    error: false,
                });
                updateUser(getState);
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: 'Ошибка авторизации',
                    error: true
                });
            }
        });
    }
}

export function getLoginStatus() {
    return (dispatch, getState) => {
        VK.Auth.getLoginStatus((session, status) => {
            console.log(status);
            if (status === VK_CONNECTED) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: session.user,
                    error: false,
                });
                updateUser(getState);
            }
        });
    }
}

function updateUser(getState) {
    state = getState();
}

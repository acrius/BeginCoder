import {LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        VK_CONNECTED} from '../constants/UserConstants.js'


export function login() {
    return (dispatch, getState) => {
        fetch('/api/v01/accounts/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 1,
                name: 'yeah'
            })
        });
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
        VK.Auth.getLoginStatus((request) => {
            if (request.status === VK_CONNECTED) {
                VK.Api.call('users.get', {uid: request.session.mid}, (urequest) => {
                    console.log(urequest);
                });
            }
        });
    }
}

function updateUser(getState) {
    const state = getState();
}

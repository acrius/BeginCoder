import {GET_POST_REQUEST,
        GET_POST_SUCCESS,
        GET_POST_FAILED} from '../constants/PostConstants.js'
import {POSTS_QUERY_STRING} from '../../main/constants/QueriesConstants.js'

export function getPost(postId) {
    return (dispatch) => {
        dispatch({
            type: GET_POST_REQUEST,
            payload: postId
        });

        try {
            fetch(POSTS_QUERY_STRING + postId + '/').then( response => response.json())
                                                    .then( post => dispatch({
                                                        type: GET_POST_SUCCESS,
                                                        payload: post
                                                    }));
        } catch(e) {
            dispatch({
                type: GET_POST_FAILED,
                payload: new Error(e)
            });
        }
    }
}

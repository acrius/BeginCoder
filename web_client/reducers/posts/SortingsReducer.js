import {GET_SORTINGS_REQUEST,
        GET_SORTINGS_SUCCESS,
        GET_SORTINGS_FAILED,
        SET_SELECTED_SORTING} from '../../constants/posts/SortingsConstants.js'


const sortingsIntitalState = {
    sortings: [],
    selectedSorting: '-date',
    sortingsFetching: false,
    sortingsError: ''
}

export default (state = postInitialsState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_SORTINGS_REQUEST:
            newState = {
                sortingsFetching: true,
                sortingsError: ''
            };
            break;
        case GET_SORTINGS_SUCCESS:
            newState = {
                sortings: action.payload.results,
                sortingsFetching: false,
                sortingsError: ''
            };
            break;
        case GET_SORTINGS_FAILED:
            newState = {
                sortingsFetching: false,
                sortingsError: action.payload.message
            }
            break;
        case SET_SELECTED_SORTING:
            newState = {
                selectedSorting: action.payload
            };
            break;
    }
    return {
        ...state,
        ...newState
    };
}

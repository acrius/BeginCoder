import {GET_FILTERS_REQUEST,
        GET_FILTERS_SUCCESS,
        GET_FILTERS_FAILED,
        SET_SELECTED_FILTERS} from '../../constants/posts/FiltersConstants.js'

const filtersInitialState = {
    filters: [],
    selectedFilters: [],
    filtersFetching: false,
    filtersError: ''
}

export default(state = sortingsIntitalState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_FILTERS_REQUEST:
            newState = {
                filtersFetching: true,
                filtersError: ''
            };
            break;
        case GET_FILTERS_SUCCESS:
            newState = {
                filters: action.payload.results,
                filtersFetching: false,
                filtersError: ''
            };
            break;
        case GET_FILTERS_FAILED:
            newState = {
                filtersFetching: false,
                filtersError: action.payload.message
            };
            break;
        case SET_SELECTED_FILTERS:
            newState = {
                selectedFilters: action.payload
            };
            break;
    }
    return {
        ...state,
        ...newState
    };
}

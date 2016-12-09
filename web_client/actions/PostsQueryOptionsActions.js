import {SET_SELECTED_FILTERS,
        GET_FILTERS_REQUEST,
        GET_FILTERS_SUCCESS,
        GET_FILTERS_FAILED} from '../constants/posts/FiltersConstants.js'
import {SET_SELECTED_SORTING,
        GET_SORTINGS_REQUEST,
        GET_SORTINGS_SUCCESS,
        GET_SORTINGS_FAILED} from '../constants/posts/SortingsConstants.js'
import {SET_SELECTED_PAGE} from '../constants/posts/PagesConstants.js'
import {FILTERS_QUERY_STRING,
        SORTINGS_QUERY_STRING} from '../constants/QueriesConstants.js'
import {getStateOfQueryOptions, getPostsWithOptions} from './PostsActions.js'

const actionsOfQueryOptions = {
    selectedFilters: SET_SELECTED_FILTERS,
    selectedSorting: SET_SELECTED_SORTING,
    selectedPage: SET_SELECTED_PAGE
};

const relationsActionsOptions = {
    filters: {
        query: FILTERS_QUERY_STRING,
        request: GET_FILTERS_REQUEST,
        success: GET_FILTERS_SUCCESS,
        failed: GET_FILTERS_FAILED
    },
    sortings: {
        query: SORTINGS_QUERY_STRING,
        request: GET_SORTINGS_REQUEST,
        success: GET_SORTINGS_SUCCESS,
        failed: GET_SORTINGS_FAILED
    }
};

export function getOptions(optionsName) {
    return (dispatch) => {
        dispatch({
            type: relationsActionsOptions[optionsName].request
        });

        try {
            fetch(relationsActionsOptions[optionsName].query).then(response => response.json())
                                                                .then( options =>
                                                                    dispatch({
                                                                        type: relationsActionsOptions[optionsName].success,
                                                                        payload: options
                                                                    })
                                                                );
        } catch(e) {
            dispatch({
                type: relationsActionsOptions[optionsName].failed,
                payload:new Error(e)
            });
        }
    }
}

export function setSelectedQueryOptions(optionName, optionValue) {
    return (dispatch, getState) => {
        dispatch({
            type: actionsOfQueryOptions[optionName],
            payload: optionValue
        });

        let queryOptions = getStateOfQueryOptions(getState());
        queryOptions[optionName] = optionValue;

        getPostsWithOptions(dispatch, quieryOptions);
    }
}

import {SET_SELECTED_PAGE} from '../constants/PagesConstants.js'

const pagesInitialState = {
    selectedPage: 1,
    countPage: 1
};

export default (state = pagesInitialState, action) => {
    let newState = {};
    switch (action.type) {
        case SET_SELECTED_PAGE:
            newState = {
                selectedPage: action.payload
            };
            break;
    }
    return {
        ...state,
        ...newState
    };
}

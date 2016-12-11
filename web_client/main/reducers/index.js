import {combineReducers} from 'redux'

import posts from '../../posts/reducers/PostsReducer.js'
import sortings from '../../posts/reducers/SortingsReducer.js'
import filters from '../../posts/reducers/FiltersReducer.js'
import pages from '../../posts/reducers/PagesReducer.js'

import post from '../../post/reducers/PostReducer.js'

export default combineReducers({posts, sortings, filters, pages, post});

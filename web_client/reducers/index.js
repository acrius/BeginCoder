import {combineReducers} from 'redux'

import posts from './posts/PostsReducer.js'
import sortings from './posts/SortingsReducer.js'
import filters from './posts/FiltersReducer.js'
import pages from './posts/PagesReducer.js'
import post from './PostsReducer.js'


export default combineReducers({posts, sortings, filters, pages, post});

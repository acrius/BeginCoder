import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {App, ContentPost, ContentPostList} from './components'
import configure_store from './store/configure_store.js'

const store = configure_store();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={ContentPostList}/>
                <Route path='/:post_id' component={ContentPost}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('application'));

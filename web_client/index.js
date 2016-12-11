import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import PostsPage from './posts/containers'
import PostPage from './post/containers'
import {App} from './main/components'
import configure_store from './main/store/configureStore.js'

const store = configure_store();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={PostsPage}/>
                <Route path='/:post_id' component={PostPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('application'));

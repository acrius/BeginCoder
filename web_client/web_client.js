import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Posts from './containers/PostsContainer.js'
import {App} from './components'
import configure_store from './store/configureStore.js'

const store = configure_store();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Posts}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('application'));

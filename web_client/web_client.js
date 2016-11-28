import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App, Post, PostList } from './components'

render (
    <Router history={ browserHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ PostList } />
            <Route path='/:post_id' component={ Post } />
        </Route>
    </Router>,
    document.getElementById('application')
);

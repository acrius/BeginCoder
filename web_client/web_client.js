import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App, ContentPost, ContentPostList } from './components'

render (
    <Router history={ browserHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ ContentPostList } />
            <Route path='/:post_id' component={ ContentPost } />
        </Route>
    </Router>,
    document.getElementById('application')
);

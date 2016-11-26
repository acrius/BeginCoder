import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { BaseLayout } from '../../layouts/BaseLayout'
import List from '../List'
import Post from '../Post'

class App extends Component {
  render(){
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ BaseLayout }>
          <IndexRoute component={ List } />
          <Route path=":post_id" component={ Post } />
        </Route>
      </Router>
    );
  }
}

export default App

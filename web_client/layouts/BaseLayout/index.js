import React from 'react'
import { IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const BaseLayout = ({ children, location }) => (
  <div>
    <div>
      <header>
        <div>
            <IndexLink to="/">BeginCoder</IndexLink>
        </div>
      </header>
      <ReactCSSTransitionGroup
        component="div"
        transitionName="app__content__page"
        transitionTimeout={500}
        transitionTimeout={500}>
        {React.cloneElement(children, {
          key: loaction.pathname
        })}
      </ReactCSSTransitionGroup>
    </div>
    <footer>
      @ acrius 2016
    </footer>
  </div>
)

export default BaseLayout

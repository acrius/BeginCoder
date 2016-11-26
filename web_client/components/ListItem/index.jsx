import React, { Component } from 'react'
import { Link } from 'react-router'
import { fromat_date } from '../../utils'

class ListItem extends Component {
  render() {
    return (
      <div>
        <h4>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </h4>
        <p className="time">{ fromat_date(post['created_at'])}</p>
        <article dangerouslySetInnerHTML={{__html: post['announce']}}/>
      </div>
    )
  }
}

export default ListItem

import React, { Component } from 'react'
import { Link } from 'react-router'

class Post extends Component {
  state = {
    title: '',
    date: '',
    text: ''
  };


  loadPost(post_id) {
    fetch('/api_v01/posts/${post_id}/')
          .then(response => response.json())
          .then(data => {
            this.setState(data)
          });
  }

  componentDidMount() {
    this.loadPost(this.props.params['post_id']);
  }

  render() {
    const { title, date, text } = this.state;
    return(
      <div>
        <h4>{ title }</h4>
        <article dangerouslySetInnerHTML={{__html: text}}/>
        <Link to="/">All posts</Link>
      </div>
    );
  }
}

export default Post

import React, { Component } from 'react'

class List extends Component {

  state = {
    posts: []
  };

  async loadPosts(){
    this.setState({
      posts: await fetch("/api_v01/posts/").then(response => response.json())
    })
  }

  componentDidMount(){
    this.loadPosts();
  }

  render(){
    return(
      <ul>
        {this.state.posts.map((post, index) => (
          <li key={ index }>
            {post.title}
          </li>
        ))}
      </ul>
    )
  }
}

export default List

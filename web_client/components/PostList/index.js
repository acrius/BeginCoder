import React, { Component } from 'react'

class PostlList extends Component {

    state = {
        posts: []
    };

    async load_posts() {
        this.setState({
            posts: await fetch('/api/v01/posts/').then(response => response.json())
        });
    }

    componentDidMount() {
        this.load_posts();
    }

    render() {
        return (
            <ul>
                {this.state.posts.map((post, index) => (
                    <li>{ post.title }</li>
                ))}
            </ul>
        );
    }
}

export default PostlList

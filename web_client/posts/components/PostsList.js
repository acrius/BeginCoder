import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
import PostListItem from './PostsListItem.js'

class PostList extends Component {
    render() {
        return (
            <Col md={9}>
                {this.props.posts.map((post, index) => (
                    <PostListItem postItem={post} key={index}/>
                ))}
            </Col>
        );
    }
}

export default PostList

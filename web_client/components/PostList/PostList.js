import React, {Component} from 'react'
import {Col} from 'react-bootstrap'
import PostItem from './PostListItem.js'

class PostList extends Component {
    render() {
        return (
            <Col md={9}>
                {this.param.posts.map((post, index) => (

                ))}
            </Col>
        );
    }
}

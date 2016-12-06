import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row} from 'react-bootstrap'

import Post from './post.js'

class ContentPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    loadPost(post_id) {
        fetch('/api/v01/posts/${post_id}/').then(response => response.json())
                                           .then(data => this.setState({post: data}));
    }

    componentDidMount() {
        this.loadPost(this.props.params['post_id']);
    }

    render() {
        const {title, date, text} = this.state;
        return (
            <Row>
                <Post post={this.state.post}/>
            </Row>
        );
    }
}

export default ContentPost

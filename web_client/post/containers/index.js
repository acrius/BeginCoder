import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import * as PostActions from '../actions/PostActions.js'
import Post from '../components/Post.js'

class PostPage extends Component {
    componentDidMount() {
        this.props.postActions.getPost(this.props.params.post_id);
    }

    render() {
        return (
            <Row>
                <Post post={this.props.post} actions={this.props.postActions} />
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(PostActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import * as postsActions from '../actions/PostsActions.js'

import PostList from '../components/Content/PostList/post_list.js'

class Posts extends Component {
    componentDidMount() {
        this.props.postsActions.getPosts();
    }

    render() {
        const postsData = this.props.posts;
        const getPosts = this.props.postsActions.getPosts;
        return (
            <Grid>
                <Row>
                    <PostList posts={postsData.posts} fetching={postsData.postsFetching} />
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        postsFetching: state.postsFetching,
        filters: state.filters,
        sortings: state.sortings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postsActions: bindActionCreators(postsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

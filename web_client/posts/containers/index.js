import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import * as postsActions from '../actions/PostsActions.js'
import * as postsQueryOptionsActions from '../actions/PostsQueryOptionsActions.js'

import PostsList from '../components/PostsList.js'
import AuxPanel from '../components/AuxPanel.js'

import './style.styl'

class PostsPage extends Component {
    componentDidMount() {
        this.props.postsActions.getPosts();
    }

    render() {
        const postsData = this.props.posts;
        const getPosts = this.props.postsActions.getPosts;

        return (
            <Row className='content'>
                <PostsList posts={postsData.posts} fetching={postsData.postsFetching} />
                <AuxPanel actions={this.props.postsQueryOptionsActions} filters={this.props.filters} sortings={this.props.sortings} />
            </Row>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        pages: state.pages,
        filters: state.filters,
        sortings: state.sortings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postsActions: bindActionCreators(postsActions, dispatch),
        postsQueryOptionsActions: bindActionCreators(postsQueryOptionsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage)

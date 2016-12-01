import React, { Component } from 'react'
import {Grid, Row} from 'react-bootstrap'
import PostList from './post_list.js'

class ContentPostList extends Component {
    state = {
        posts: []
    };

    async load_posts() {
        const data = await fetch('/api/v01/posts/').then(response => response.json());
        this.setState({
            posts: data.courses
        });
    }

    componentDidMount() {
        this.load_posts();
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PostList posts={this.state.posts}/>
                </Row>
            </Grid>
        );
    }
}

export default ContentPostList

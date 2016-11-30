import React, { Component } from 'react'
import {Grid, Row} from 'react-bootstrap'
import PostList from './post_list.js'

class ContentPostList extends Component {
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
            <Grid>
                <Row>
                    <Postlist posts={this.state.posts}/>
                </Row>
            </Grid>
        );
    }
}

export default ContentPostList
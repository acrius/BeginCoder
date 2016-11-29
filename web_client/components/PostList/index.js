import React, { Component } from 'react'
import {Grid, Row} from 'react-bootstrap'

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
            <Grid>
                <Row>
                    
                </Row>
            </Grid>
            <ul>
                {this.state.posts.map((post, index) => (
                    <li>{ post.title }</li>
                ))}
            </ul>
        );
    }
}

export default PostlList

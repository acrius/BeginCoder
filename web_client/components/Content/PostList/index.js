import React, { Component } from 'react'
import {Grid, Row} from 'react-bootstrap'
import PostList from './post_list.js'
import AuxPanel from './aux_panel.js'

class ContentPostList extends Component {
    state = {
        posts: [],
        sorting: '-date',
        filters: []
    };

    async load_posts() {
        const query_string = '/api/v01/posts/';
        const query_options_string = this.get_params_string();
        const data = await fetch(query_string + query_options_string).then(response => response.json());
        this.setState({
            posts: data.results
        });
    }

    get_params_string() {
        const sort_string = '?sort=' + this.state.sorting;
        const filter_string = this.state.filters.length > 0 ? '&filter=[' + this.state.filters.join(',') + ']' : '';
        return sort_string + filter_string;
    }

    set_query_options = (sorting, filters) => {
        this.setState({
            sorting: sorting,
            filters: filters
        }, () => {
            this.load_posts();
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
                    <AuxPanel set_query_options={this.set_query_options} />
                </Row>
            </Grid>
        );
    }
}

export default ContentPostList

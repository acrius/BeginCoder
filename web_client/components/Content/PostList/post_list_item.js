import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row, Col} from 'react-bootstrap'
import marked from 'marked'

class PostListItemFooter extends Component {
    render() {
        <Row>
            <Col md={2}>{this.props.date}</Col>
            <Col md={8}></Col>
            <Col md={2}><Link to={`/${this.props.post_id}`}>Читать дальше</Link></Col>
        </Row>
    }
}

class PostListItem extends Component {
    render() {
        const content = marked(this.props.post.content);
        return (
            <Row>
                <Row>
                    <h2>{this.props.post.title}</h2>
                </Row>
                <Row dangerouslySetInnerHTML={{__html: content}}></Row>
                <PostListItemFooter date={this.props.date} post_id={this.props.id} />
            </Row>
        );
    }
}

export default PostListItem

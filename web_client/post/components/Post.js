import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import marked from 'marked'
import moment from 'moment'
import 'moment/locale/ru'

class PostFooter extends Component {
    render() {
        return (
            <Row>
                <Col md={2}>{moment(this.props.date).format('L')}</Col>
                <Col md={4}></Col>
                <Col md={2}>{this.props.views_count}</Col>
                <Col md={2}>{this.props.useful}</Col>
                <Col md={2}>{this.props.author}</Col>
            </Row>
        );
    }
}

class PostVKComments extends Component {
    componentDidMount() {
        VK.Widgets.Comments("vk_comments", {limit: 10, width: "665", attach: "*"});
    }
    render() {
        return (
            <Row>
                <div id="vk_comments"></div>
            </Row>
        );
    }
}

class Post extends Component {
    render() {
        const post = this.props.post;
        const content = marked(post.content)
        return (
            <Col md={9}>
                <Row>
                    <h2>{post.title}</h2>
                </Row>
                <Row dangerouslySetInnerHTML={{__html: content}}></Row>
                <PostVKComments />
            </Col>
        );
    }
}

export default Post

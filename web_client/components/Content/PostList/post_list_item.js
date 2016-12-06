import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row, Col} from 'react-bootstrap'
import marked from 'marked'
import moment from 'moment'
import 'moment/locale/ru'

class PostListItemFooter extends Component {
    render() {
        console.log(this.props.post_id);
        return (
            <Row>
                <Col md={2}>{moment(this.props.date).format('L')}</Col>
                <Col md={8}></Col>
                <Col md={2}><Link to={`/${this.props.post_id}`}>Читать дальше</Link></Col>
            </Row>
        );
    }
}

class PostListItem extends Component {
    render() {
        const content = marked(this.props.post_item.content);
        return (
            <Row>
                <Row>
                    <h2>{this.props.post_item.title}</h2>
                </Row>
                <Row dangerouslySetInnerHTML={{__html: content}}></Row>
                <PostListItemFooter date={this.props.post_item.date} post_id={this.props.post_item.id} />
            </Row>
        );
    }
}

export default PostListItem

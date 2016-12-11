import React, {Component} from 'react'
import {Link} from 'react-router'
import {Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import marked from 'marked'
import moment from 'moment'
import 'moment/locale/ru'

import './styles/post_list_item.styl'

class PostListItemFooter extends Component {
    render() {
        return (
            <Row className='post_list_item_footer'>
                <Col md={3} className='publication_date'>{moment(this.props.date).format('L')}</Col>
                <Col md={6}></Col>
                <Col md={3}>
                    <LinkContainer to={`/${this.props.post_id}`}>
                        <Button>Читать дальше</Button>
                    </LinkContainer>
                </Col>
            </Row>
        );
    }
}

class PostListItem extends Component {
    render() {
        const post = this.props.postItem;
        const preview = marked(post.preview);
        return (
            <Row className='post_list_item'>
                <Row className='post_list_item_title'>
                    <h2>{post.title}</h2>
                </Row>
                <Row className='post_list_item_preview' dangerouslySetInnerHTML={{__html: preview}}></Row>
                <PostListItemFooter date={post.date} post_id={post.id} author={post.author} useful={post.useful} views={post.views_count}/>
            </Row>
        );
    }
}

export default PostListItem

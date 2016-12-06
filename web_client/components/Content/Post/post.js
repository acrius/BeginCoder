import react, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import marked from 'marked'
import moment from 'moment'
import 'moment/locale/ru'

class PostFooter extends Component {
    render() {
        return (
            <Row>
                <Col md={2}>{moment(this.props.date).format('L')}</Col>
                <Col md={8}></Col>
                <Col md={2}>
                    <Link to={`/${this.props.post_id}`}>Читать дальше</Link>
                </Col>
            </Row>
        );
    }
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            content: '',
            date: null,

        }
        if (props.post) {
            this.setState({id: this.props.post.id,
            title: this.props.post.title,
            content: this.props.post.content,
            date: this.props.post.date});
        }
    }
    render() {
        const content = marked(this.state.content);
        return (
            <Col md={9}>
                <Row>
                    <h2>this.state.title</h2>
                </Row>
                <Row dangerouslySetInnerHTML={{
                    __html: content
                }}></Row>
                <PostFooter date={this.state.date} post_id={this.state.id} />
            </Col>
        );
    }
}

export default Post

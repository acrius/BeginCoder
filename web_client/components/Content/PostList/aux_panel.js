import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'

class AuxPanelFilter extends Component {
    render() {
        return (
            <ul>

            </ul>
        );
    }
}

class AuxPanelSort extends Component {
    render() {
        return (
            <ul>

            </ul>
        );
    }
}

class AuxPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort_by = '-date',
            filter_by = [],
            sortings = {},
            filters = {}
        };
        this.get_sortings();
    }

    get_filters() {
        
    }

    get_sortings() {
        this.setState({sortings: {
            '-date': 'Дата публикации',
            'views': 'Просмотрам',
            'useful': 'Полезность'
        });
    }

    render() {
        return (
            <Col md={3}>

            </Col>
        );
    }
}

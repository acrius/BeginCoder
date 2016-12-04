import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'

class AuxPanelFilter extends Component {
    render() {
        return (
            <div>
                <h3>Популярные тэги:</h3>
                <ul>
                    {this.props.filters.map((filter, index) => (
                        <li key={index}>
                            <b>{filter.tag}</b>
                            <b>({filter.count})</b>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class AuxPanelSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select_sorting: ''
        };
    }

    select_sorting(e) {
        this.setState({select_sorting: e.currentTarget.getAttribute('data-value')});

    }

    render() {
        return (
            <div>
                <h3>Сортировать по:</h3>
                <ul>
                    {this.props.sortings.map((sorting, index) => (
                        <li data-value={sorting.sorting} onClick={this.select_sorting} key={index}>{sorting.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class AuxPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort_by: '-date',
            filter_by: [],
            sortings: [],
            filters: []
        };
    }

    componentDidMount() {
        this.get_filters();
        this.get_sorts();
    }

    async get_filters() {
        const filters = await fetch('/api/v01/tags/').then(response => response.json());
        this.setState({filters: filters});
    }

    async get_sorts() {
        const sorts = await fetch('/api/v01/sorts/').then(response => response.json());
        this.setState({sortings: sorts});
    }

    set_sort_by(sort_by) {
        this.setState({sort_by: sort_by});
    }

    render() {
        return (
            <Col md={3}>
                <AuxPanelSort sortings={this.state.sortings} set_sort_by={this.set_sort_by}/>
                <AuxPanelFilter filters={this.state.filters}/>
            </Col>
        );
    }
}

export default AuxPanel

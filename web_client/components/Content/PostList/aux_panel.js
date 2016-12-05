import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'

class AuxPanelFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select_filters: []
        };
    }

    select_filter = (e) => {
        this.update_filter(e.currentTarget.getAttribute('data-value'));
    }

    update_filter = (filter) => {
        let filters = this.state.select_filters.slice();
        const filter_index = filters.indexOf(filter);
        if (filter_index >= 0) {
            filters.splice(filter_index, 1);
        } else {
            filters.push(filter);
        }
        this.setState({select_filters: filters});
        this.props.set_filter_by(filters);
    }

    render() {
        return (
            <div>
                <h3>Популярные тэги:</h3>
                <ul>
                    {this.props.filters.map((filter, index) => (
                        <li key={index} data-value={filter.name} onClick={this.select_filter}>
                            <span>{filter.name}</span>
                            <span>({filter.count})</span>
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

    select_sorting = (e) => {
        const sorting = e.currentTarget.getAttribute('data-value');
        this.setState({select_sorting: sorting});
        this.props.set_sort_by(sorting);
    }

    render() {
        return (
            <div>
                <h3>Сортировать по:</h3>
                <ul>
                    {this.props.sortings.map((sorting, index) => (
                        <li data-value={sorting.sorting_string} onClick={this.select_sorting} key={index}>{sorting.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

class AuxPanel extends Component {
    constructor(params) {
        super(params);
        console.log('Constructor');
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
        this.setState({sortings: sorts.results});
    }

    set_sort_by = (sort_by) => {
        this.update_query_param('sort_by', sort_by);
    }

    set_filter_by = (filter_by) => {
        this.update_query_param('filter_by', filter_by);
    }

    update_query_param = (param_name, param) => {
        let state = {}
        state[param_name] = param
        console.log(state);
        this.setState(state, () => {
            this.props.set_query_options(this.state.sort_by, this.state.filter_by);
        });
    }

    render() {
        return (
            <Col md={3}>
                <AuxPanelSort sortings={this.state.sortings} set_sort_by={this.set_sort_by}/>
                <AuxPanelFilter filters={this.state.filters} set_filter_by={this.set_filter_by}/>
            </Col>
        );
    }
}

export default AuxPanel

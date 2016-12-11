import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'

import './styles/aux_panel.styl'

class AuxPanelFilter extends Component {
    selectFilter = (e) => {
        this.props.updateSelectedFilters(e.currentTarget.getAttribute('data-value'));
    }

    render() {
        return (
            <div>
                <h3>Популярные тэги:</h3>
                <ul className='filter_list'>
                    {this.props.filters.map((filter, index) => (
                        <li key={index} data-value={filter.name} onClick={this.selectFilter}>{
                            this.props.selectedFilters.indexOf(filter.name) < 0 ?
                            (<div>
                                <span>{filter.name}</span>
                                <span>({filter.count})</span>
                            </div>) :
                            (<b>
                                <span>{filter.name}</span>
                                <span>({filter.count})</span>
                            </b>)
                        }
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class AuxPanelSorting extends Component {
    selectSorting = (e) => {
        const sorting = e.currentTarget.getAttribute('data-value');
        this.props.setSelected('selectedSorting', sorting);
    }

    render() {
        return (
            <div>
                <h3>Сортировать по:</h3>
                <ul className='sortings_list'>
                    {this.props.sortings.map((sorting, index) => (
                        <li data-value={sorting.sorting_string} onClick={this.selectSorting} key={index}>
                            {this.props.selectedSorting === sorting.sorting_string ? (<b>{sorting.title}</b>) : sorting.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class AuxPanel extends Component {
    componentDidMount() {
        this.props.actions.getOptions('sortings');
        this.props.actions.getOptions('filters');
    }

    render() {
        const sortings = this.props.sortings;
        const filters = this.props.filters;

        const setSelected = this.props.actions.setSelectedQueryOption;
        const updateSelectedFilters = this.props.actions.updateSelectedFilters;
        return (
            <Col md={3}>
                <AuxPanelSorting sortings={sortings.sortings} selectedSorting={sortings.selectedSorting} setSelected={setSelected} />
                <AuxPanelFilter filters={filters.filters} selectedFilters={filters.selectedFilters} updateSelectedFilters={updateSelectedFilters}/>
            </Col>
        );
    }
}

export default AuxPanel

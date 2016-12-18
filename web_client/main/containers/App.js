import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './style.styl'

export default class App extends Component {
    render() {
        return (
            <div className='main'>
                <Header/>
                <Grid className='grid'>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

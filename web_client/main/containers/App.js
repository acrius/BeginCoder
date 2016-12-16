import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Grid, Row} from 'react-bootstrap'
import {connect} from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import * as UserActions from '../../user/actions/UserActions.js'

import './style.styl'

class App extends Component {
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

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) [
    return {
        userActions: bindActionCreators(UserActions, dispatch);
    };
]

export default connect(mapStateToProps,  mapDispatchToProps)(App)

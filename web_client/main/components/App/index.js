import React, {Component} from 'react'
import {Grid, Row} from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'

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

export default App

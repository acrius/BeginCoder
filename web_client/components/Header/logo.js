import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar} from 'react-bootstrap'

class Logo extends Component {
    render() {
        return (
            <Navbar.Header>
                <Navbar.Brand>__bc__</Navbar.Brand>
            </Navbar.Header>
        );
    }
}

export default Logo

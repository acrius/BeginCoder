import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar} from 'react-bootstrap'

class Logo extends Component {
    render() {
        return (
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/'>__bc__</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
        );
    }
}

export default Logo

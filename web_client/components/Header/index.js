import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav} from 'react-bootstrap'
import Logo from './logo.js'
import Navigation from './navigation.js'

import './style.styl'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className='header'>
                <Logo />
                <Navigation />
            </Navbar>
        );
    }
}

export default Header

import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav} from 'react-bootstrap'
import Logo from './Logo.js'
import Navigation from './Navigation.js'

import './styles/header.styl'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className='header'>
                <Logo />
            </Navbar>
        );
    }
}

export default Header

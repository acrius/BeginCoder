import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

import './style.styl'

class Item extends Component {
    render() {
        return (
            <NavItem>
                <Link to={ this.props.to } className={ this.props.item_class }>
                    { this.props.title }
                </Link>
            </NavItem>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <Navbar.Collapse>
                <Nav>
                    <Item to='/' title='Новости' item_class='main-item'/>
                </Nav>
            </Navbar.Collapse>
        );
    }
}

export default Navigation

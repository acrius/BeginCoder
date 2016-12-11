import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class Item extends Component {
    render() {
        return (
            <LinkContainer to={this.props.to} className={this.props.item_class}>
                <NavItem eventKey={this.props.eventKey}>
                    {this.props.title}
                </NavItem>
            </LinkContainer>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <Navbar.Collapse>
                <Nav>
                    <Item to='/' title='Новости' item_class='main-item' eventKey={1}/>
                </Nav>
            </Navbar.Collapse>
        );
    }
}

export default Navigation

import React, {Component} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <Navbar fixedBottom>
                <Nav pullRight>
                    <LinkContainer to='/about'>
                        <NavItem eventKey={1}>О нас</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
}

export default Footer

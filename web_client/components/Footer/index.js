import React, {Component} from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <Navbar fixedBottom>
                <Nav pullRight>
                    <NavItem>
                        <Link to='/about'>О нас</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Footer

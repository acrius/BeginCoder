import React, {Component} from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App

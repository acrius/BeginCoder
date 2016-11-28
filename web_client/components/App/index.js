import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem  } from 'react-bootstrap'
import { Header } from '../Header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                { this.props.children }
                <footer>acrius 2016</footer>
            </div>
        );
    }
}

export default App

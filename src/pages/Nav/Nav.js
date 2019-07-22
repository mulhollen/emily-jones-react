import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Book from '../Book';
import Services from '../Services';
import BeforeAppointment from '../BeforeAppointment';

import './nav.css';


const Navbar = styled.div`
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
    height: 70px;
    position: fixed;
    background-color: #fff;


    h2 {
        font-style: italic;
        font-size: 2.7rem;
    }
    
    #logo {
        font-family: 'Playfair Display', serif;
        font-size: 2.7rem;
        font-style: italic;
        font-weight: bold;
        color: #2B040A;
        margin-left: 21px;
    }

    #logo:hover {
        text-decoration: none;
        color: #81021C;
    }
`

var menuSize;

class Nav extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
    }

    componentWillMount() {

        this.setState({menuOpen: false});
        
        if ( window.innerWidth > 450) {
            menuSize = '300px'
        } else {
          menuSize = '100%'
        }
    }

    componentDidUpdate(){
        console.log("can I close", this.state.menuOpen);
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    showSettings (event) {
        event.preventDefault();
    }
    
    render(){
        return (
            <Router>
                <Navbar>
                    <div>
                        <NavLink id="logo" to='/ '>ej</NavLink>
                    </div>
                </Navbar>
                <div className="rightNav">
                    <Menu width={ menuSize } isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                        <NavLink id="book" className="menu-item" to='/book' onClick={() => this.closeMenu()}>book</NavLink>
                        <NavLink id="about" className="menu-item" to='/about' onClick={() => this.closeMenu()}>about</NavLink>                            
                        <NavLink id="services" className="menu-item" to='/services' onClick={() => this.closeMenu()}>services</NavLink>
                        <NavLink id="contact" className="menu-item" to='/contact' onClick={() => this.closeMenu()}>contact</NavLink>
                        <NavLink id="beforeAppointment" className="menu-item" to='/before-appointment' onClick={() => this.closeMenu()}>before your appointment</NavLink>
                    </Menu>
                </div>
                <Switch>
                    <Route path="/ " component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/book" component={Book} />
                    <Route path="/services" component={Services} />
                    <Route path="/before-appointment" component={BeforeAppointment} />
                </Switch>
            </Router>
        );
    }
}

export default Nav;



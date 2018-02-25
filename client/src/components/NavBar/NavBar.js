import React from 'react';
import {Navbar, NavItem,} from 'react-materialize';
//import './NavBar.css';


const Nav = props => (
    <Navbar brand='PetFinder' right>
	<NavItem to='get-started.html'>Home</NavItem>
	<NavItem href='components.html'>LogIn</NavItem>
</Navbar>
);

export default Nav;
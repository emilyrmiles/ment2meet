import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import './index.css';
import logo from './ment2meet-logo.png'
const Navbar = () => {
    return (
   
        
          <Nav className="navbar-container">
              <NavLink to= "/home">
                <img src={logo} alt='ment2meet logo' width="150" height="45" />
              </NavLink>
              <Bars />
              <NavMenu>
                  <NavLink to='/about'
                  activeStyle={{
                    fontWeight: "bold",
                    
                  }}
                  
                  >
                    About
                  </NavLink>
                  <NavLink to='/resources' 
                  activeStyle={{
                    fontWeight: "bold",
                    
                  }}
                  >
                    Resources
                  </NavLink>
                  <NavLink to='/mentors' 
                  activeStyle={{
                    fontWeight: "bold",
                   
                  }}

                  >
                    Mentors
                  </NavLink>
                  <NavLink to='/group-sessions' 
                  activeStyle={{
                    fontWeight: "bold",
                    
                  }}
                  >
                    Group Sessions
                  </NavLink>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to='/register'>Sign Up/ Sign In</NavBtnLink>
              </NavBtn>
            </Nav>  
    
    );
};

export default Navbar;
 

import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container,Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { logOut, user} = useAuth();
    return (
        


            <>
  <Navbar collapseOnSelect expand="lg" sticky="top" className="navBgColor" variant="dark">
    <Container>
            <Navbar.Brand as={Link} to="/"> Fitness Doctor</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#aboutus">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                       
                        <Navbar.Text>

                            {user.email && <span> Hello, {user.email} </span>}
                            {user.email ?
                <Button className="navButton" onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt}/> Log out</Button>
                  : <Nav.Link as={Link} to="/login" ><Button className="navButton"><FontAwesomeIcon icon={faSignInAlt} /> Login </Button> </Nav.Link>
                  
    } 
       
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>

</>
    );
};

export default Header;
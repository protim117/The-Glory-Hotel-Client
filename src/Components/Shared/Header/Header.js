import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../img/logo.PNG'
import { useHistory } from 'react-router';
import './Header.css'

const Header = () => {
    const{user,logOut}=useAuth();
    const history=useHistory();
  const signOut=()=>{
      logOut();
        history.push('/home');
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand >
                        <Link to='/home'> 
                        {/* logo */}
                            <img src={logo} style={{width: '80px'}}  alt="The Glory Hotel" />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    {/* If the user is logged in then some button will show up  */}
                    { !user.email?
                        <NavLink to='/login' activeClassName="selected" className='fw-bold'><button className='btn signIn-btn fw-bold'>SignIn</button></NavLink>
                        : <Nav className='nav-section'>
                            <Navbar.Text className='px-3 mt-1 text-dark fw-bold'>
                            Signed in as: {user.displayName}
                            </Navbar.Text>
                        <NavLink activeClassName="selected" className='mx-3' to='/mybooking'>
                        <button className='btn px-3'>My Booking</button>
                        </NavLink>
                        <NavLink activeClassName="selected"  className='mx-3' to='/ManageBooking'>
                            <button  className='btn px-3'>Manage All Booking</button>
                        </NavLink>
                        <NavLink activeClassName="selected" className='mx-3' to='/addbooking'>
                            <button className='btn px-3'>Add Booking</button>
                        </NavLink>

                        <button className='btn ms-3 rounded-4' onClick={signOut}>LogOut</button>
                        </Nav>
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
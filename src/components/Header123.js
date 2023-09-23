import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default class Header123 extends Component {
  render() {
    return (
      <div className='underline'>
        <Navbar data-bs-theme="dark" style={{backgroundColor:"lightpink"}}>
        <Container>
        <img alt="" src="./image/logo.jpg" width="30" height="30" className="d-inline-block align-top"/>{' '}
          <Navbar.Brand href="#home"><b>DreamCars</b></Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/Shop'>Shop</Link></Nav.Link>
            <Nav.Link><Link to='/Whyus'>Whyus</Link></Nav.Link>
            <Nav.Link><Link to='/Testimonial'>Testimonial</Link></Nav.Link>
            <Nav.Link><Link to='/Savings1'>Latest offer</Link></Nav.Link>
            <Nav.Link><Link to='/Contact'>Contact</Link></Nav.Link>
            <Nav.Link><Link to='/Login'><i class="fa-solid fa-user"></i>Login</Link></Nav.Link>
            <Nav.Link><Link to='/shop'><i class="fa-solid fa-cart-shopping"></i>Shop</Link></Nav.Link>
            <Nav.Link><Link to='/search'><i class="fa-solid fa-magnifying-glass"></i></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
  }
}

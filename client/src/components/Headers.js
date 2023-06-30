import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <h4 className=" text-light text-decoration-none">Chatbot</h4>
          <Nav className="">
          <NavLink to="/" className="mt-3 mx-2 text-light text-decoration-none">Home</NavLink><p className="mt-3 mx-2 text-light text-decoration-none">|</p>
            <NavLink to="/signup" className="mt-3 mx-2 text-light text-decoration-none">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers
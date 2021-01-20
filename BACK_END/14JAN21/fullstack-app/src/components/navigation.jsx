import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import {
    Navbar,
    Nav,
    Dropdown,
    DropdownButton
} from 'react-bootstrap'

// import connect redux
import { connect } from "react-redux"

//NOTE import action log out
import { logout } from "../action"

function Navigation(props) {
    console.log(props)
    let renderCount = useRef(1)
    console.log(`Navigation Bar rendered ${renderCount.current} times`)
    renderCount.current = renderCount.current + 1
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/product'>Product</Nav.Link>
                </Nav>
                <Dropdown style={{ margin: '0 40px' }}>
                    <DropdownButton title={!props.username ? 'Username' : props.username}
                        variant={props.username ? 'primary' : 'success'} id="dropdown-button-drop-left" >
                        {props.username
                            ?
                            <Dropdown.Item onClick={props.logout}>Log out</Dropdown.Item>
                            :
                            <>
                                <Dropdown.Item as={Link} to='/login' >Login</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/register'>Sign Up</Dropdown.Item>
                            </>
                        }
                    </DropdownButton>
                </Dropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}

// NOTE: state disini ambil dari global state bukan local cuy
let mapStateToProps = (state) => {
    return {
        username: state.user.username,
        password: state.user.password,
        email: state.user.email,
        cart: state.user.cart,
        role: state.user.role
    }
}


export default connect(mapStateToProps, { logout })(Navigation)
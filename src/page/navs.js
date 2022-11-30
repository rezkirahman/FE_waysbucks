import React, { useState, useRef } from 'react'
import { Container, Nav, Navbar, Button, Popover, Overlay } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Login from './login'
import Register from './register'
import Logo from '../assets/image/logo.png'
import { Link, } from 'react-router-dom'
import Photouser from '../assets/image/profilephoto.png'
import Iconcart from '../assets/image/icon-cart.png'
import Iconaddproduct from '../assets/image/icon-addproduct.png'
import Iconaddtopping from '../assets/image/icon-addtopping.png'
import Iconlogout from '../assets/image/icon-logout.png'


const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"))

let redirect = null

export default function Navs() {
  if (DataUser !== null) {
    if (DataUser[0].role === "admin") {
      redirect="/admin"
    } else {
      redirect="/"
    }
  } else {
    redirect="/"
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to={redirect}>
              <img src={Logo} alt='Logo' width={80} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            {DataUser !== null ?
              DataUser[0].role === "admin" ?
                <Adminpanel /> : <Userpanel />
              : <LoginRegister />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

function LoginRegister() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowReg] = useState(false)

  return (
    <Nav>
      <Nav.Link>
        <Button variant='danger' onClick={() => setShowLogin(true)}>Login</Button>
      </Nav.Link >
      <Nav.Link>
        <Button variant='outline-danger' onClick={() => setShowReg(true)}>Sign Up</Button>

        <Login
          show={showLogin}
          onHide={() => setShowLogin(false)}
          setShowLogin={setShowLogin}
          setShowRegister={setShowReg}
        />

        <Register
          show={showRegister}
          onHide={() => setShowReg(false)}
          setShowLogin={setShowLogin}
          setShowRegister={setShowReg}
        />
      </Nav.Link>
    </Nav >
  )
}

function Userpanel() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  let navigate = useNavigate()

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  }

  const LogOut = () => {
    navigate("/")
    localStorage.removeItem("VALUE_LOGIN")
    window.location.reload()
  }
  return (
    <Nav>
      <Nav.Link className=''>
        <Link to='/cart'>
          <img src={Iconcart} alt='iconcart' width={30} />
        </Link>
      </Nav.Link>
      <Nav.Link ref={ref}>
        <img src={Photouser}
          alt="Photouser"
          width={40}
          height={40}
          className='rounded-circle border border-2 border-danger my-auto text-center'
          onClick={handleClick}
        >
        </img>
      </Nav.Link>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{ boxShadow: "2px 4px 30px 0px gray" }} className="-3">
          <Popover.Body>
            <div className=''>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <img src={Iconaddproduct} width={30} alt="addproduct" />
                <text className='fw-bold mx-3 text-dark'>Profile</text>
              </Link>
            </div>
          </Popover.Body>
          <hr />
          <Popover.Body>
            <div>
              <Link onClick={LogOut} style={{ textDecoration: "none" }}>
                <img src={Iconlogout} width={30} alt="logout" />
                <text className='fw-bold mx-3 text-dark'>Log Out</text>
              </Link>
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>

    </Nav>
  )
}

function Adminpanel() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  let navigate = useNavigate()

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  }

  const LogOut = () => {
    navigate("/")
    localStorage.removeItem("VALUE_LOGIN")
    window.location.reload()
  }

  return (
    <Nav>
      <Nav.Link ref={ref}>
        <img src={Photouser}
          alt="Photouser"
          width={40}
          height={40}
          className='rounded-circle border border-2 border-danger my-auto text-center'
          onClick={handleClick}
        >
        </img>
      </Nav.Link>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-basic" style={{ boxShadow: "2px 4px 30px 0px gray" }} className="-3">
          <Popover.Body>
            <div className='mb-4'>
              <Link to="/add-product" style={{ textDecoration: "none" }}>
                <img src={Iconaddproduct} width={30} alt="addproduct" />
                <text className='fw-bold mx-3 text-dark'>Add Product</text>
              </Link>
            </div>
            <div>
              <Link to="/add-topping" style={{ textDecoration: "none" }}>
                <img src={Iconaddtopping} width={30} alt="addtopping" />
                <text className='fw-bold mx-3 text-dark'>Add Topping</text>
              </Link>
            </div>
          </Popover.Body>
          <hr />
          <Popover.Body>
            <div>
              <Link onClick={LogOut} style={{ textDecoration: "none" }}>
                <img src={Iconlogout} width={30} alt="logout" />
                <text className='fw-bold mx-3 text-dark'>Log Out</text>
              </Link>

            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </Nav>
  )
}

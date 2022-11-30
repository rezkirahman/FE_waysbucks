import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Login({ show, onHide, setShowLogin, setShowRegister }) {

  const users = []

  const [dataLogin, setdataLogin] = useState({
    email: "",
    password: "",
    //role:"admin",
  })

  const loginDataUser = JSON.parse(localStorage.getItem("DATA_USER"))

  const handleOnChange = (e) => {
    setdataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    window.location.reload(false)
    loginDataUser.forEach((element) => {
      if (dataLogin.email === element.email && dataLogin.password === element.password) {
        users.push(dataLogin)
        localStorage.setItem("VALUE_LOGIN", JSON.stringify(users))
        setShowLogin(false)

      } else {
        console.log(loginDataUser)
      }
    })
  }


  return (
    <>
      <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Body>
          <Modal.Title className='text-danger'>Login</Modal.Title>
        </Modal.Body>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={handleOnChange}
                value={dataLogin.email}
                name="email"
                type="email"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                onChange={handleOnChange}
                value={dataLogin.password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Body>
          <div className='d-grid gap-2'>
            <Button variant="danger" onClick={handleOnSubmit}>Login</Button>
          </div>
        </Modal.Body>
        <Modal.Body>
          <Form.Label
            className='mx-0'>don't have an account? click <Link
              style={{ textDecoration: "none" }}
              className='fw-bold text-dark'
              onClick={() => {
                setShowLogin(false)
                setShowRegister(true)
              }}>
              Here
            </Link>
          </Form.Label>
        </Modal.Body>
      </Modal>
    </>
  );
}

import React, { useState } from 'react'
import { Form, Modal, Button, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Register({ show, onHide, setShowLogin, setShowRegister }) {
    const [dataReg, setDataReg] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const addDataUser = JSON.parse(localStorage.getItem("DATA_USER"))

    const handleOnChange = (e) => {
        setDataReg({
            ...dataReg,
            [e.target.name]: e.target.value,
        })
    }

    const users = []

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (addDataUser === null) {
            users.push(dataReg)
            localStorage.setItem("DATA_USER", JSON.stringify(users))
        }
        else {
            addDataUser.forEach((element) => {
                users.push(element)
            });

            users.push(dataReg)
            localStorage.setItem("DATA_USER", JSON.stringify(users))
        }

        setShowRegister(false)
        setShowLogin(true)
    }

    return (
        <>
            <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Body>
                    <Modal.Title className=''>Register</Modal.Title>
                </Modal.Body>
                <Modal.Body>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="fullname">
                            <Form.Control
                                onChange={handleOnChange}
                                value={dataReg.fullname}
                                name="fullname"
                                type="text"
                                placeholder="Full Name"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                onChange={handleOnChange}
                                value={dataReg.email}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Control
                                onChange={handleOnChange}
                                value={dataReg.password}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Body>
                    <div className='d-grid gap-2'>
                        <Button variant="danger" onClick={handleOnSubmit}>Register</Button>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <Form.Label className='text-center'>already have an account? click <Link
                    style={{textDecoration:"none"}}
                    className='fw-bold text-dark'
                        onClick={() => {
                            setShowRegister(false)
                            setShowLogin(true)
                        }}>
                        Here
                    </Link>
                    </Form.Label>
                </Modal.Body>
            </Modal>
        </>
    );
}
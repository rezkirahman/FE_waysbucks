import React from "react"
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap'
import Palmsugar from '../assets/image/palmsugar.png'
import Bin from '../assets/image/bin.png'
import Invoice from '../assets/image/icon-invoice.png'

const fontcolor = "#BD0707"
const cardcolor = "#F7DADA"
const fontcolor2 = "#613D2B"


export default function Cart() {
    return (
        <Container className="p-5 mx-auto" style={{ color: fontcolor }}>
            <div>
                <p className="fw-bold fs-3">My Cart</p>
                <p>review Your Order</p>
                <div className="row">
                    <div className="col-sm-6 col-md-8" style={{ fontSize: "14px" }}>
                        <hr />
                        <ReviewOrder />
                        <ReviewOrder />
                        <hr />
                        <OrderPrice />
                    </div>
                    <div className="col-6 col-md-4">
                        <PaymentForm />
                    </div>
                </div>
            </div>
        </Container>
    )
}

function ReviewOrder() {
    return (
        <div className="d-flex justify-content-between my-3">
            <div className="d-flex justify-content-between me-1">
                <div className="me-3">
                    <img src={Palmsugar} alt="palm" width={50} height={50} />
                </div>
                <div>
                    <div className="mb-1">
                        <text className="fw-bold">Ice Coffe Palm Sugar</text>
                    </div>
                    <div>
                        <text><span className="fw-bold" style={{ color: fontcolor2 }}>Toping :  </span> Bill Berry Boba, Bubble tea Gelatin</text>
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-1" align="right">
                    <text>Rp 36.000</text>
                </div>
                <div>
                    <img src={Bin} alt="bin" width={20} align="right" />
                </div>
            </div>
        </div>
    )
}

function OrderPrice() {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-8">
                <hr />
                <div className="d-flex justify-content-between">
                    <div>
                        <p>Subtotal</p>
                        <p>Qty</p>
                    </div>
                    <div align="right">
                        <p>69.000</p>
                        <p>2</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="fw-bold">Subtotal</p>
                    </div>
                    <div align="right">
                        <p className="fw-bold">69.000</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4">
                <Container className="rounded-2 py-4 my-3" style={{ backgroundColor: cardcolor, borderStyle:"solid", borderColor:fontcolor}}>
                    <div align="center" className="mb-3">
                        <img src={Invoice} alt="invoice" width={50}/>
                    </div>
                    <div align="center">
                        <text style={{ fontSize: "18px", opacity:"0.4"}}>Attache of Transaction</text>
                    </div>
                </Container>
            </div>
        </div>
    )
}

function PaymentForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="Name">
                <FloatingLabel label="Name">
                    <Form.Control type="text" placeholder="Name"
                        style={{
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
                <FloatingLabel label="Email">
                    <Form.Control type="text" placeholder="Email"
                        style={{
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
                <FloatingLabel label="Phone">
                    <Form.Control type="text" placeholder="Phone"
                        style={{
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Poscode">
                <FloatingLabel label="Pos Code">
                    <Form.Control type="text" placeholder="Pos Code"
                        style={{
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <FloatingLabel label="Address">
                    <Form.Control as="textarea" placeholder="Adress"
                        style={{
                            height: '100px',
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>


            <div className="d-grid gap-2">
                <Button variant="danger" style={{background:fontcolor}}>Pay</Button>
            </div>
        </Form>
    )
}
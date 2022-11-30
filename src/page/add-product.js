import React from "react"
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap'
import Productpic from '../assets/image/palmsugar.png'

const fontcolor = "#BD0707"
const cardcolor = "#F7DADA"

export default function AddProduct() {
    return (
        <Container className="p-5 mx-auto" style={{ color: fontcolor }}>
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-8 mb-3">
                        <p className="fw-bold fs-2">Product</p>
                        <AddProductForm />
                    </div>
                    <div className="col-6 col-md-4">
                        <img src={Productpic} alt='productpic' className="img-fluid" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

function AddProductForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="Name">
                <FloatingLabel label="Name">
                    <Form.Control type="text" placeholder="Name Product"
                        style={{
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <FloatingLabel label="Name">
                    <Form.Control type="text" placeholder="Price"
                        style={{
                            borderColor: fontcolor,
                            background: cardcolor
                        }} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="productphoto">
                <Form.Control type="file" placeholder="Photo Product"
                    style={{
                        borderColor: fontcolor,
                        background: cardcolor
                    }} />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button style={{ background: fontcolor }} variant='danger'>Add Product</Button>
            </div>
        </Form>
    )
}
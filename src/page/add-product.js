import { React, useState } from "react"
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import Productpic from '../assets/image/palmsugar.png'

const fontcolor = "#BD0707"
const cardcolor = "#F7DADA"

export default function AddProduct() {
    const navigate = useNavigate()
    const [preview, setPreview] = useState(null)
    const [productPic, setProductPic] = useState(<p>Photo Product</p>)

    const [form, setForm] = useState({
        name: '',
        price: '',
        image: '',
        qty: '1',
    });

    const handleChange = (e) => {
        setForm({
            [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value,
        });

        //PREVIEW IMAGE
        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
            setProductPic(<p className="txt-black">{url}</p>)
        }
    }



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
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataProduct } from '../assets/data/datas'
import Login from '../page/login'
import Register from '../page/register'

const fontcolor = "#BD0707"
const cardcolor = "#F7DADA"
export default function Product() {
    return (
        <Container className='px-5 justify-content-between mt-3' >
            <div>
                <p className='h3 font-weight-bold mt-5 fw-bold' style={{ color: fontcolor }}>Let's Order</p>
            </div>
            <div className='row'>
                {DataProduct.map((products) => (
                    <CardProduct
                        key={products.key}
                        id={products.id}
                        name={products.name}
                        image={products.image}
                        price={products.price}
                    />
                ))}

            </div>
        </Container>
    )
}

function CardProduct(product) {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowReg] = useState(false)

    const navigate = useNavigate()
    let Redirect = null
    const isLogin = JSON.parse(!!localStorage.getItem("VALUE_LOGIN"))

    if (isLogin) {
        Redirect = () => { navigate(`/detail/${product.id}`) }
    } else {
        Redirect = () => setShowLogin(true)

    }

    return (
        <Container key={product.id} onClick={Redirect} className='mt-4 col' style={{ textDecoration: "none" }}>
            <div className='card' style={{ width: "241px", height: "392px", backgroundColor: cardcolor, borderRadius: "10px", border: "none" }}>
                <img src={product.image} className="card-img-top" alt="Hero" />
                <div className="card-body">
                    <h5 className="card-title fw-bold" style={{ color: fontcolor }}>{product.name}</h5>
                    <p className="card-text" style={{ color: fontcolor }}>Rp. {product.price}</p>
                </div>
            </div>
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
        </Container>
    )




}
import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { DataProduct, DataTopping } from '../assets/data/datas'
import CardTopping from '../component/card-topping'

export default function ProductDetail() {
    const { id } = useParams()
    const fontcolor = "#BD0707"
    return (
        <Container className='px-5 justify-content-between mt-5' >
            <div className='row'>
                <div className='col'>
                    <img className='img-fluid' src={DataProduct[id].image} alt='palm' width={436} height={555} />
                </div>
                <div className='col' style={{ color: fontcolor }}>
                    <div>
                        <p className='h1 fw-bold'>{DataProduct[id].name}</p>
                        <p>Rp. {DataProduct[id].price}</p>
                    </div>
                    <div>
                        <p className='fw-bold mt-5 fs-4'>Toping</p>
                        <div className='row row-cols-4'>
                            {DataTopping.map((topping) => (
                                <CardTopping 
                                    id={topping.id}
                                    name={topping.name}
                                    image={topping.image}
                                />
                            ))}
                            
                        </div>
                    </div>
                    <div className='mt-5 d-flex justify-content-between'>
                        <p className='fw-bold fs-4'>Total</p>
                        <p className='fw-bold fs-4'>Rp 27.000</p>
                    </div>
                    <div className='d-grid gap-2'>
                        <Button variant='danger' style={{ background: fontcolor }}>Add Chart</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
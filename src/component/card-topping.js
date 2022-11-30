import React from 'react'

export default function CardTopping(data) {
    return (
        <div>
            <div className='col  mx-auto mt-4' height={117} align='center'>
                <img src={data.image} alt='Topping' className='img-fluid' width={75} height={85} />
                <div className=''>
                    <p className='card-text' style={{fontSize:"14px"}}>{data.name}</p>
                </div>
            </div>
        </div>
    )
}
import React, { useContext } from "react"
import { Container } from 'react-bootstrap'
import Photo from '../assets/image/profilephoto.png'
import Logo from '../assets/image/logo.png'
import Qrcode from '../assets/image/qr-code.png'
import Palmsugar from '../assets/image/palmsugar.png'
import { UserContext } from "../context/UserContext"
import Nav from '../component/navs'
// import { useNavigate } from "react-router-dom"
// import { API } from "../config/api"
// import { useQuery } from "react-query"

const fontcolor = "#BD0707"
const fontcolor2 = "#613D2B"
const cardcolor = "#F7DADA"

export default function Profile() {

    return (
        <>
            <Nav />
            <Container className='px-5 justify-content-between mt-5' >
                <div className="row">
                    <div className="col">
                        <MyProfile />
                    </div>
                    <div className="col">
                        <Transaction />
                    </div>
                </div>
            </Container>
        </>
    )
}

function MyProfile() {
    const [state] = useContext(UserContext)

    return (
        <>
            <div style={{ color: fontcolor }}>
                <p className="fs-5 fw-bold">My Profile</p>
            </div>
            <div className="d-flex mb-5">
                <div className="me-4">
                    <img src={Photo} alt="" width={180} />
                </div>
                <div className="">
                    <label className="fw-bold">Full Name</label>
                    <p>{state.user.name}</p>
                    <label className="fw-bold">Email</label>
                    <p>{state.user.email}</p>
                </div>
            </div>

        </>
    )
}

function Transaction() {
    // let { data: trans } = useQuery('transCache', async () => {
    //     const respTrans = await API.get('/user-transaction');
    //     console.log(respTrans)
    //     return respTrans.data.data;
    // });

    return (
        <>
            <div style={{ color: fontcolor2 }}>
                <p className="fw-bold fs-5">My Transaction</p>
            </div>
            <div className="d-flex justify-content-between p-4 rounded-3" style={{ backgroundColor: cardcolor }}>
                <div>
                    <TransactionProduct />
                </div>
                <div>
                    <TransacationBill />
                </div>
            </div>
        </>
    )
}

function TransactionProduct() {
    return (
        <div className="d-flex justify-content-between my-2">
            <div className="me-3">
                <img src={Palmsugar} alt="" width={80} />
            </div>
            <div style={{ color: fontcolor }}>
                <div className="mb-2">
                    <label className="fw-bold" style={{ fontSize: "14px" }}>Ice Coffee Palm Sugar</label><br />
                    <label style={{ fontSize: "10px" }}><span className="fw-bold">Saturday</span> 5, March 2020</label><br />
                </div>
                <div>
                    <label style={{ fontSize: "10px" }}><span className="fw-bold" style={{ color: fontcolor2 }}>Toping</span> : Bill Berry Boba, Mango</label><br />
                    <label style={{ color: fontcolor2, fontSize: "10px" }}>Price : Rp.36.000</label><br />
                </div>
            </div>
        </div>
    )
}

function TransacationBill() {
    return (
        <div align="center">
            <div>
                <img src={Logo} width={50} alt="" />
            </div>
            <div className="mt-3" align="center">
                <img src={Qrcode} width={50} alt="" />
            </div>
            <div className="mt-3 px-4 py-1 rounded-3" style={{ backgroundColor: "#CCF6FF" }}>
                <label style={{ color: "#00D1FF" }}>On The Way</label>
            </div>
            <div className="mt-3" style={{ color: fontcolor2 }}>
                <p className="fw-bold">Sub total : 69.000</p>
            </div>
        </div>
    )
}


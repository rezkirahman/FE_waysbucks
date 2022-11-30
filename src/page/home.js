
import {} from 'react-router-dom'
import Jumbotron from '../component/hero'
import Product from '../component/product'
import Admin from './admin'

const dataLogin = JSON.parse(localStorage.getItem("VALUE_LOGIN"))

export default function Home() {
    if (dataLogin !== null) {
        return (
            dataLogin[0].role === "admin" ? <Admin /> :
                <>
                    <Jumbotron />
                    <Product />
                </>
        )
    }
    else {
        return (
            <>
                <Jumbotron />
                <Product />
            </>
        )
    }
}

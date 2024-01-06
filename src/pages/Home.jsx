import React from 'react'
import ProductList from '../containers/ProductList'
import '../styles/Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <h1>React Shop</h1>
            <ProductList />
        </div>
    )
}

export default Home
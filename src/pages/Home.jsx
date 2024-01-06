import React from 'react'
import ProductList from '@containers/ProductList'
import '@styles/Home.scss'
import Header from '@components/Header'

const Home = () => {
    return (
        <div className='Home'>
            <Header />
            <h1>React Shop</h1>
            <ProductList />
        </div>
    )
}

export default Home
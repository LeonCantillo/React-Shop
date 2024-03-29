import React from 'react'
import OrderItem from '../components/OrderItem'
import '../styles/Checkout.scss'

const Checkout = () => {
    return (
        <div className='Checkout'>
            <div className='Checkout-containter'>
                <h1 className='title'>My Order</h1>
                <div className='Checkout-content'>
                    <div className='order'>
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    )
}

export default Checkout
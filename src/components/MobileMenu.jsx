import React from 'react'
import '@styles/MobileMenu.scss'

const MobileMenu = () => {
    return (
        <div class="mobile-menu">
            <p className='title'>CATEGORIES</p>
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Other</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/" class="email">platzi@example.com</a>
                </li>
                <li>
                    <a href="/" class="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu
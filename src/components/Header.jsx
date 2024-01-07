import React, {useState} from 'react'
import UserMenu from '@components/UserMenu.jsx'
import '@styles/Header.scss'

import menuHamburguer from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  
  const handleToggle = () => {
    setToggle(!toggle)
  }
    return (
        <header>
          <nav className='header container'>
            <img src={menuHamburguer} alt='menuHamburguer' className='menuHamburguer' />
          
            <div className='navbar-left'>
              <img src={logo} alt='logo' className='logo' />
              <ul>
                <li>
                  <a href='/'>All</a>
                </li>
                <li>
                  <a href='/'>Clothes</a>
                </li>
                <li>
                  <a href='/'>Electronics</a>
                </li>
                <li>
                  <a href='/'>Furnitures</a>
                </li>
                <li>
                  <a href='/'>Toys</a>
                </li>
                <li>
                  <a href='/'>Others</a>
                </li>
              </ul>
            </div>
          
            <div className='navbar-right'>
              <ul>
                <li className='navbar-email'
                onClick={handleToggle}>
                platzi@example.com
                </li>
                <li className='navbar-shopping-cart'>
                  <img src={shoppingCart} alt='shopping cart' />
                  <div>2</div>
                </li>
              </ul>
            </div>
            {toggle && <UserMenu />}
          </nav>
        </header>
    )
}

export default Header
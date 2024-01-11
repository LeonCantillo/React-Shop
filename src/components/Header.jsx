import React, { useState, useContext, useEffect } from 'react'
import AppContext from '@context/AppContext'
import MobileMenu from './MobileMenu'
import UserMenu from '@components/UserMenu.jsx'
import MyOrder from '@containers/MyOrder'
import '@styles/Header.scss'

import menuHamburguer from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
  const { state } = useContext(AppContext)
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false)
  const [toggleUserMenu, setToggleUserMenu] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const mobileMenu = document.querySelector('.mobile-menu')
      if (toggleMenuMobile && mobileMenu && !mobileMenu.contains(event.target)) {
        setToggleMenuMobile(false);
      }

      const userMenu = document.querySelector('.UserMenu')
      if (toggleUserMenu && userMenu && !userMenu.contains(event.target)) {
        setToggleUserMenu(false);
      }

      const myOrder = document.querySelector('.MyOrder')
      if (toggleOrders && myOrder && !myOrder.contains(event.target)) {
        setToggleOrders(false);
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
}, [toggleMenuMobile, toggleUserMenu, toggleOrders])

  return (
    <header>
      <nav className='header container'>
        <img 
          src={menuHamburguer} 
          alt='menuHamburguer' 
          className='menuHamburguer'
          onClick={() => setToggleMenuMobile(!toggleMenuMobile)}
        />
        {toggleMenuMobile && <MobileMenu />}

        <div className='navbar-left'>
          <a href="/"><img src={logo} alt='logo' className='logo' /></a>
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
            <li 
              className='navbar-email'
              onClick={() => setToggleUserMenu(!toggleUserMenu)}
            >
              platzi@example.com
            </li>
            <li 
              className='navbar-shopping-cart'
              onClick={() => setToggleOrders(!toggleOrders)}
            >
              <img src={shoppingCart} alt='shopping cart' />
              {state.cart.length > 0 ?
              <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggleUserMenu && <UserMenu />}
        {toggleOrders && <MyOrder />}
      </nav>
    </header>
  )
}

export default Header
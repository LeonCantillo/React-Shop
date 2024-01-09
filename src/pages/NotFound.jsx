import React from 'react'
import { useNavigate } from 'react-router-dom'
import '@styles/404.scss'

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <h4 className='title-notfound'>404</h4>
            <p>NO ENCONTRADO</p>
            <a href='/' className='buttonStyles type-2'>Volver</a>
        </div>
    )
}

export default NotFound
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import '../styles/404.scss'

const NotFound = () => {
    const navigate = useNavigate()
    const redirectToHomeButton = () => {
        navigate('/')
    }

    return (
        <div className="notfound-container">
            <h4 className="title-notfound">404</h4>
            <p>NO ENCONTRADO</p>
            <Button type={2} functionToEjecute={redirectToHomeButton}>Volver</Button>
        </div>
    )
}

export default NotFound
import React from "react"
import '../styles/button.scss'

const Button = ({type=1, children, functionToEjecute}) => {
    return (
        <button 
            onClick={functionToEjecute || (() => {})}
            className={`buttonStyles type-${type}`}
        >
            {children}
        </button>
    )
}

export default Button;
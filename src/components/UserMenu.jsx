import React from 'react'
import '@styles/UserMenu.scss'

const UserMenu = () => {
    return (
        <div class="UserMenu">
            <ul>
                <li>
                    <a href="/" class="title">My orders</a>
                </li>
            
                <li>
                    <a href="/">My account</a>
                </li>
            
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export default UserMenu
import React from 'react'
import '../styles/global.css'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'

const App = () => {
    return (
        <Layout>
            <Login />
            <RecoveryPassword />
        </Layout>
    )
}

export default App
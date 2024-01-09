import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Header from '@components/Header'
import Home from '@pages/Home'
import Login from '@pages/Login'
import CreateAcount from '@pages/CreateAccount'
import MyAccount from '@pages/MyAccount'
import NewPassword from '@pages/NewPassword'
import PasswordRecovery from '@pages/PasswordRecovery'
import SendEmail from '@pages/SendEmail'
import Checkout from '@pages/Checkout'
import Orders from '@pages/Orders'
import NotFound from '@pages/NotFound'
import '@styles/global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<><Header /><Home /></>} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/signup' element={<CreateAcount />} />
                    <Route exact path='/account' element={<><Header /><MyAccount /></>} />
                    <Route exact path='/new-password' element={<><Header /><NewPassword /></>}/>
                    <Route exact path='/password-recovery' element={<><Header /><PasswordRecovery /></>} />
                    <Route exact path='/send-email' element={<><Header /><SendEmail /></>} />
                    <Route exact path='/checkout' element={<><Header /><Checkout /></>} />
                    <Route exact path='/orders' element={<><Header /><Orders /></>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
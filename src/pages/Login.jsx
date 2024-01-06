import React from 'react'

const Login = () => {
    return (
        <div className='login'>
          <div className='form-container'>
            <img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />
      
            <form action='/' className='form'>
              <div>
                <label for='email' className='label'>Email address</label>
                <input type='text' id='email' placeholder='platzi@example.cm' className='input input-email' />
              </div>
      
              <div>
                <label for='password' className='label'>Password</label>
                <input type='password' id='password' placeholder='*********' className='input input-password' />
              </div>
      
              <input type='submit' value='Log in' className='primary-button login-button' />
              <a href='/'>Forgot my password</a>
            </form>
      
            <button className='secondary-button signup-button'>Sign up</button>
          </div>
        </div>
    )
}

export default Login
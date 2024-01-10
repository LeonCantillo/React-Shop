import React, { useRef } from 'react'

const Login = () => {
  const form = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }
  return (
      <div className='login'>
        <div className='form-container'>
          <img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />
    
          <form action='/' className='form' ref={form}>
            <div>
              <label for='email' className='label'>Email address</label>
              <input type='text' name='email' placeholder='platzi@example.cm' className='input input-email' />
            </div>
    
            <div>
              <label for='password' className='label'>Password</label>
              <input type='password' name='password' placeholder='*********' className='input input-password' />
            </div>
    
            {/* <input type='submit' value='Log in' className='buttonStyles type-1 login-button' /> */}
            <button className='buttonStyles type-1 login-button' onClick={handleSubmit}>Log in</button>
            <a href='/'>Forgot my password</a>
          </form>
    
          <button className='buttonStyles type-2 signup-button'>Sign up</button>
        </div>
      </div>
  )
}

export default Login
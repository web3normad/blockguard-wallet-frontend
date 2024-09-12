import React from 'react';
import { Link } from 'react-router-dom';
import Lock from '../assets/images/locked-icon.png';
import Message from '../assets/images/message-icon.png';
import Logo from '../assets/images/blockguard.jpg'
import '../components/Login.css'

export const Login = () => {
  const logoStyle = {
    width: '250px',
    height: '250px',
  }
  const imageStyle = {
    width: '25px',
    height: '25px',
  }
  const imageStylle = {
    width: '35px',
    height: '35px',
  }
  return (
    <div className='body'>
      <div className='logo'>
        <img src={Logo} alt='logo' style={logoStyle} />
      </div>
      <div>
        <div className='log'>
          <img src={Message} style={imageStyle} className='img' />
          <input className='input' type="text" placeholder='blockfuselabs@live.com' />
        </div>
        <hr />
        <div className='log'>
          <img src={Lock} style={imageStylle} className='img'/>
          <input className='input' type="password" placeholder='***********'/>
        </div>
        <hr />
        <p className='ForgotP'>Forgot your password?</p>
        <button className='button'>SIGN IN</button>
        <p>Don't have an account?</p>
        {/* <Link to={''}>REG</Link> */}
        <a href="" className='link'>REGISTER</a>
      </div>
    </div>
  )
}

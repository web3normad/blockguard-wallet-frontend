import React from 'react';
import '../components/Login.css';
import Log from '../assets/images/wallet-logged.png';
import Message from '../assets/images/Message-icon.png';
import Logo from '../assets/images/blockguard-logo.png';

const Login = () => {

  const logoStyle = {
    width: '250px',
    height: '250px',
  }
  const imageStyle = {
    width: '25px',
    height: '25px',
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
          <img src={Log} style={imageStyle} className='img'/>
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

export default Login
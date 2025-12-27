
import React from 'react';

const LoginScreen = ({ onClose }) => {
  return (
    <div id='login-screen'>
      <div id='login-window' className='window windows-box-shadow'>
        <div className='header'>Enter Password</div>
        <div className='content'>
          <input type='password' className='margin-input inverse-windows-box-shadow' />
          <div className='ok-cancel'>
            <button onClick={onClose} className='windows-box-shadow'>OK</button>
            <button className='windows-box-shadow'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

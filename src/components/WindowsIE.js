import React, { useState } from 'react'

const WindowsIE = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false) // 최소화 상태
  const [isMaximized, setIsMaximized] = useState(false) // 최대화 상태

  const handleMinimize = () => {
    setIsMinimized(true) // 최소화
  }

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev) // 최대화/복원 토글
  }

  const handleClose = () => {
    onClose() // 부모 컴포넌트에서 창을 닫는 핸들러 호출
  }

  // 동적으로 스타일 설정
  const windowStyle = {
    top: isMaximized ? "0" : "5rem",
    left: isMaximized ? "0" : "10vw",
    display: isMinimized ? 'none' : 'block' // 최소화 시 숨김
  }

  return (
    <div className='window ie windows-box-shadow' style={windowStyle}>
      <div className='header'>
        <label htmlFor='windows-ie-input-on-top'>HYEJIN LIM</label>
        <div className='header-buttons'>
          <label
            htmlFor='windows-ie-input-min'
            className='minimize windows-box-shadow'
            onClick={handleMinimize}
          >
            _
          </label>
          <label
            htmlFor='windows-ie-input-max'
            className='maximize windows-box-shadow'
            onClick={handleMaximize}
          >
            {isMaximized ? '🗗' : '🗖'}
          </label>
          <label
            htmlFor='windows-ie-input'
            className='close windows-box-shadow'
            onClick={handleClose}
          >
            X
          </label>
        </div>
      </div>
      <div className='options line'>
        <div className='item'>File</div>
        <div className='item'>Edit</div>
        <div className='item'>Views</div>
        <div className='item'>Favorites</div>
        <div className='item'>Tools</div>
        <div className='item'>Help</div>
      </div>
      <div className='options padding'>
        <div className='item'>Address</div>
        <input
          type='text'
          className='inverse-windows-box-shadow'
          value='https://github.com/JJIN0323'
          readOnly
        />
      </div>
      <div className='content'>
        <iframe
          src='http://jjins0.cafe24.com'
          title='HYEJIN LIM'
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  )
}

export default WindowsIE

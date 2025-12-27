import React, { useState } from 'react'

const Documents = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false) // 최소화 상태
  const [isMaximized, setIsMaximized] = useState(false) // 최대화 상태

  const handleMinimize = () => {
    setIsMinimized(true) // 최소화
  }

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev) // 최대화/복원 토글
  }

  const handleClose = () => {
    onClose() // 부모 컴포넌트에서 창 닫기 핸들러 호출
  }

  // 동적으로 스타일 설정
  const windowStyle = {
    top: isMaximized ? '0' : '5rem',
    left: isMaximized ? '0' : '10vw',
    display: isMinimized ? 'none' : 'block', // 최소화 시 숨김
  }

  return (
    <div className="window documents windows-box-shadow" style={windowStyle}>
      {/* Header */}
      <div className="header">
        <label htmlFor="windows-documents-input-on-top">Documents</label>
        <div className="header-buttons">
          <label
            htmlFor="windows-documents-input-min"
            className="minimize windows-box-shadow"
            onClick={handleMinimize}
          >
            _
          </label>
          <label
            htmlFor="windows-documents-input-max"
            className="maximize windows-box-shadow"
            onClick={handleMaximize}
          >
            {isMaximized ? '🗗' : '🗖'}
          </label>
          <label
            htmlFor="windows-documents-input"
            className="close windows-box-shadow"
            onClick={handleClose}
          >
            X
          </label>
        </div>
      </div>

      {/* Options */}
      <div className="options line">
        <div className="item">File</div>
        <div className="item">Edit</div>
        <div className="item">Views</div>
        <div className="item">Go</div>
        <div className="item">Favourites</div>
        <div className="item">Help</div>
      </div>

      {/* Content */}
      <div className="content white">
        <input type="radio" name="documents-radio" id="secret-codes" />
        <input type="radio" name="documents-radio" id="diary" />
        <label className="file secret-codes" htmlFor="secret-codes">
          <span className="image">
            <img src="img/code-icon.png" alt="Secret Codes Icon" />
          </span>
          <span className="text">Secret_Codes.txt</span>
        </label>
        <label className="file diary" htmlFor="diary">
          <span className="image">
            <img src="img/diary-icon.png" alt="Diary Icon" />
          </span>
          <span className="text">Diary.rtf</span>
        </label>
      </div>
    </div>
  )
}

export default Documents

import React from 'react';

const Notepad = ({ onClose }) => {
  return (
    <div className="window notepad windows-box-shadow">
      <div className="header">
        <label htmlFor="windows-notepad-input-on-top">Notepad</label>
        <div className="header-buttons">
          <label htmlFor="windows-notepad-input-min" className="minimize windows-box-shadow"></label>
          <label htmlFor="windows-notepad-input-max" className="maximize windows-box-shadow"></label>
          <label htmlFor="windows-notepad-input" onClick={onClose} className="close windows-box-shadow">X</label>
        </div>
      </div>

      <div className="options line">
        <div className="item">File</div>
        <div className="item">Edit</div>
        <div className="item">Search</div>
      </div>

      <div className="content">
        <textarea></textarea>
      </div>
    </div>
  );
};

export default Notepad;
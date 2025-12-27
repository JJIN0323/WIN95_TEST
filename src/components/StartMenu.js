import React from 'react';

const StartMenu = () => {
  return (
    <div id="start-menu" className="windows-box-shadow">
      <div id="windows-start-menu-blue">
        Windows<span>98</span>
      </div>
      <ul>
        <li className="line update">
          <label htmlFor="windows-update-input">
            <img src="img/update.png" style={{ width: '1.5rem' }} alt="Windows Update" /> Windows Update
          </label>
        </li>
        <li className="programs">
          <label>
            <img src="img/program.png" style={{ width: '1.5rem' }} alt="Programs" /> Programs
          </label>
          <ul className="windows-box-shadow">
            <li>
              <label htmlFor="windows-ie-input">
                <img src="img/ex.png" alt="Internet Explorer" />
                <input type="checkbox" /> Internet Explorer
              </label>
            </li>
            <li>
              <label htmlFor="windows-minesweeper-input">
                <img src="img/mr.png" alt="Minesweeper" /> Minesweeper
              </label>
            </li>
            <li>
              <label htmlFor="windows-notepad-input">
                <img src="img/note.png" alt="Notepad" /> Notepad
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label htmlFor="windows-documents-input">
            <img src="img/folder.png" style={{ width: '1.5rem' }} alt="Documents" /> Documents
          </label>
        </li>
        <li className="line">
          <label htmlFor="windows-help-input">
            <img src="img/help.png" style={{ width: '1.5rem' }} alt="Help" /> Help
          </label>
        </li>
        <li>
          <label htmlFor="login-screen-input">
            <img src="img/logout.png" style={{ margin: '0 0.5rem 0 0' }} alt="Log Off" /> Log Off
            <span className="spiderman logout-prompt"> Spiderman...</span>
            <span className="zark-muckerberg logout-prompt"> Zark Muckerberg...</span>
            <span className="donald-trump logout-prompt"> Donald Trump...</span>
          </label>
        </li>
        <li>
          <label htmlFor="shutdown-screen-input">
            <img
              src="img/shutdown.png"
              style={{ margin: '0 0.5rem 0 0' }}
              alt="Shutdown"
            />{' '}
            Shutdown
          </label>
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;

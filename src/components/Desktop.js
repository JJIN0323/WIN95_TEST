import React, { useState } from 'react';
import WindowsIE from './WindowsIE';
import Documents from './Documents';
import Notepad from './Notepad';
import Minesweeper from './Minesweeper';

const Desktop = () => {
  const [openWindow, setOpenWindow] = useState(null); // 열린 창 상태

  const handleIconClick = (windowName) => {
    setOpenWindow(windowName); // 클릭한 창 열기
  };

  const handleCloseWindow = () => {
    setOpenWindow(null); // 창 닫기
  };

  return (
    <div id="desktop" style={{ width: '100vw', height: '100vh', backgroundColor: '#008080', padding: '20px' }}>
      {/* Internet Explorer 아이콘 */}
      <div className="desktop-item" onClick={() => handleIconClick('WindowsIE')}>
        <div className="icon">
          <img src="/img/ex.png" alt="Internet Explorer" />
        </div>
        <div className="text">Internet Explorer</div>
      </div>

      {/* Documents 아이콘 */}
      <div className="desktop-item" onClick={() => handleIconClick('Documents')}>
        <div className="icon">
          <img src="/img/folder.png" alt="Documents" />
        </div>
        <div className="text">Documents</div>
      </div>

      {/* Notepad 아이콘 */}
      <div className="desktop-item" onClick={() => handleIconClick('Notepad')}>
        <div className="icon">
          <img src="/img/note.png" alt="Notepad" />
        </div>
        <div className="text">Notepad</div>
      </div>

      {/* Minesweeper 아이콘 */}
      <div className="desktop-item" onClick={() => handleIconClick('Minesweeper')}>
        <div className="icon">
          <img src="/img/mr.png" alt="Minesweeper" />
        </div>
        <div className="text">Minesweeper</div>
      </div>

      {/* 열린 창 */}
      {openWindow === 'WindowsIE' && <WindowsIE onClose={handleCloseWindow} />}
      {openWindow === 'Documents' && <Documents onClose={handleCloseWindow} />}
      {openWindow === 'Notepad' && <Notepad onClose={handleCloseWindow} />}
      {openWindow === 'Minesweeper' && <Minesweeper onClose={handleCloseWindow} />}
    </div>
  );
};

export default Desktop;

import React, { useState, useEffect } from 'react';
import StartMenu from './StartMenu';

const StartBar = ({ onLogout, onShutdown }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [isStartMenuVisible, setIsStartMenuVisible] = useState(false);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
      setCurrentTime(timeString);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleStartMenu = () => {
    setIsStartMenuVisible((prev) => !prev);
    console.log(isStartMenuVisible);
  };
  

  return (
    <div id="start-bar">
      <div id="start-button-items">
        {/* Start 버튼 */}
        <label
          id="start-button"
          className="windows-box-shadow"
          onClick={toggleStartMenu}
          aria-pressed={isStartMenuVisible}
        >
        </label>
        <div id="items">
          <label htmlFor="windows-ie-input-min" className="ie-tab tab windows-box-shadow">
            <span>
              <img src="img/ex.png" alt="Internet Explorer" />
            </span>
            <span>Internet Explorer</span>
          </label>
          <label htmlFor="windows-documents-input-min" className="documents-tab tab windows-box-shadow">
            <span>
              <img src="img/folder.png" alt="Documents" />
            </span>
            <span>Documents</span>
          </label>
        </div>
      </div>

      {/* StartMenu 표시 */}
      {isStartMenuVisible && (
        <StartMenu onLogout={onLogout} onShutdown={onShutdown} />
      )}

      <div id="time-options">
        <span>{currentTime}</span>
      </div>
    </div>
  );
};

export default StartBar;

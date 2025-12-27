import React, { useState, useEffect } from "react";
import "./Minesweeper.css";

const Minesweeper = () => {
  const rows = 8;
  const cols = 8;
  const totalMines = 34;

  const [grid, setGrid] = useState(generateGrid(rows, cols, totalMines));
  const [revealed, setRevealed] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(false))
  );
  const [flags, setFlags] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(false))
  );
  const [gameStatus, setGameStatus] = useState("Playing");
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (gameStatus === "Playing" && gameStarted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStatus, gameStarted]);

  function generateGrid(rows, cols, mines) {
    const grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0)
    );

    let mineCount = 0;
    while (mineCount < mines) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);

      if (grid[row][col] !== "mine") {
        grid[row][col] = "mine";
        mineCount++;

        for (let r = -1; r <= 1; r++) {
          for (let c = -1; c <= 1; c++) {
            const newRow = row + r;
            const newCol = col + c;
            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < cols &&
              grid[newRow][newCol] !== "mine"
            ) {
              grid[newRow][newCol]++;
            }
          }
        }
      }
    }
    return grid;
  }

  const handleCellClick = (row, col) => {
    if (revealed[row][col] || flags[row][col] || gameStatus !== "Playing")
      return;

    if (!gameStarted) setGameStarted(true);

    const newRevealed = [...revealed];
    newRevealed[row][col] = true;

    if (grid[row][col] === "mine") {
      setGameStatus("Lost");
      revealAllMines();
      return;
    }

    if (grid[row][col] === 0) {
      revealEmptyCells(row, col, newRevealed);
    }

    setRevealed(newRevealed);
    checkWin(newRevealed);
  };

  const handleRightClick = (e, row, col) => {
    e.preventDefault();
    if (revealed[row][col] || gameStatus !== "Playing") return;

    const newFlags = [...flags];
    newFlags[row][col] = !newFlags[row][col];
    setFlags(newFlags);
    checkWin(revealed);
  };

  const revealEmptyCells = (row, col, revealedGrid) => {
    for (let r = -1; r <= 1; r++) {
      for (let c = -1; c <= 1; c++) {
        const newRow = row + r;
        const newCol = col + c;
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !revealedGrid[newRow][newCol] &&
          !flags[newRow][newCol]
        ) {
          revealedGrid[newRow][newCol] = true;
          if (grid[newRow][newCol] === 0) {
            revealEmptyCells(newRow, newCol, revealedGrid);
          }
        }
      }
    }
  };

  const revealAllMines = () => {
    const newRevealed = [...revealed];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "mine") {
          newRevealed[r][c] = true;
        }
      }
    }
    setRevealed(newRevealed);
  };

  const checkWin = (revealedGrid) => {
    let coveredCells = 0;
    let correctFlags = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!revealedGrid[r][c]) coveredCells++;
        if (flags[r][c] && grid[r][c] === "mine") correctFlags++;
      }
    }

    if (coveredCells === totalMines && correctFlags === totalMines) {
      setGameStatus("Won");
      setGameStarted(false);
    }
  };

  const resetGame = () => {
    setGrid(generateGrid(rows, cols, totalMines));
    setRevealed(Array.from({ length: rows }, () => Array(cols).fill(false)));
    setFlags(Array.from({ length: rows }, () => Array(cols).fill(false)));
    setGameStatus("Playing");
    setTimer(0);
    setGameStarted(false);
  };

  const handleMinimize = () => {
    setIsVisible(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpen = () => {
    setIsVisible(true);
  };

  return isVisible ? (
    <div
      className={`window minesweeper windows-box-shadow ${
        isMaximized ? "maximized" : ""
      }`}
    >
      <div className="header">
        <div className="title">Minesweeper</div>
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
            {isMaximized ? "🗗" : "🗖"}
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

      <div className="score">
        <div className="scoreboard">🚩{totalMines - flags.flat().filter(Boolean).length}</div>
        <div className="smiley-face" onClick={resetGame}>
          {gameStatus === "Lost" ? "😵" : gameStatus === "Won" ? "😎" : "😊"}
        </div>
      </div>

      <div className="options line">
        <div className="item">Time: {timer}s</div>
        <div className="item" onClick={resetGame}>
          Reset
        </div>
        <div className="item">{gameStatus}</div>
      </div>

      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${
                  revealed[rowIndex][colIndex]
                    ? cell === "mine"
                      ? "mine"
                      : "revealed"
                    : ""
                } ${flags[rowIndex][colIndex] ? "flag" : ""}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
              >
                {revealed[rowIndex][colIndex] && cell !== 0 && cell !== "mine"
                  ? cell
                  : ""}
                {flags[rowIndex][colIndex] && !revealed[rowIndex][colIndex]
                  ? "🚩"
                  : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <button onClick={handleOpen}>Open Minesweeper</button>
  );
};

export default Minesweeper;

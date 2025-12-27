
import React, { useState } from 'react'
import Desktop from './components/Desktop'
import Windows from './components/Windows'
import StartBar from './components/StartBar'
import LoginScreen from './components/LoginScreen'
import ShutdownScreen from './components/ShutdownScreen'
import './App.css'

function App() {
  const [isLoginScreenVisible, setLoginScreenVisible] = useState(true)
  const [isShutdownScreenVisible, setShutdownScreenVisible] = useState(false)

  return (
    <div>
      {isLoginScreenVisible && (
        <LoginScreen onClose={() => setLoginScreenVisible(false)} />
      )}
      {isShutdownScreenVisible && <ShutdownScreen />}
      <Desktop />
      <Windows />
      <StartBar
        onLogout={() => setLoginScreenVisible(true)}
        onShutdown={() => setShutdownScreenVisible(true)}
      />
    </div>
  )
}

export default App

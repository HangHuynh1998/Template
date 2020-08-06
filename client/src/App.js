import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import Box from './components/Box/Box'
import Button from './components/Button/Button'

const App = _ => {
  return (
    <BrowserRouter>
      <Logo />
      <Box />
    </BrowserRouter>
  )
}

export default App

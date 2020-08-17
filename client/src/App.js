import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './components/Logo/Logo'
//import Box from './components/Box/Box'
//import Button from './components/Button/Button'
import  "./App.scss";
const App = _ => {
  return (
    <BrowserRouter className='App'>
      <Logo />
      {/* <Box /> */}
    </BrowserRouter>
  )
}

export default App

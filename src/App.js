import React from 'react'
import MyLayout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyLayout />
      </BrowserRouter>
    </div>
  )
}

export default App
